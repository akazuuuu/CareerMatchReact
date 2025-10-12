import React, { useState } from 'react';
import '../styles/LoginSeeker.css';
import workImage from "../images/work.png";

function LoginSeeker() {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (error) setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    try {
      const response = await fetch('https://sheetdb.io/api/v1/i05rli7aljn7d');
      const users = await response.json();
      if (!response.ok) throw new Error('Failed to fetch user data');

      const user = users.find(
        u => u.Email?.toLowerCase() === formData.email.toLowerCase() &&
             u.Password === formData.password
      );

      if (user) {
        localStorage.setItem('user', JSON.stringify(user));
        localStorage.setItem('isAuthenticated', 'true');
        alert('Login successful! Redirecting to dashboard...');
        window.location.href = '/MainPage';
      } else {
        setError('Invalid email or password. Please try again.');
      }
    } catch (err) {
      console.error('Login error:', err);
      setError('Failed to login. Please check your connection and try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleBackButton = () => window.location.href = '/';
  const handleForgotPassword = () => window.location.href = '/';
  const handleGoogleLogin = () => window.location.href = '/';
  const handleFacebookLogin = () => window.location.href = '/';
  const handleCreateAccount = () => window.location.href = '/RegisterSeeker';

  return (
    <div className="login-page-container">
      <div className="login-row">
        {/* Left Section */}
        <div className="left-section">
          <a 
            href="/" 
            className="back-button-left-section"
            onClick={(e) => { e.preventDefault(); handleBackButton(); }}
          > 
            ← Back 
          </a>

          <div className="text-center">
            <h1 className="company-name">CareerMatch</h1>
            <div className="illustration-container">
              <img src={workImage} alt="Career Matching Illustration" className="main-illustration"/>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="right-section">
          <div className="login-form-wrapper">
            <h2 className="login-title mb-2">Log in</h2>
            <p className="login-subtitle mb-4">Welcome back. Please enter your details.</p>

            {error && <div className="alert-error mb-3">{error}</div>}

            <form onSubmit={handleSubmit}>
              <div className="form-group mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-control"
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
                    id="password"
                    name="password"
                    className="form-control"
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
                    {showPassword ? 'Hide' : 'Show'}
                  </button>
                </div>
              </div>

              <div className="forgot-password-container mb-4">
                <button type="button" className="btn-forgot-password" onClick={handleForgotPassword}>
                  Forgot password?
                </button>
              </div>

              <button type="submit" className="btn-login w-100 mb-3" disabled={isLoading}>
                {isLoading ? 'Logging in...' : 'Log in'}
              </button>
            </form>

            <div className="divider mb-3"><span>or</span></div>

            <div className="social-login-buttons mb-4">
              <button className="btn-social btn-google" onClick={handleGoogleLogin} disabled={isLoading}>
                <span className="social-icon">G</span> Google
              </button>
              <button className="btn-social btn-facebook" onClick={handleFacebookLogin} disabled={isLoading}>
                <span className="social-icon">f</span> Facebook
              </button>
            </div>

            <div className="signup-container">
              <p>
                Don't have an account?{' '}
                <a href="/RegisterSeeker" className="btn-signup-link" onClick={(e) => { e.preventDefault(); handleCreateAccount(); }}>
                  Sign up
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      
    </div>
  );
}

export default LoginSeeker;
