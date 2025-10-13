import React, { useState } from "react";
import "../styles/LoginSeeker.css";
import {
  FaGoogle,
  FaFacebookF,
  FaArrowLeft,
} from "react-icons/fa";
import backgroundImg from "../images/mainbg.jpg";
import { useNavigate } from "react-router-dom";

const LoginSeeker = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // ✅ 1. Fetch all users from SheetDB
      const response = await fetch("https://sheetdb.io/api/v1/i05rli7aljn7d");
      const data = await response.json();

      console.log("SheetDB Data:", data); // for debugging

      // ✅ 2. Check if email and password match any record
      const user = data.find(
        (u) =>
          (u.Email === formData.email || u.email === formData.email) &&
          (u.Password === formData.password || u.password === formData.password)
      );

      // ✅ 3. Validate login
      if (user) {
        alert("✅ Login successful!");
        setFormData({ email: "", password: "" });
        navigate("/MainPage"); // Redirect to main page
      } else {
        alert("❌ Invalid email or password!");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("⚠️ Error connecting to the database.");
    }
  };

  const handleGoogleLogin = () => alert("Google Login Clicked!");
  const handleFacebookLogin = () => alert("Facebook Login Clicked!");
  const handleBack = () => window.history.back();

  return (
    <div
      className="loginseeker-container"
      style={{ backgroundImage: `url(${backgroundImg})` }}
    >
      {/* 🔙 Back Button */}
      <button className="back-button" onClick={handleBack}>
        <FaArrowLeft /> Back
      </button>

      <div className="loginseeker-card">
        <h2 className="loginseeker-title">Welcome to CareerMatch</h2>
        <h3 className="login-heading">Login</h3>

        <form onSubmit={handleSubmit} className="auth-form">
          {/* Email Field */}
          <div className="field-wrapper">
            
            <input
              type="email"
              name="email"
              placeholder="Username or Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          {/* Password Field */}
          <div className="field-wrapper">
           
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <a href="#" className="forgot-link">
            Forgot password?
          </a>

          <button type="submit" className="auth-btn">
            Login
          </button>

          <div className="divider">
            <span>Or Continue With</span>
          </div>

          <div className="auth-social">
            <button
              type="button"
              className="auth-social-btn google"
              onClick={handleGoogleLogin}
            >
              <FaGoogle className="social-icon" /> Google
            </button>
            <button
              type="button"
              className="auth-social-btn facebook"
              onClick={handleFacebookLogin}
            >
              <FaFacebookF className="social-icon" /> Facebook
            </button>
          </div>

          <p className="registert">
            Don’t have an account? <a href="/RegisterSeeker">Register</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginSeeker;

