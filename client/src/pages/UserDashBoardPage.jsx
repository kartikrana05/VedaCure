import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/UserDashBoardPage.css";
import doctorImg from "../assets/3725520.jpg";

const symptomsList = [
  "Covid", "Cough", "Fever", "Heart", "Tooth", "Pediatric", "Urologist", "Allergies",
  "Diabetes", "Stress", "Female", "Joints", "Stomach", "Weight", "Ear", "Eye", "Vomiting", "Liver"
];

const doctors = [
  {
    id: 1,
    name: "Dr Nithin Kumar .N",
    specialization: "Neurologist",
    rating: 4.6,
    reviews: 310,
    symptoms: ["Covid", "Cough", "Fever", "Heart", "Stress"],
    img: doctorImg
  },
  {
    id: 2,
    name: "Dr Tanya Sharma",
    specialization: "Pulmonologist",
    rating: 4.8,
    reviews: 210,
    symptoms: ["Covid", "Cough", "Fever"],
    img: doctorImg
  },
  {
    id: 3,
    name: "Dr Akshatha Shetty",
    specialization: "General Physician",
    rating: 4.2,
    reviews: 120,
    symptoms: ["Fever", "Heart", "Stomach"],
    img: doctorImg
  },
];

const appointments = [
  { id: 1, doctor: "Dr Tanya Sharma", specialization: "Pulmonologist", date: "2023-08-28", time: "6:00 PM", status: "upcoming", img: doctorImg },
  { id: 2, doctor: "Dr Nithin Kumar .N", specialization: "Neurologist", date: "2023-08-30", time: "5:00 PM", status: "completed", img: doctorImg },
  { id: 3, doctor: "Dr Akshatha Shetty", specialization: "General Physician", date: "2023-07-28", time: "3:00 PM", status: "cancelled", img: doctorImg },
];

export default function UserDashBoardPage() {
  const navigate = useNavigate();
  const [symptom, setSymptom] = useState("");
  const [selectedSymptom, setSelectedSymptom] = useState("");
  const [tab, setTab] = useState("upcoming");

  // Filter doctors by symptom
  const filteredDoctors = (selectedSymptom || symptom)
    ? doctors.filter(doc => doc.symptoms.some(s => s.toLowerCase().includes((selectedSymptom || symptom).toLowerCase())))
    : doctors;

  // Filter appointments by tab
  const filteredAppointments = appointments.filter(a => a.status === tab);

  return (
    <div className="user-dashboard-modern-wrapper">
      <header className="user-dashboard-header">
        <span className="logo">DoctorzBook</span>
        <button className="logout-btn">Log Out</button>
      </header>
      <main className="modern-main">
        <div className="greeting-block">
          <div className="user-avatar" />
          <div>
            <div className="greeting">Hi Jose</div>
            <div className="subtitle">How are you feeling today?</div>
          </div>
        </div>
        <div className="symptom-search-block">
          <input
            className="symptom-search-input"
            type="text"
            placeholder="Search a health issue"
            value={symptom}
            onChange={e => { setSymptom(e.target.value); setSelectedSymptom(""); }}
          />
        </div>
        <div className="symptom-grid-block">
          <div className="symptom-grid-title">What are your symptoms</div>
          <div className="symptom-grid">
            {symptomsList.map(s => (
              <div
                key={s}
                className={"symptom-chip" + (selectedSymptom === s ? " selected" : "")}
                onClick={() => { setSelectedSymptom(s); setSymptom(""); }}
              >
                {s}
              </div>
            ))}
          </div>
        </div>
        <div className="doctor-suggest-block">
          <div className="doctor-suggest-title">Available Doctors</div>
          <div className="doctor-suggest-list">
            {filteredDoctors.length === 0 ? (
              <div className="empty-msg">No doctors found for your symptom.</div>
            ) : (
              filteredDoctors.map(doc => (
                <div className="doctor-suggest-card" key={doc.id} onClick={() => navigate(`/doctor/${doc.id}`)}>
                  <img src={doc.img} alt={doc.name} className="doctor-suggest-img" />
                  <div className="doctor-suggest-info">
                    <div className="doctor-suggest-name">{doc.name}</div>
                    <div className="doctor-suggest-spec">{doc.specialization}</div>
                    <div className="doctor-suggest-rating">⭐ {doc.rating} <span className="doctor-suggest-reviews">({doc.reviews} Reviews)</span></div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
        <div className="appt-tabs-block">
          <div className="appt-tabs">
            <button className={tab === "upcoming" ? "active" : ""} onClick={() => setTab("upcoming")}>Upcoming</button>
            <button className={tab === "completed" ? "active" : ""} onClick={() => setTab("completed")}>Completed</button>
            <button className={tab === "cancelled" ? "active" : ""} onClick={() => setTab("cancelled")}>Cancelled</button>
          </div>
          <div className="appt-list">
            {filteredAppointments.length === 0 ? (
              <div className="empty-msg">No appointments in this category.</div>
            ) : (
              filteredAppointments.map(a => (
                <div className="appt-card" key={a.id}>
                  <img src={a.img} alt={a.doctor} className="appt-doctor-img" />
                  <div className="appt-info">
                    <div className="appt-doctor">{a.doctor}</div>
                    <div className="appt-spec">{a.specialization}</div>
                    <div className="appt-date-row">
                      <span className="appt-date">📅 {a.date}</span>
                      <span className="appt-time">🕒 {a.time}</span>
                    </div>
                  </div>
                  {tab === "upcoming" && (
                    <div className="appt-actions">
                      <button className="appt-cancel">Cancel</button>
                      <button className="appt-reschedule">Reschedule</button>
                    </div>
                  )}
                </div>
              ))
            )}
          </div>
        </div>
      </main>
    </div>
  );
} 