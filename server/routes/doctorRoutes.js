import express from 'express';
import {register , login ,updateProfile } from '../controllers/DoctorAuthController.js';
const router=express.Router();
import { authenticateDoctor } from '../middleware/middleware.js';
import { setAvailability, getDoctorAvailability, getAvailabilityForPatient } from '../controllers/AvailabilityController.js';

// Middleware to authenticate doctor
// Define the routes for doctor registration and login
router.post('/register', register);
router.post('/login', login);
router.put('/update', authenticateDoctor, updateProfile);
// Route to get the doctor's profile
// This route is protected and requires authentication
router.get('/profile', authenticateDoctor, (req, res) => {
    res.json({ doctor: req.doctor });
});
router.post('/setavailability', authenticateDoctor, setAvailability);
router.get('/getavailability', authenticateDoctor, getDoctorAvailability);

export default router;
