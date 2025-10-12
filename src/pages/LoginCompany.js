import React, { useState } from 'react';
import '../styles/LoginCompany.css';
import workImage from "../images/work.png";

function LoginCompany() {
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

      const user = users.find(u => u.Email?.toLowerCase() === formData.email.toLowerCase() && u.Password === formData.password);

      if (user) {
        localStorage.setItem('user', JSON.stringify(user));
        localStorage.setItem('isAuthenticated', 'true');
        alert('Login successful! Redirecting...');
        window.location.href = '/MainPage';
      } else setError('Invalid email or password.');
    } catch (err) {
      setError('Failed to login. Check your connection.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleBackButton = () => window.location.href = '/';

  return (
    <div className="container-fluid p-0">
      <div className="row g-0" style={{ minHeight: '100vh' }}>

        {/* Left Section */}
        <div className="col-lg-6 left-section">
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
              <img src={workImage} alt="Career Matching Illustration" className="main-illustration" />
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="col-lg-6 right-section">
          <div className="login-form-wrapper">
            <h2 className="login-title">Login to Your Company Account</h2>
            <p className="login-subtitle">Enter your credentials to continue</p>

            {error && <div className="alert-error">{error}</div>}

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="email" className="form-label">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="Enter email"
                  required
                />
              </div>

              <div className="form-group password-input-container">
                <label htmlFor="password" className="form-label">Password</label>
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="Enter password"
                  required
                />
                <button type="button" className="password-toggle" onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? 'Hide' : 'Show'}
                </button>
              </div>

              <div className="forgot-password-container">
                <button type="button" className="btn-forgot-password">Forgot Password?</button>
              </div>

              <button type="submit" className="btn-login w-100" disabled={isLoading}>
                {isLoading ? 'Signing In...' : 'Sign In'}
              </button>
            </form>

            <div className="divider"><span>or continue with</span></div>

            <div className="social-login-buttons">
              <button className="btn-social btn-google">G Google</button>
              <button className="btn-social btn-facebook">f Facebook</button>
            </div>

            <div className="signup-container">
              <p>Don't have an account? <button className="btn-signup-link">Create Account</button></p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default LoginCompany;
