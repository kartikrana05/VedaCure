import React, { useState } from "react";
import "../App.css";

const slides = [
  {
    img: "https://undraw.co/api/illustrations/doctor.svg", // Placeholder image
    title: "Find Experienced Doctors",
    desc: "Consulting with a trusted doctor 24/7. Anywhere and anytime",
  },
  {
    img: "https://undraw.co/api/illustrations/calendar.svg",
    title: "Book Appointments Easily",
    desc: "With a few simple steps, book an appointment with your doctor as needed.",
  },
  {
    img: "https://undraw.co/api/illustrations/consultation.svg",
    title: "Trusted Online Consultation",
    desc: "Consulting with a trusted doctor 24/7. Anywhere and anytime",
  },
];

export default function Onboarding() {
  const [step, setStep] = useState(0);

  return (
    <div className="onboarding-container">
      <img src={slides[step].img} alt="" className="onboarding-img" />
      <h2>{slides[step].title}</h2>
      <p>{slides[step].desc}</p>
      <div className="onboarding-dots">
        {slides.map((_, i) => (
          <span key={i} className={i === step ? "dot active" : "dot"} />
        ))}
      </div>
      <button className="onboarding-btn" onClick={() => setStep((s) => (s + 1) % slides.length)}>
        Start healthy now
      </button>
    </div>
  );
} 