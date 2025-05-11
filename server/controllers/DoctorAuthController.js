import Doctor from "../models/Doctor.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import Otp from '../models/Otp.js';
import nodemailer from 'nodemailer';

dotenv.config({ path: "../.env" });

// Configure nodemailer transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS
  }
});

// Doctor Registration - Send OTP
export const register = async (req, res) => {
  try {
    const { email } = req.body;

    // Check existing doctor
    if (await Doctor.findOne({ email })) {
      return res.status(400).json({ message: "Doctor already exists" });
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
      subject: 'Verify Your Email',
      html: `<p>Your OTP for registration is: <strong>${otp}</strong></p>`
    });

    res.status(200).json({ message: "OTP sent to email" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

// Verify OTP and Complete Doctor Registration
export const verifyOtp = async (req, res) => {
  try {
    const { email, otp, name, username, password, specialization, experience, phone, address, licenseNumber } = req.body;

    // Find OTP
    const otpRecord = await Otp.findOne({ email, otp });
    if (!otpRecord || otpRecord.expiresAt < new Date()) {
      return res.status(400).json({ message: "Invalid or expired OTP" });
    }

    // Create doctor
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newDoctor = new Doctor({
      name,
      username,
      email,
      password: hashedPassword,
      specialization,
      experience,
      phone,
      address,
      licenseNumber,
      isVerified: true,
      createdAt: Date.now()
    });

    await newDoctor.save();

    // Cleanup OTP
    await Otp.deleteMany({ email });

    // Generate JWT
    const token = jwt.sign({ id: newDoctor._id }, process.env.JWT_SECRET, { 
      expiresIn: '1h' 
    });

    res.status(201).json({ 
      message: "Doctor registration successful", 
      token,
      doctor: newDoctor
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

// Get Doctor Profile
export const getProfile = async (req, res) => {
  try {
    const doctorId = req.doctor._id;
    const doctor = await Doctor.findById(doctorId)
      .select('-password -__v')
      .lean();

    if (!doctor) {
      return res.status(404).json({ message: "Doctor not found" });
    }

    res.status(200).json({ 
      message: "Profile retrieved successfully",
      doctor 
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};
export const login= async (req,res)=>{
    try {
        const { email, password } = req.body;
        const user = await Doctor.findOne({ email });
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
export const updateProfile = async (req, res) => {
    try {
        const { name, username, email, specialization, experience, phone, address, licenseNumber } = req.body;
        const doctorId = req.doctor._id; // Assuming you have the doctor's ID in req.doctor
        const updatedDoctor = await Doctor.findByIdAndUpdate(
            doctorId,
            { name, username, email, specialization, experience, phone, address, licenseNumber },
            { new: true }
        );
        if (!updatedDoctor) {
            return res.status(404).json({ message: "Doctor not found" });
        }
        res.status(200).json({ message: "Profile updated successfully", doctor: updatedDoctor });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
};
export const getAllDoctors = async (req, res) => {
    try {
        const doctors = await Doctor.find();
        res.status(200).json({ message: "Doctors retrieved successfully", doctors });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
};




