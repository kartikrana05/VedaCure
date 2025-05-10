import express from 'express';
import { register, login,updateProfile } from '../controllers/UserAuthController.js';
import { authenticateDoctor, authenticateUser } from '../middleware/middleware.js';
import { getAllDoctors } from '../controllers/DoctorAuthController.js';

const router = express.Router();
router.post('/register', register);
router.post('/login', login);
router.put('/update', authenticateUser, updateProfile);
router.get('/profile', authenticateUser, (req, res) => {
    res.json({ user: req.user });
});
// get all doctors
router.get('/all', getAllDoctors);
export default router;