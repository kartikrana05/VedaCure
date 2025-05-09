import Doctor from "../models/Doctor.js";
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config({path:"../.env"});
console.log("JWT secret is:", process.env.JWT_SECRET);
export const register= async (req,res)=>{
    try {
        const {name, username, email, password,specialization,experience,phone,address,licenseNumber } = req.body;
        const existingUser = await Doctor.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }   
        const salt=await bcrypt.genSalt(10);
        const hashedPassword=await bcrypt.hash(password,salt);
        const newDUser=new Doctor({
            name,
            username,
            email,
            password:hashedPassword,
            specialization,
            experience,
            phone,
            address,
            licenseNumber,
            createdAt:Date.now()
        });
        await newDUser.save();
        res.status(201).json({ message: "Doctor registered successfully" });
    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
}
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