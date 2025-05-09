import React from "react";
import doctorImg from "../assets/image/grpdoc.jpg"; // Replace with your local image path
import "../Style/Appoint.css";
export default function Appointment() {
  return (
    <div className="appointment-container">
      <div className="appointment-left">
        <h1>Book An Appointment</h1>
        <p>We will send you a confirmation within 24 hours.</p>

        <form className="appointment-form">
          <div className="input-row">
            <input type="text" placeholder="Your name*" />
            <input type="email" placeholder="Your Email*" />
          </div>
          <div className="input-row">
            <input type="text" placeholder="Phone number*" />
            <select>
              <option>Select service*</option>
              <option>Cardiology</option>
              <option>Physiotherapy</option>
              <option>Endocrinology</option>
            </select>
          </div>
          <textarea placeholder="Message*" rows="4" />
          <button type="submit" className="submit-btn">View all →</button>
        </form>
      </div>

      <div className="appointment-right">
        <img src={doctorImg} alt="Doctors" />
      </div>
    </div>
  );
}
