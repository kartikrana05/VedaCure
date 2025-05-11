import User from '../models/User.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken'
import createError from 'http-errors';
import dotenv from 'dotenv';
dotenv.config({path:'../.env'});
console.log("JWT secret is:", process.env.JWT_SECRET);

import Otp from '../models/Otp.js';
import nodemailer from 'nodemailer';

dotenv.config({ path: '../.env' });

// Configure nodemailer transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS
  }
});

// Registration - Send OTP
export const register = async (req, res) => {
  try {
    const { name, username, email, password, phone } = req.body;

    // Check existing user
    if (await User.findOne({ email })) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Generate OTP
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    const expiresAt = new Date(Date.now() + 5 * 60 * 1000); // 5 minutes

    // Save OTP
    await Otp.create({ email, otp, expiresAt });

    // Send OTP email
    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: email,
      subject: 'Verify Your Email at VedaCure',
      html: `<p>Your OTP for registration at VedaCure is: <strong>${otp}</strong></p>`
    });

    res.status(200).json({ message: "OTP sent to email" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

// Verify OTP and Complete Registration
export const verifyOtp = async (req, res) => {
  try {
    const { email, otp, name, username, password, phone } = req.body;

    // Find OTP
    const otpRecord = await Otp.findOne({ email, otp });
    if (!otpRecord || otpRecord.expiresAt < new Date()) {
      return res.status(400).json({ message: "Invalid or expired OTP" });
    }

    // Create user
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      name,
      username,
      email,
      password: hashedPassword,
      phone,
      isVerified: true,
      createdAt: Date.now()
    });

    await newUser.save();

    // Cleanup OTP
    await Otp.deleteMany({ email });

    // Generate JWT
    const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, { 
      expiresIn: '1h' 
    });

    res.status(201).json({ 
      message: "Registration successful", 
      token,
      user: newUser
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

// Keep existing login and updateProfile functions

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: "User not found" });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid password" });
        }

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

        res.status(200).json({ message: "User logged in successfully", token });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
};
export const updateProfile= async (req, res) => {
    try {
        const { name, username, email, phone } = req.body;
        const userId = req.user._id;

        const updatedUser = await User.findByIdAndUpdate(
            userId,
            { name, username, email, phone },
            { new: true }
        );

        if (!updatedUser) {
            return res.status(404).json({ message: "User not found" });
        }

        res.status(200).json({ message: "Profile updated successfully", user: updatedUser });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
};

// Add this controller to your authController.js
export const getUserProfile = async (req, res) => {
  try {
    const userId = req.user.id; // From JWT middleware
    const user = await User.findById(userId)
      .select('-password -__v') // Exclude sensitive/uneeded fields
      .lean();

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({ 
      message: "Profile retrieved successfully",
      user 
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};
