import React, { useState } from "react";
import "../styles/LoginSeeker.css";
import { FaGoogle, FaFacebookF, FaArrowLeft } from "react-icons/fa";
import backgroundImg from "../images/mainbg.jpg";
import { useNavigate } from "react-router-dom";

const LoginSeeker = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [popup, setPopup] = useState({ show: false, message: "", type: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const showPopup = (message, type = "info") => {
    setPopup({ show: true, message, type });
    setTimeout(() => setPopup({ show: false, message: "", type: "" }), 2000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://sheetdb.io/api/v1/i05rli7aljn7d");
      const data = await response.json();

      const user = data.find(
        (u) =>
          (u.Email === formData.email || u.email === formData.email) &&
          (u.Password === formData.password || u.password === formData.password)
      );

      if (user) {
        showPopup("Login successful!", "success");
        setTimeout(() => {
          setFormData({ email: "", password: "" });
          navigate("/MainPage");
        }, 1500);
      } else {
        showPopup("Invalid email or password.", "error");
      }
    } catch (error) {
      showPopup("Error connecting to the database.", "warning");
    }
  };

  const handleGoogleLogin = () => showPopup("Google login clicked");
  const handleFacebookLogin = () => showPopup("Facebook login clicked");
  const handleBack = () => window.history.back();

  return (
    <div
      className="loginseeker-container"
      style={{ backgroundImage: `url(${backgroundImg})` }}
    >
      <button className="back-button" onClick={handleBack}>
        <FaArrowLeft /> Back
      </button>

  <div className="loginseeker-card">
  <h2 className="loginseeker-title">Welcome to CareerMatch</h2>
  <h3 className="login-heading">Login</h3>

   <form onSubmit={handleSubmit} className="auth-form">
  <div className="field-wrapper">
  <input type="email" name="email" placeholder="Username or Email" value={formData.email} onChange={handleChange} required
            />
          </div>

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

      
      {popup.show && (
        <div className={`popup-message ${popup.type}`}>
          {popup.message}
        </div>
      )}
    </div>
  );
};

export default LoginSeeker;
