import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Signin.css";
import illustrationImg from "../assets/7317079.jpg";

export default function Signin() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Clear previous errors

    try {
      const response = await fetch("https://veda-cure.onrender.com/api/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        // Save token to localStorage or context
        localStorage.setItem("token", data.token);
        navigate("/home");
      } else {
        setError(data.message || "Failed to sign in");
      }
    } catch (err) {
      console.error(err);
      setError("An error occurred. Please try again.");
    }
  };

  return (
    <div className="auth-card">
      <div className="auth-form-section">
        <h2 className="auth-title">Sign In</h2>
        <form className="auth-form" onSubmit={handleSubmit}>
          <label>Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label>Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {error && <p className="auth-error">{error}</p>}
          <button type="submit" className="auth-btn">Sign In</button>
        </form>
        <p className="auth-link-text">
          Don't have an account? <Link to="/signup">Sign Up</Link>
        </p>
      </div>
      <div className="auth-illustration-section">
        <img src={illustrationImg} alt="Sign In Illustration" className="auth-illustration" />
      </div>
    </div>
  );
}