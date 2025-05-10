import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db.js';
import userRoutes from './routes/userRoutes.js';
import doctorRoutes from './routes/doctorRoutes.js';


const app = express();
connectDB();
app.use(cors());
app.use(express.json());
dotenv.config();
app.use(express.urlencoded({ extended: true }));
app.use('/api/users', userRoutes);
app.use('/api/doctors', doctorRoutes);
app.get('/', (req, res) => {
  console.log("Hello World!!");
  res.json({"message":'Hello World!'});
});
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
