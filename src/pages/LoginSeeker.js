import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/LoginSeeker.css';
import workImage from "../images/work.png"; // Fixed image import

function LoginSeeker() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle job seeker login logic here
    console.log('Job Seeker Login:', formData);
    // After successful login, navigate to dashboard
    // navigate('/seeker-dashboard');
  };

  const handleBack = () => {
    navigate(-1); // Go back to previous page
  };

  return (
    <div>
  
    <div className="container-fluid p-0">
      <div className="row g-0 min-vh-100">
        <div className="col-lg-6 left-section d-flex align-items-center justify-content-center">
          <div className="text-center px-4">
            <div className="illustration-container mb-4">
              <img 
                src={workImage} // Fixed: Using imported variable
                alt="Career Matching Illustration" 
                className="img-fluid main-illustration"
              />
            </div>
            <h1 className="title">CareerMatch</h1>
          </div>
        </div>

        <div className="col-lg-6 right-section d-flex align-items-center">
          <div className="w-100 px-4 px-lg-5">
            <div className="mb-4">
              <button 
                onClick={handleBack}
                className="btn btn-outline-secondary mb-3"
              >
                ← Back
              </button>
              <h2 className="continue-title">Login</h2>
              <p className="continue-subtitle">
                Welcome back! Please login to your account
              </p>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="form-group mb-3">
                <label htmlFor="email" className="form-label">Email Address</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group mb-4">
                <label htmlFor="password" className="form-label">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>

              <button type="submit" className="btn btn-primary w-100">
                Login as Job Seeker
              </button>
            </form>

            <div className="text-center mt-3">
              <p>
                Don't have an account?{' '}
                <span 
                  className="text-decoration-none text-primary" 
                  style={{cursor: 'pointer'}}
                  onClick={() => navigate('/register-seeker')}
                >
                  Sign up here
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default LoginSeeker;