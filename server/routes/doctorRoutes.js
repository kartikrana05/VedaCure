import express from 'express';
import {register , login ,updateProfile,getProfile } from '../controllers/DoctorAuthController.js';
const router=express.Router();
import { authenticateDoctor } from '../middleware/middleware.js';
import { setAvailability, getDoctorAvailability, getAvailabilityForPatient ,getDoctorAppointments} from '../controllers/AvailabilityController.js';
import { getAllDoctors } from '../controllers/DoctorAuthController.js';
import { verifyOtp } from '../controllers/DoctorAuthController.js';

// Middleware to authenticate doctor
// Define the routes for doctor registration and login
router.post('/register', register);
router.post('/verify', verifyOtp);
router.post('/login', login);
router.put('/update', authenticateDoctor, updateProfile);
router.get('/profile', authenticateDoctor, getProfile);
router.post('/setavailability', authenticateDoctor, setAvailability);
router.get('/getavailability', authenticateDoctor, getDoctorAvailability);
router.get('/getdoctorappointments', authenticateDoctor, getDoctorAppointments);
export default router;