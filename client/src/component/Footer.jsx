import React from 'react';
import '../Style/Footer.css';
import { FaPhone, FaClock, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import logo from '../assets/image/logo.jpg'
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section">
        <h3>Get in touch</h3>
        <p><FaPhone /> Call us</p>
        <p>+88 01322445292</p>
        <p><FaClock /> Opening time</p>
        <p>Mon-sat: 24Hourse</p>
        <div className="logo">
          <img src="/logo.png" alt="GreenLeaf Health" />
          <span>GreenLeaf <br /> Health</span>
        </div>
      </div>

      <div className="footer-section">
        <h3>Our services</h3>
        <p>Orthopedics</p>
        <p>Neurology</p>
        <p>Eye care</p>
        <p>Endocrinology</p>
        <p>Dental</p>
      </div>

      <div className="footer-section">
        <h3>Useful links</h3>
        <p>About us</p>
        <p>Appointment</p>
        <p>Patient info</p>
        <p>Team</p>
        <p>Testimonial</p>
      </div>

      <div className="footer-section app-buttons">
        <a href="#"><img src={logo} alt="Google Play" /></a>
        <div className="social-icons">
          <FaFacebookF />
          <FaTwitter />
          <FaInstagram />
          <FaLinkedinIn />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
