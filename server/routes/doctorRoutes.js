import express from 'express';
import {register , login } from '../controllers/DoctorAuthController.js';
const router=express.Router();
// Define the routes for doctor registration and login
router.post('/register', register);
router.post('/login', login);
export default router;