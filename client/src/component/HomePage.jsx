import React from "react";
import doctorImg from "../assets/image/doctor.jpg";

import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <div id="home" className="container" data-scroll-section>
      {/* Navbar */}
      <nav className="navbar">
        <div className="navbar-left">
          <img src="/logo.png" alt="GreenLeaf Health" className="logo" />
          <span className="brand-name">GreenLeaf Health</span>
        </div>
        <ul className="nav-links">
          <li><a data-scroll-to href="#home">Home</a></li>
          <li><a data-scroll-to href="#about">About us</a></li>
          <li><a data-scroll-to href="#services">Services</a></li>
          <li><a data-scroll-to href="#team">Doctors</a></li>
          <li><a data-scroll-to href="#testimonial">Testimonials</a></li>
          <li><a data-scroll-to href="#footer">Contact us</a></li>
        </ul>
        <button className="appointment-btn">
          <a data-scroll-to href="#appointment">Book Appointment</a>
        </button>
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
          <button className="learn-more-btn">
            <a data-scroll-to href="#about">Learn More</a>
          </button>

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
              <p className="stat-label">Expert specialists</p>
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
    </div>
  );
}