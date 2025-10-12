import React, { useState } from 'react';
import '../styles/navbarSeeker.css';

function NavbarSeeker() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <button 
        className="hamburger" 
        id="hamburger" 
        onClick={() => setIsOpen(!isOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <div className="navbar-brand">CareerMatch</div>

      <ul className={`nav-menu ${isOpen ? 'open' : ''}`}>
        <li className="nav-item">
          <a href="/MainPage" className="nav-link active">
            <span className="nav-icon">🏠</span>
            <span className="nav-text">Find Jobs</span>
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">
            <span className="nav-icon">👤</span>
            <span className="nav-text">Profile</span>
          </a>
        </li>
        <li className="nav-item">
          <a href="/ResumeBuilder" className="nav-link">
            <span className="nav-icon">📝</span>
            <span className="nav-text">Resume Builder</span>
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">
            <span className="nav-icon">📊</span>
            <span className="nav-text">Application Tracker</span>
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">
            <span className="nav-icon">💬</span>
            <span className="nav-text">Messages Board</span>
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">
            <span className="nav-icon">❓</span>
            <span className="nav-text">Help</span>
          </a>
        </li>
        <li className="nav-item">
          <a href="/" className="nav-link">
            <span className="nav-icon">➜</span>
            <span className="nav-text">Sign out</span>
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default NavbarSeeker;
