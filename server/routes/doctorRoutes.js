import express from 'express';
import {register , login } from '../controllers/DoctorAuthController.js';
const router=express.Router();
import { authenticateDoctor } from '../middleware/middleware.js';

// Middleware to authenticate doctor
// Define the routes for doctor registration and login
router.post('/register', register);
router.post('/login', login);
router.get('/profile', authenticateDoctor, (req, res) => {
    res.json({ doctor: req.doctor });
});
export default router;