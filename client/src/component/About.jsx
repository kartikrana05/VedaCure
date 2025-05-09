import React from 'react';
import "../Style/About.css";
import doctorImg from "../assets/image/d2.jpg";
export default function About() {
  return (
    <div className="about-container">
      <div className="about-left">
        <div className="about-image-wrapper">
          <img src={doctorImg} alt="Doctor" className="about-doctor-img" />
        </div>
      </div>

      <div className="about-right">
        <button className="about-tag">About Us</button>
        <h1>
          <span className="about-highlight-dark">Personalized</span>, <span className="about-highlight-blue">Exceptional Care</span>
        </h1>
        <p className="about-description">
          Providing the Highest Quality of Care and Comfort, Created Especially for Your Health, Safety, and Peace of Mind
        </p>

        <div className="about-services">
          <div className="about-service">
            <div className="about-icon">🔬</div>
            <h3>Research and development</h3>
            <p>At Green Leaf Health, our R&D team drives innovation to improve health and well-being through advanced solutions and technology.</p>
          </div>
          <div className="about-service">
            <div className="about-icon">🖥️</div>
            <h3>Advanced imaging services</h3>
            <p>Utilizing cutting-edge imaging technologies to ensure precise diagnosis and effective treatment planning tailored to patient needs.</p>
          </div>
        </div>

        <button className="about-view-all">View all →</button>
      </div>
    </div>
  );
}
