import React, { useState } from 'react';
import '../styles/RegisterSeeker.css';
import workImage from "../images/work.png";

function RegisterSeeker() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [agreeToTerms, setAgreeToTerms] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    if (error) setError('');
  };

  const submitToSheetDB = async (data) => {
    const sheetData = {
      "First Name": data.firstName.trim(),
      "Last Name": data.lastName.trim(),
      "Email": data.email.trim().toLowerCase(),
      "Password": data.password
    };

    console.log('Sending to SheetDB:', sheetData);

    try {
      const response = await fetch('https://sheetdb.io/api/v1/i05rli7aljn7d', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(sheetData)
      });

      const result = await response.json();
      console.log('SheetDB response:', result);

      if (response.ok) {
        return { success: true, result };
      } else {
        throw new Error(result.error || 'Failed to save data');
      }
    } catch (error) {
      console.error('SheetDB submission error:', error);
      throw error;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match!');
      return;
    }

    if (!agreeToTerms) {
      setError('Please agree to the Terms & Conditions');
      return;
    }

    if (formData.password.length < 6) {
      setError('Password must be at least 6 characters long');
      return;
    }

    setIsLoading(true);
    setError('');

    try {
      const submissionData = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        password: formData.password
      };

      const result = await submitToSheetDB(submissionData);

      if (result.success) {
        console.log('Registration successful!');
        alert('Registration successful! Redirecting to login...');
        window.location.href = '/LoginSeeker';
      } else {
        throw new Error('Registration failed');
      }
    } catch (error) {
      console.error('Registration error:', error);
      setError('Failed to register. Please check your connection and try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleNextStep = (e) => {
    e.preventDefault();
    if (currentStep === 1) {
      if (formData.firstName && formData.lastName && formData.email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
          setError('Please enter a valid email address');
          return;
        }
        setError('');
        setCurrentStep(2);
      } else {
        setError('Please fill in all required fields');
      }
    }
  };

  const handlePreviousStep = () => {
    setCurrentStep(1);
    setError('');
  };

  const handleSocialLogin = (provider) => {
    console.log(`Social login with ${provider}`);
    alert(`${provider} login would be implemented here`);
  };

  const passwordsMatch = formData.password === formData.confirmPassword;
  const isStep2Valid = formData.password && 
                      formData.confirmPassword && 
                      passwordsMatch && 
                      agreeToTerms && 
                      formData.password.length >= 6;

  return (
    <div className="container-fluid p-0">
      <div className="row g-0 min-vh-100">
        {/* Left Section - Same as before */}
        <div className="col-lg-6 left-section d-flex align-items-center justify-content-center">
          <a href="/LoginSeeker" className="back-button-left-section">
            ← Back
          </a>

          <div className="brand-content text-center">
            <div className="welcome-content">
              <h1 className="welcome-title">Welcome to</h1>
              <h1 className="company-name">CareerMatch</h1>
            </div>
            
            <div className="illustration-container">
              <img 
                src={workImage}
                alt="Career Matching Illustration" 
                className="img-fluid main-illustration"
              />
            </div>
          </div>
        </div>

        {/* Right Section - Updated to match Login style */}
        <div className="col-lg-6 right-section d-flex align-items-center justify-content-center">
          <div className="register-form-wrapper">
            <div className="register-content">
              {error && (
                <div className="alert alert-error">
                  {error}
                </div>
              )}

              {/* Step 1: Basic Information - Updated to match Login style */}
              {currentStep === 1 && (
                <>
                  <div className="form-header text-center mb-4">
                    <h2 className="register-title">Create an account</h2>
                    <p className="register-subtitle">
                      Join us today! Please fill in your details to get started
                    </p>
                  </div>

                  <form onSubmit={handleNextStep}>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        placeholder="First name"
                        required
                      />
                    </div>

                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        placeholder="Last name"
                        required
                      />
                    </div>

                    <div className="form-group">
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Email address"
                        required
                      />
                    </div>

                    <button 
                      type="submit" 
                      className="btn-register w-100"
                      disabled={isLoading}
                    >
                      {isLoading ? 'Processing...' : 'Continue'}
                    </button>
                  </form>

                  <div className="divider">
                    <span>or continue with</span>
                  </div>

                  <div className="social-login-buttons">
                    <button 
                      className="btn-social"
                      onClick={() => handleSocialLogin('google')}
                      type="button"
                      disabled={isLoading}
                    >
                      <span className="social-icon">G</span>
                      Google
                    </button>
                    <button 
                      className="btn-social"
                      onClick={() => handleSocialLogin('facebook')}
                      type="button"
                      disabled={isLoading}
                    >
                      <span className="social-icon">f</span>
                      Facebook
                    </button>
                  </div>

                  <div className="login-redirect text-center">
                    <p>
                      Already have an account?{' '}
                      <a href="/LoginSeeker" className="login-link">
                        Sign In
                      </a>
                    </p>
                  </div>
                </>
              )}

              {/* Step 2: Password and Terms - Updated to match Login style */}
              {currentStep === 2 && (
                <>
                  <div className="form-header text-center mb-4">
                    <h2 className="register-title">Set your password</h2>
                    <p className="register-subtitle">
                      Step 2 of 2 - Complete your registration
                    </p>
                    <div className="user-info">
                      {formData.firstName} {formData.lastName} • {formData.email}
                    </div>
                  </div>

                  <form onSubmit={handleSubmit}>
                    <div className="form-group">
                      <div className="password-input-container">
                        <input
                          type={showPassword ? "text" : "password"}
                          className="form-control"
                          name="password"
                          value={formData.password}
                          onChange={handleChange}
                          placeholder="Enter your password"
                          required
                          minLength="6"
                        />
                        <button
                          type="button"
                          className="password-toggle-text"
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          {showPassword ? "Hide" : "Show"}
                        </button>
                      </div>
                    </div>

                    <div className="form-group">
                      <div className="password-input-container">
                        <input
                          type={showConfirmPassword ? "text" : "password"}
                          className="form-control"
                          name="confirmPassword"
                          value={formData.confirmPassword}
                          onChange={handleChange}
                          placeholder="Confirm your password"
                          required
                        />
                        <button
                          type="button"
                          className="password-toggle-text"
                          onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        >
                          {showConfirmPassword ? "Hide" : "Show"}
                        </button>
                      </div>
                      {formData.confirmPassword && !passwordsMatch && (
                        <div className="password-error">
                          Passwords do not match
                        </div>
                      )}
                    </div>

                    <div className="terms-checkbox">
                      <label className="checkbox-container">
                        <input
                          type="checkbox"
                          checked={agreeToTerms}
                          onChange={(e) => setAgreeToTerms(e.target.checked)}
                          required
                        />
                        <span className="checkmark"></span>
                        I agree to the Terms & Conditions
                      </label>
                    </div>

                    <div className="form-actions">
                      <button 
                        type="button" 
                        className="btn-previous"
                        onClick={handlePreviousStep}
                        disabled={isLoading}
                      >
                        Back
                      </button>
                      <button 
                        type="submit" 
                        className="btn-register"
                        disabled={!isStep2Valid || isLoading}
                      >
                        {isLoading ? (
                          <>
                            <span className="loading-spinner"></span>
                            Creating Account...
                          </>
                        ) : (
                          'Create Account'
                        )}
                      </button>
                    </div>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterSeeker;