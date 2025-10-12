import React, { useState } from "react";
import "../styles/LoginSeeker.css";
import { FaUser, FaLock, FaGoogle, FaFacebookF, FaArrowLeft } from "react-icons/fa";
import backgroundImg from "../images/mainbg.jpg"; // Replace with your image

const LoginSeeker = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://sheetdb.io/api/v1/i05rli7aljn7d", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ data: [formData] }),
      });

      if (response.ok) {
        alert("Login data submitted successfully!");
        setFormData({ email: "", password: "" });
      } else {
        alert("Failed to submit data. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error submitting data.");
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
      {/* Back Button */}
      <button className="back-button" onClick={handleBack}>
        <FaArrowLeft /> Back
      </button>

      <div className="loginseeker-card">
        <h2 className="loginseeker-title">Welcome to CareerMatch</h2>
        <h3 className="login-heading">Login</h3>

        <form onSubmit={handleSubmit} className="login-form">
          <div className="input-group">
            <FaUser className="input-icon" />
            <input
              type="email"
              name="email"
              placeholder="Username or Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <FaLock className="input-icon" />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <a href="#" className="forgot-password">Forgot password?</a>

          <button type="submit" className="login-btn">Login</button>

          <div className="divider"><span>Or Continue With</span></div>

          <div className="social-login">
            <button type="button" className="social-btn google" onClick={handleGoogleLogin}>
              <FaGoogle className="social-icon" /> Google
            </button>
            <button type="button" className="social-btn facebook" onClick={handleFacebookLogin}>
              <FaFacebookF className="social-icon" /> Facebook
            </button>
          </div>

          <p className="register-text">
            Don’t have an account? <a href="/RegisterSeeker">Register</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginSeeker;
