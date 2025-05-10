import React from "react";
import "../styles/SplashScreen.css";

export default function SplashScreen({ onContinue }) {
  return (
    <div className="splash-bg-gradient">
      <div className="splash-card animated-fadein">
        <div className="splash-logo-img">🩺</div>
        <h1 className="splash-title">VedaCure</h1>
        <div className="splash-tagline">Your trusted digital health companion</div>
        <button className="splash-btn" onClick={onContinue}>
          Get Started
        </button>
      </div>
    </div>
  );
} 