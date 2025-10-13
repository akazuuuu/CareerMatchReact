import React, { useState } from "react";
import "../styles/LoginCompany.css";
import { FaUser, FaEnvelope, FaLock, FaArrowLeft } from "react-icons/fa";
import backgroundImg from "../images/mainbg.jpg"; // same background as login

const RegisterSeeker = () => {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    confirm_password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleBack = () => window.history.back();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirm_password) {
      alert("⚠️ Passwords do not match!");
      return;
    }

    try {
      const response = await fetch("https://sheetdb.io/api/v1/uqjs69bch77kz", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          data: [
            {
              "First Name": formData.first_name,
              "Last Name": formData.last_name,
              Email: formData.email,
              Password: formData.password,
            },
          ],
        }),
      });

      const result = await response.json();
      console.log("API Response:", result);

      if (response.ok && result.created) {
        alert("✅ Registration successful!");
        setFormData({
          first_name: "",
          last_name: "",
          email: "",
          password: "",
          confirm_password: "",
        });
      } else {
        alert("❌ Failed to register. Please check your SheetDB setup.");
      }
    } catch (error) {
      console.error("API Error:", error);
      alert("⚠️ Error connecting to the API.");
    }
  };

  return (
    <div
      className="registerseeker-container"
      style={{ backgroundImage: `url(${backgroundImg})` }}
    >
      {/* Back Button */}
      <button className="register-back-button" onClick={handleBack}>
        <FaArrowLeft /> Back
      </button>

      {/* Registration Card */}
      <div className="registerseeker-card">
        <h2 className="registerseeker-title">Welcome to CareerMatch</h2>
        <h3 className="registerseeker-heading">Create Your Account</h3>

        <form onSubmit={handleSubmit} className="register-form">
          {/* First Name */}
          <div className="register-input-group">
            <FaUser className="register-input-icon" />
            <input
              type="text"
              name="first_name"
              placeholder="First Name"
              value={formData.first_name}
              onChange={handleChange}
              required
            />
          </div>

          {/* Last Name */}
          <div className="register-input-group">
            <FaUser className="register-input-icon" />
            <input
              type="text"
              name="last_name"
              placeholder="Last Name"
              value={formData.last_name}
              onChange={handleChange}
              required
            />
          </div>

          {/* Email */}
          <div className="register-input-group">
            <FaEnvelope className="register-input-icon" />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          {/* Password */}
          <div className="register-input-group">
            <FaLock className="register-input-icon" />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          {/* Confirm Password */}
          <div className="register-input-group">
            <FaLock className="register-input-icon" />
            <input
              type="password"
              name="confirm_password"
              placeholder="Confirm Password"
              value={formData.confirm_password}
              onChange={handleChange}
              required
            />
          </div>

          {/* Submit Button */}
          <button type="submit" className="register-btn">
            Register
          </button>

          {/* Login Redirect */}
          <p className="register-login-text">
            Already have an account? <a href="/LoginCompany">Login</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default RegisterSeeker;
