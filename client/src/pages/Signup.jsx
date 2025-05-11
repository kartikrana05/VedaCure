import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../styles/Signup.css";
import illustrationImg from "../assets/OO6PT80.jpg";
// import Cookies from "js-cookie";

export default function Signup() {
  const [form, setForm] = useState({
    username: "",
    name: "",
    email: "",
    password: "",
    phone: "",
  });
  const [otp, setOtp] = useState("");
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleOtpChange = (e) => {
    setOtp(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Clear previous errors

    try {
      const response = await fetch("https://veda-cure.onrender.com/api/users/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (response.ok) {
        setIsOtpSent(true);
      } else {
        setError(data.message || "Failed to register");
      }
    } catch (err) {
      console.error(err);
      setError("An error occurred. Please try again.");
    }
  };

  const handleOtpSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Clear previous errors

    try {
      const response = await fetch("https://veda-cure.onrender.com/api/users/verify", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...form, otp }),

      });

      const data = await response.json();

      if (response.ok) {
        // Store token in cookies
        // Cookies.set("token", data.token, { expires: 1 }); // Expires in 1 day
        setSuccess(true);
        navigate("/signin");
      } else {
        setError(data.message || "Failed to verify OTP");
      }
    } catch (err) {
      console.error(err);
      setError("An error occurred. Please try again.");
    }
  };

  return (
    <div className="auth-card">
      <div className="auth-form-section">
        <h2 className="auth-title">{isOtpSent ? "Verify OTP" : "Sign Up"}</h2>
        {!isOtpSent ? (
          <form className="auth-form" onSubmit={handleSubmit}>
            <label>Username</label>
            <input
              name="username"
              type="text"
              placeholder="Enter your username"
              value={form.username}
              onChange={handleChange}
              required
            />
            <label>Name</label>
            <input
              name="name"
              type="text"
              placeholder="Enter your name"
              value={form.name}
              onChange={handleChange}
              required
            />
            <label>Email</label>
            <input
              name="email"
              type="email"
              placeholder="Enter your email"
              value={form.email}
              onChange={handleChange}
              required
            />
            <label>Password</label>
            <input
              name="password"
              type="password"
              placeholder="Create a password"
              value={form.password}
              onChange={handleChange}
              required
            />
            <label>Phone</label>
            <input
              name="phone"
              type="text"
              placeholder="Enter your phone number"
              value={form.phone}
              onChange={handleChange}
              required
            />
            {error && <p className="auth-error">{error}</p>}
            <button type="submit" className="auth-btn">
              Register
            </button>
          </form>
        ) : (
          <form className="auth-form" onSubmit={handleOtpSubmit}>
            <label>OTP</label>
            <input
              name="otp"
              type="text"
              placeholder="Enter the OTP sent to your email"
              value={otp}
              onChange={handleOtpChange}
              required
            />
            {error && <p className="auth-error">{error}</p>}
            <button type="submit" className="auth-btn">
              Verify OTP
            </button>
          </form>
        )}
        {!isOtpSent && (
          <p className="auth-link-text">
            Already have an account? <Link to="/signin">Sign In</Link>
          </p>
        )}
      </div>
      <div className="auth-illustration-section">
        <img
          src={illustrationImg}
          alt="Sign Up Illustration"
          className="auth-illustration"
        />
      </div>
    </div>
  );
}