import express from 'express';
import { register, login,updateProfile,verifyOtp,getUserProfile } from '../controllers/UserAuthController.js';
import { authenticateDoctor, authenticateUser } from '../middleware/middleware.js';
import { getAllDoctors } from '../controllers/DoctorAuthController.js';
import { bookAppointment, getAvailabilityForPatient ,getPatientAppointments } from '../controllers/AvailabilityController.js';
import Appointment from '../models/Appointment.js';


const router = express.Router();
router.post('/register', register);
router.post('/verify', verifyOtp);
router.post('/login', login);
router.put('/update', authenticateUser, updateProfile);
router.get('/profile', authenticateUser,  getUserProfile);

router.get('/availability', authenticateUser, getAvailabilityForPatient);
// router.get('/availabilityPatient', authenticateDoctor, getAvailabilityForPatient);
// get all doctors
router.get('/all', getAllDoctors);
router.post('/bookappointment', authenticateUser, bookAppointment);
router.get('/appointments', authenticateUser, getPatientAppointments);
export default router;