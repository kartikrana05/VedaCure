import User from '../models/User.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken'
import createError from 'http-errors';
import Otp from '../models/Otp.js'
import dotenv from 'dotenv';
dotenv.config({path:'../.env'});
import nodemailer from 'nodemailer';
console.log("JWT secret is:", process.env.JWT_SECRET);
console.log("E_EMAIL_USER is:", process.env.E_EMAIL_USER);
console.log("E_EMAIL_PASS is:", process.env.E_EMAIL_PASS);
const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: process.env.E_EMAIL_USER,
        pass: process.env.E_EMAIL_PASS
    }
});

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
    const info = await transporter.sendMail({
      from: process.env.E_EMAIL_USER,
      to: email,
      subject: 'Verify Your Email',
      html: `<p>Your OTP for registration is: <strong>${otp}</strong></p>`
    });
    console.log("Email sent:", info.messageId);
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