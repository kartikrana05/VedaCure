import React, { useRef } from "react";
import doctorImg from "../assets/image/doctor.jpg";
import About from "./About";


export default function HealthcareHomePage() {
  const aboutRef = useRef(null);

  const scrollToAbout = () => {
    aboutRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="container">
      {/* Navbar */}
      <nav className="navbar">
        <div className="navbar-left">
          <img src="/logo.png" alt="GreenLeaf Health" className="logo" />
          <span className="brand-name">GreenLeaf Health</span>
        </div>
        <ul className="nav-links">
          <li>Home</li>
          <li onClick={scrollToAbout} style={{ cursor: "pointer" }}>About us</li>
          <li>Departments</li>
          <li>Doctors</li>
          <li>Gallery</li>
          <li>Contact us</li>
        </ul>
        <button className="appointment-btn">Book Appointment</button>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-text">
          <div className="badge">● Solutions for better health</div>
          <h1 className="hero-title">
            Your Wellness, <span className="highlight">Our Mission</span>
          </h1>
          <p className="hero-desc">
            We are dedicated to providing compassionate and professional healthcare services,
            tailored to meet your unique needs, so you can thrive and enjoy a healthier,
            more fulfilling life.
          </p>
          <button className="learn-more-btn">Learn More</button>

          <div className="stats">
            <div>
              <p className="stat-number">700+</p>
              <p className="stat-label">Patients served</p>
            </div>
            <div>
              <p className="stat-number">3M+</p>
              <p className="stat-label">Reports delivered</p>
            </div>
            <div>
              <p className="stat-number">150+</p>
              <p className="stat-label">Expert specialist</p>
            </div>
          </div>
        </div>

        <div className="hero-image">
          <img src={doctorImg} alt="Doctor" className="doctor-img" />

          <div className="diagnosis-box">
            <div className="diagnosis-percent">85%</div>
            <div className="diagnosis-label">Successful diagnosis</div>
          </div>

          <div className="contact-box">
            <p className="contact-question">Have a question?</p>
            <p className="contact-email">Info@greenleafhealth.com</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <div ref={aboutRef}>
        <About />
      </div>
    </div>
  );
}
