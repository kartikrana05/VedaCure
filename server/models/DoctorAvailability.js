import mongoose from 'mongoose';

const slotSchema = new mongoose.Schema({
  startTime: { type: String, required: true }, // Format: "HH:MM" (09:00)
  endTime: { type: String, required: true },
  isAvailable: { type: Boolean, default: true }
});

const doctorAvailabilitySchema = new mongoose.Schema({
  doctor: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Doctor', 
    required: true 
  },
  date: { type: String, required: true }, // Format: "YYYY-MM-DD"
  slots: [slotSchema]
}, { timestamps: true });

export default mongoose.model('DoctorAvailability', doctorAvailabilitySchema);
