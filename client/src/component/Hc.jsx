import React from "react";
import "../Style/Hc.css";
import docimg from"../assets/image/d3.jpg"
const Healthcare = () => {
  return (
    <div className="healthcare-container">
      <div className="left-section">
        <div className="why-choose-us">Why choose us</div>
        <h1 className="heading">
          Why Pick Us for <br /> <span>Your Health Care</span>
        </h1>
        <div className="features">
          <div className="feature highlight">
            <div className="icon">&#9733;&#9733;&#9733;</div>
            <h3>More experience</h3>
            <p>We offer a range of health services to meat at yor needs.</p>
          </div>
          <div className="feature">
            <div className="icon">&#9733;&#9733;&#9734;</div>
            <h3>Seamless care</h3>
            <p>We offer a range of health services to meat at yor needs.</p>
          </div>
          <div className="feature">
            <div className="icon">&#9733;&#9733;&#9734;</div>
            <h3>The right answers?</h3>
            <p>We offer a range of health services to meat at yor needs.</p>
          </div>
          <div className="feature">
            <div className="icon">&#9733;&#9733;&#9734;</div>
            <h3>Unparalleled expertise</h3>
            <p>We offer a range of health services to meat at yor needs.</p>
          </div>
        </div>
      </div>
      <div className="right-section">
        <div className="experience-circle">
          <h2>25+</h2>
          <p>Years</p>
        </div>
        <img
          src={docimg}
          alt="Doctor"
          className="doctor-img"
        />
      </div>
    </div>
  );
};

export default Healthcare;
