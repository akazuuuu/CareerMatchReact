import React, { useState } from 'react';
import '../styles/LoginCompany.css';
import workImage from "../images/work.png";

function LoginSeeker() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Job Seeker Login:', formData);
    window.location.href = '/MainPage';
    // After successful login, navigate to dashboard
    // window.location.href = '/seeker-dashboard';
  };

  return (
    <div className="container-fluid p-0">
    <div className="row g-0 min-vh-100">

    {/* Left Section */}
    <div className="col-lg-6 left-section d-flex align-items-center justify-content-center">
    {/* Back Button in Left Section Corner */}
      <a href="/roleselection" className="back-button-left-section" > ← Back </a>

    <div className="text-center px-3">
    <div className="welcome-content mb-4">
    <h1 className="welcome-title">Welcome to</h1> <h1 className="company-name">CareerMatch</h1>
    </div>
          
    <div className="illustration-container">
    <img src={workImage} alt="Career Matching Illustration" className="img-fluid main-illustration"/>
      </div>
      </div>
      </div>

    {/* Right Section */}
    <div className="col-lg-6 right-section d-flex align-items-center justify-content-center">
    <div className="login-form-wrapper">
    <div className="login-content">
    <div className="mb-3">
    <h2 className="login-title">Login to Your Account</h2> <p className="login-subtitle"> Please enter your credentials to continue </p>
              </div>

//Email
    <form onSubmit={handleSubmit}>
    <div className="form-group mb-2">
    <label htmlFor="email" className="form-label">Email Address</label>
    <input
      type="email"
      className="form-control"
      id="email"
      name="email"
      value={formData.email}
      onChange={handleChange}
      placeholder="Enter your email address" required/>
      </div>

//Password
    <div className="form-group mb-2">
    <label htmlFor="password" className="form-label">Password</label>
    <div className="password-input-container">
    <input
      type={showPassword ? "text" : "password"}
      className="form-control"
      id="password"
      name="password"
      value={formData.password}
      onChange={handleChange}
      placeholder="Enter your password" required />

   <button type="button" className="password-toggle" onClick={() => setShowPassword(!showPassword)}>
     {showPassword ? "Hide" : "Show"}

  </button>
    </div>
    </div>

  <div className="forgot-password-container mb-3">
    <a href="/" //forgot password functionality to be implemented
     className="btn-forgot-password"> Forgot Password? </a>
  </div>

  <button type="submit" className="btn-login w-100 mb-3"> Sign In </button> //login will redirect to seeker dashboard
    </form>

  <div className="divider mb-3">
    <span>or continue with</span>
  </div>

  <div className="social-login-buttons mb-3">
    <a href="/" //google login functionality to be implemented
      className="btn-social btn-google">
    <span className="social-icon">G</span> Google </a>
                
    <a href="/facebook" //facebook login functionality to be implemented
     className="btn-social btn-facebook">
  <span className="social-icon">f</span> Facebook </a>
    </div>

  <div className="signup-container"> <p> Don't have an account?{' '}
    <a href="/RegisterSeeker" //link to registration page
     className="btn-signup-link" > Create Account  </a> </p>


     
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  );
}

export default LoginSeeker;