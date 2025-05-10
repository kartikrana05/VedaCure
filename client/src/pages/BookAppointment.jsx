import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "../styles/BookAppointment.css";

const doctorData = {
  1: {
    hospital: "Max Multi Speciality Centre",
    doctor: "Doctor2",
    specialization: "General Physician",
  },
  2: {
    hospital: "Dariyan Ram",
    doctor: "earl",
    specialization: "Neurologist",
  },
};

const timeSlots = [
  "9:00 AM - 10:00 AM",
  "10:00 AM - 11:00 AM",
  "11:00 AM - 12:00 PM",
  "3:00 PM - 4:00 PM",
  "4:00 PM - 5:00 PM",
];

export default function BookAppointment() {
  const { id } = useParams();
  const doctor = doctorData[id];
  const [date, setDate] = useState("");
  const [slot, setSlot] = useState(timeSlots[0]);

  return (
    <div className="book-appointment-wrapper">
      <header className="user-dashboard-header">
        <span className="logo">DoctorzBook</span>
        <nav>
          <a href="#">Doctors</a>
          <a href="#">Appointments</a>
        </nav>
        <button className="logout-btn">Log Out</button>
      </header>
      <main className="book-main">
        <div className="book-doctor-info">
          <h2 className="book-hospital">{doctor.hospital}</h2>
          <div className="book-doctor">{doctor.doctor}</div>
          <div className="book-specialization">{doctor.specialization}</div>
        </div>
        <div className="book-content">
          <div className="book-calendar">
            <label>Date</label>
            <input
              type="date"
              value={date}
              onChange={e => setDate(e.target.value)}
              className="calendar-input"
            />
          </div>
          <div className="book-slot-box">
            <label>Start time</label>
            <select value={slot} onChange={e => setSlot(e.target.value)}>
              {timeSlots.map((t, i) => (
                <option key={i} value={t}>{t}</option>
              ))}
            </select>
            <button className="book-btn" style={{marginTop: 20}}>Book Appointment</button>
          </div>
        </div>
      </main>
    </div>
  );
} 