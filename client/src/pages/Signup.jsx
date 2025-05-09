import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../styles/Signup.css";
import illustrationImg from "../assets/OO6PT80.jpg";

export default function Signup() {
  const [role, setRole] = useState("patient");
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    hospital: "",
    specialization: "",
    address: "",
    city: "",
    state: "",
    country: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRoleChange = (e) => {
    setRole(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (role === "doctor") {
      // Check all doctor fields are filled
      const { hospital, specialization, address, city, state, country } = form;
      if (!hospital || !specialization || !address || !city || !state || !country) {
        alert("Please fill all doctor details.");
        return;
      }
    }
    // Simulate signup and redirect to signin
    setSubmitted(true);
  };

  if (submitted) {
    navigate("/signin");
    return null;
  }

  return (
    <div className="auth-card">
      <div className="auth-form-section">
        <h2 className="auth-title">Sign Up</h2>
        <form className="auth-form" onSubmit={handleSubmit}>
          <label>Name</label>
          <input name="name" type="text" placeholder="Enter your name" value={form.name} onChange={handleChange} required />
          <label>Email</label>
          <input name="email" type="email" placeholder="Enter your email" value={form.email} onChange={handleChange} required />
          <label>Password</label>
          <input name="password" type="password" placeholder="Create a password" value={form.password} onChange={handleChange} required />
          <div className="auth-role-select">
            <label>
              <input type="radio" name="role" value="patient" checked={role === "patient"} onChange={handleRoleChange} /> Patient
            </label>
            <label>
              <input type="radio" name="role" value="doctor" checked={role === "doctor"} onChange={handleRoleChange} /> Doctor
            </label>
          </div>
          {role === "doctor" && (
            <>
              <label>Hospital Name</label>
              <input name="hospital" type="text" placeholder="Enter hospital name" value={form.hospital} onChange={handleChange} required={role === "doctor"} />
              <label>Specialization</label>
              <input name="specialization" type="text" placeholder="Enter specialization" value={form.specialization} onChange={handleChange} required={role === "doctor"} />
              <label>Address</label>
              <input name="address" type="text" placeholder="Enter address" value={form.address} onChange={handleChange} required={role === "doctor"} />
              <label>City</label>
              <input name="city" type="text" placeholder="Enter city" value={form.city} onChange={handleChange} required={role === "doctor"} />
              <label>State</label>
              <input name="state" type="text" placeholder="Enter state" value={form.state} onChange={handleChange} required={role === "doctor"} />
              <label>Country</label>
              <input name="country" type="text" placeholder="Enter country" value={form.country} onChange={handleChange} required={role === "doctor"} />
            </>
          )}
          <button type="submit" className="auth-btn">Register</button>
        </form>
        <p className="auth-link-text">Already have an account? <Link to="/signin">Sign In</Link></p>
      </div>
      <div className="auth-illustration-section">
        <img src={illustrationImg} alt="Sign Up Illustration" className="auth-illustration" />
      </div>
    </div>
  );
} 