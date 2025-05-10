import React from "react";
import "../App.css";

export default function SplashScreen({ onContinue }) {
  return (
    <div className="splash-container">
      <div className="splash-logo">
        <span role="img" aria-label="stethoscope">🩺</span>
      </div>
      <h1>AskDoctor</h1>
      <button className="onboarding-btn" onClick={onContinue}>
        Continue
      </button>
    </div>
  );
} 