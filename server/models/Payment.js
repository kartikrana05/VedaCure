import mongoose from 'mongoose';
const paymentSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  amount: { type: Number, required: true },
  status: { type: String, enum: ['pending', 'completed', 'failed'], default: 'pending' },
  paymentMethod: { type: String, enum: ['credit_card', 'debit_card', 'paypal'], required: true },
  createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
    appointedDoctor: { type: mongoose.Schema.Types.ObjectId, ref: 'Doctor', required: true },
    amount: { type: Number, required: true },
    gateway: { type: String, default: 'razorpay' },
    razorpayOrderId: { type: String, required: true },
    appointmentDate: { type: Date, required: true },

});