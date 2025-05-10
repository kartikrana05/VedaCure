import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config({ path: '../.env' });
console.log("JWT secret is:", process.env.JWT_SECRET);
import User from '../models/User.js';
import Doctor from '../models/Doctor.js';
import createError from 'http-errors';


export const authenticateUser=async (req,res,next)=>{   
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
        return next(createError(401, "No token provided"));
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await User.findById(decoded.id);
        if (!user) {
            return next(createError(404, "User not found"));
        }
        req.user = user;
        next();
    } catch (error) {
        console.error("JWT verification error:", error);
        next(createError(401, "Invalid token"));
    }
};
export const authenticateDoctor=async (req,res,next)=>{   
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
        return next(createError(401, "No token provided"));
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const doctor = await Doctor.findById(decoded.id);
        if (!doctor) {
            return next(createError(404, "Doctor not found"));
        }
        req.doctor = doctor;
        next();
    } catch (error) {
        console.log("JWT verification error:", error);
        next(createError(401, "Invalid token"));
    }
};