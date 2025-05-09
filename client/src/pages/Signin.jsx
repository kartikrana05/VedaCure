import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Signin.css";
import illustrationImg from "../assets/7317079.jpg";

export default function Signin() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate successful sign in
    navigate("/dashboard");
  };

  return (
    <div className="auth-card">
      <div className="auth-form-section">
        <h2 className="auth-title">Sign In</h2>
        <form className="auth-form" onSubmit={handleSubmit}>
          <label>Email</label>
          <input type="email" placeholder="Enter your email" required />
          <label>Password</label>
          <input type="password" placeholder="Enter your password" required />
          <button type="submit" className="auth-btn">Sign In</button>
        </form>
        <p className="auth-link-text">Don't have an account? <Link to="/signup">Sign Up</Link></p>
      </div>
      <div className="auth-illustration-section">
        <img src={illustrationImg} alt="Sign In Illustration" className="auth-illustration" />
      </div>
    </div>
  );
} 