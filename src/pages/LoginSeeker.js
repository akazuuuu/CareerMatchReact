import React, { useState } from 'react';
import '../styles/LoginSeeker.css';
import workImage from "../images/work.png";

function LoginSeeker() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    if (error) setError('');
  };

  const handleSubmit = async (e) => { 
    e.preventDefault(); 
    setIsLoading(true); 
    setError('');
    try {
      const response = await fetch('https://sheetdb.io/api/v1/i05rli7aljn7d');
      const users = await response.json();
      if (!response.ok) { 
        throw new Error('Failed to fetch user data'); 
      } 
      console.log('All users from SheetDB:', users);

      const user = users.find(u => u.Email?.toLowerCase() === formData.email.toLowerCase() &&  u.Password === formData.password);
      if (user) { 
        console.log('Login successful:', user); 
        localStorage.setItem('user', JSON.stringify(user)); 
        localStorage.setItem('isAuthenticated', 'true');
        alert('Login successful! Redirecting to dashboard...');
            
        // Redirect to seeker Main Page
        window.location.href = '/MainPage'; 
      } else { 
        setError('Invalid email or password. Please try again.');
      }
    } catch (error) {
      console.error('Login error:', error);
      setError('Failed to login. Please check your connection and try again.');
    } finally {
      setIsLoading(false);
    }
  };

  // Navigation handlers for buttons
  const handleForgotPassword = () => {
    // Navigate to forgot password form
    console.log('Navigating to forgot password form');
    window.location.href = '/';
  };

  const handleGoogleLogin = () => {
    // Navigate to Google OAuth or next form
    console.log('Proceeding with Google login');
    // For demo, redirect to a placeholder
    window.location.href = '/';
  };

  const handleFacebookLogin = () => {
    // Navigate to Facebook OAuth or next form
    console.log('Proceeding with Facebook login');
    // For demo, redirect to a placeholder
    window.location.href = '/';
  };

  const handleCreateAccount = () => {
    // Navigate to registration form
    console.log('Navigating to registration form');
    window.location.href = '/RegisterSeeker';
  };

  const handleBackButton = () => {
    // Navigate back to home or previous page
    console.log('Navigating back to home');
    window.location.href = '/';
  };

  return (
    <div className="container-fluid p-0">
      <div className="row g-0 min-vh-100">

        {/* Left Section with Back Button */}
        <div className="col-lg-6 left-section d-flex align-items-center justify-content-center">
          <a 
            href="/" 
            className="back-button-left-section"
            onClick={(e) => {
              e.preventDefault();
              handleBackButton();
            }}
          > 
            ← Back 
          </a>

          <div className="text-center px-3">
            <div className="welcome-content mb-4">
              <h1 className="company-name">CareerMatch</h1>
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
              <div className="mb-4">
                <h2 className="login-title">Log in</h2>
                <p className="login-subtitle">Welcome back. Please enter your details.</p>
              </div>

              {error && (
                <div className="alert alert-error">
                  {error}
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <div className="form-group mb-3">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email" 
                    required
                  />
                </div>

                <div className="form-group mb-3">
                  <label htmlFor="password" className="form-label">Password</label>
                  <div className="password-input-container">
                    <input
                      type={showPassword ? "text" : "password"}
                      className="form-control"
                      id="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      placeholder="Enter your password" 
                      required 
                    />
                    <button 
                      type="button" 
                      className="password-toggle" 
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? "Hide" : "Show"}
                    </button>
                  </div>
                </div>

                <div className="forgot-password-container mb-4">
                  <button 
                    type="button"
                    className="btn-forgot-password"
                    onClick={handleForgotPassword}
                  >
                    Forgot password?
                  </button>
                </div>

                <button 
                  type="submit" 
                  className="btn-login w-100 mb-3"
                  disabled={isLoading}
                >
                  {isLoading ? 'Logging in...' : 'Log in'}
                </button>
              </form>

              <div className="divider mb-3">
                <span>or</span>
              </div>

              <div className="social-login-buttons mb-4">
                <button 
                  className="btn-social btn-google"
                  onClick={handleGoogleLogin}
                  disabled={isLoading}
                >
                  <span className="social-icon">G</span> Google 
                </button>
                
                <button 
                  className="btn-social btn-facebook"
                  onClick={handleFacebookLogin}
                  disabled={isLoading}
                >
                  <span className="social-icon">f</span> Facebook 
                </button>
              </div>

              <div className="signup-container"> 
                <p> 
                  Don't have an account?{' '}
                  <a 
                    href="/RegisterSeeker" 
                    className="btn-signup-link"
                    onClick={(e) => {
                      e.preventDefault();
                      handleCreateAccount();
                    }}
                  >
                    Sign up
                  </a> 
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