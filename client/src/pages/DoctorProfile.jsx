import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../styles/DoctorProfile.css";
import doctorImg from "../assets/3725520.jpg";

const doctorData = {
  1: {
    name: "Dr Nithin Kumar .N",
    specialization: "Neurologist",
    rating: 4.6,
    reviews: 310,
    patients: 512,
    experience: 10,
    bio: "Dr.Nithin kumar is Neurologist from working at Apollo Hospital since Jaya nagar, Bangalore. He has 14 years of experience in this field. He has done his MBBS from Government Medical. Has published articles in various National journals.",
    img: doctorImg,
    schedule: ["2023-08-02", "2023-08-03", "2023-08-04", "2023-08-05", "2023-08-06", "2023-08-07"],
    slots: {
      "2023-08-02": ["05:00 PM", "05:30 PM", "06:00 PM", "06:30 PM"],
      "2023-08-03": ["05:00 PM", "05:30 PM", "06:00 PM"],
      "2023-08-04": ["06:00 PM", "06:30 PM", "07:00 PM"],
      "2023-08-05": ["05:00 PM", "07:00 PM", "07:30 PM"],
      "2023-08-06": ["05:00 PM", "05:30 PM"],
      "2023-08-07": ["06:00 PM", "06:30 PM"]
    },
    charge: 1200
  },
  2: {
    name: "Dr Tanya Sharma",
    specialization: "Pulmonologist",
    rating: 4.8,
    reviews: 210,
    patients: 400,
    experience: 8,
    bio: "Dr. Tanya Sharma is a Pulmonologist with 8 years of experience. She specializes in respiratory issues and has helped many patients recover from Covid-19.",
    img: doctorImg,
    schedule: ["2023-08-02", "2023-08-03", "2023-08-04"],
    slots: {
      "2023-08-02": ["06:00 PM"],
      "2023-08-03": ["05:00 PM", "06:00 PM"],
      "2023-08-04": ["05:00 PM", "06:00 PM"]
    },
    charge: 1000
  },
  3: {
    name: "Dr Akshatha Shetty",
    specialization: "General Physician",
    rating: 4.2,
    reviews: 120,
    patients: 300,
    experience: 5,
    bio: "Dr. Akshatha Shetty is a General Physician with 5 years of experience. She is known for her patient-friendly approach and effective treatments.",
    img: doctorImg,
    schedule: ["2023-08-02", "2023-08-03"],
    slots: {
      "2023-08-02": ["03:00 PM"],
      "2023-08-03": ["03:00 PM", "04:00 PM"]
    },
    charge: 800
  }
};

export default function DoctorProfile() {
  const { id } = useParams();
  const navigate = useNavigate();
  const doctor = doctorData[id];
  const [selectedDate, setSelectedDate] = useState(doctor.schedule[0]);
  const [selectedSlot, setSelectedSlot] = useState(doctor.slots[doctor.schedule[0]][0]);

  const handleBook = () => {
    alert(`Appointment booked with ${doctor.name} on ${selectedDate} at ${selectedSlot}`);
    navigate("/dashboard");
  };

  return (
    <div className="doctor-profile-wrapper">
      <div className="doctor-profile-header">
        <img src={doctor.img} alt={doctor.name} className="doctor-profile-img" />
        <div className="doctor-profile-maininfo">
          <div className="doctor-profile-name">{doctor.name}</div>
          <div className="doctor-profile-spec">{doctor.specialization}</div>
          <div className="doctor-profile-rating">
            <span>⭐ {doctor.rating}</span>
            <span className="doctor-profile-reviews">{doctor.reviews} Reviews</span>
          </div>
          <div className="doctor-profile-meta">
            <span>Patients: {doctor.patients}+</span>
            <span>Experience: {doctor.experience}+ yrs</span>
          </div>
        </div>
      </div>
      <div className="doctor-profile-bio">
        <b>Biography</b>
        <div>{doctor.bio}</div>
      </div>
      <div className="doctor-profile-schedule-block">
        <div className="doctor-profile-schedule-title">Set Schedule</div>
        <div className="doctor-profile-schedule-row">
          {doctor.schedule.map(date => (
            <button
              key={date}
              className={"doctor-profile-date-btn" + (selectedDate === date ? " selected" : "")}
              onClick={() => {
                setSelectedDate(date);
                setSelectedSlot(doctor.slots[date][0]);
              }}
            >
              {new Date(date).toLocaleDateString("en-US", { month: "short", day: "2-digit" })}
            </button>
          ))}
        </div>
      </div>
      <div className="doctor-profile-slots-block">
        <div className="doctor-profile-slots-title">Available Slots</div>
        <div className="doctor-profile-slots-row">
          {doctor.slots[selectedDate].map(slot => (
            <button
              key={slot}
              className={"doctor-profile-slot-btn" + (selectedSlot === slot ? " selected" : "")}
              onClick={() => setSelectedSlot(slot)}
            >
              {slot}
            </button>
          ))}
        </div>
      </div>
      <div className="doctor-profile-footer">
        <span className="doctor-profile-charge">{doctor.charge} Consultation Charge</span>
        <button className="doctor-profile-book-btn" onClick={handleBook}>Book an Appointment</button>
      </div>
    </div>
  );
} 