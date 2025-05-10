import DoctorAvailability from '../models/DoctorAvailability.js';
import Appointment from '../models/Appointment.js';

// Doctor sets availability
export const setAvailability = async (req, res) => {
  try {
    const { date, slots } = req.body;
    const doctorId = req.doctor._id;

    const availability = await DoctorAvailability.findOneAndUpdate(
      { doctor: doctorId, date },
      { $set: { slots } },
      { upsert: true, new: true }
    );

    res.status(200).json(availability);
  } catch (error) {
    res.status(500).json({ message: "Failed to set availability" });
  }
};

// Doctor gets their own availability
export const getDoctorAvailability = async (req, res) => {
  try {
    const doctorId = req.doctor._id;
    const availability = await DoctorAvailability.find({ doctor: doctorId });
    res.status(200).json(availability);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch availability" });
  }
};

// Patients get doctor availability
export const getAvailabilityForPatient = async (req, res) => {
  try {
    const { doctorId, date } = req.body;
    
    // Get availability
    const availability = await DoctorAvailability.findOne({ 
      doctor: doctorId, 
      date 
    });

    // Get existing appointments
    const appointments = await Appointment.find({ 
      doctor: doctorId, 
      date,
      status: { $ne: 'cancelled' }
    });

    // Mark booked slots as unavailable
    const updatedSlots = availability?.slots.map(slot => {
      const isBooked = appointments.some(appt => 
        appt.startTime === slot.startTime && 
        appt.endTime === slot.endTime
      );
      return { ...slot.toObject(), isAvailable: !isBooked };
    }) || [];

    res.status(200).json({
      date,
      slots: updatedSlots
    });
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch availability" });
  }
};


export const bookAppointment = async (req, res) => {
  try {
    console.log("Booking appointment");
    const { doctor, date, startTime, endTime } = req.body;
    const patient = req.user._id; // Assuming JWT middleware sets req.user

    // 1. Check if the slot is available in doctor's availability
    const availability = await DoctorAvailability.findOne({ doctor, date });
    if (!availability) {
      return res.status(404).json({ message: "Doctor is not available on this date." });
    }

    // 2. Find the slot and check if it's available
    const slot = availability.slots.find(
      s => s.startTime === startTime && s.endTime === endTime && s.isAvailable
    );
    if (!slot) {
      return res.status(400).json({ message: "Selected slot is not available." });
    }

    // 3. Check if slot is already booked (double-booking prevention)
    const existing = await Appointment.findOne({
      doctor,
      date,
      startTime,
      endTime,
      status: { $ne: 'cancelled' }
    });
    if (existing) {
      return res.status(409).json({ message: "This slot has already been booked." });
    }

    // 4. Book the appointment
    const appointment = new Appointment({
      patient,
      doctor,
      date,
      startTime,
      endTime,
      status: 'confirmed'
    });
    await appointment.save();

    slot.isAvailable = false;
    await availability.save();

    res.status(201).json({
      message: "Appointment booked successfully.",
      appointment
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error. Could not book appointment." });
  }
};
