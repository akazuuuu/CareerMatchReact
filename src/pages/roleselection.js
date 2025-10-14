import React from "react";
import { Link } from "react-router-dom";
import man from "../images/man.png";
import woman from "../images/woman.png";
import images from "../images/work.png";
import "../styles/roleselection.css";

/**
 * Roleselection Component
 * 
 * This component allows users to choose their role before accessing the platform.
 * It provides two main options: Job Seeker or Company.
 * Each option directs the user to the corresponding login page.
 */

function Roleselection() {
  return (
    <div className="role-selection-page">
      <div className="role-selection-container">

        {/* ======================================
            LEFT SECTION
            Displays the app logo and illustration for branding.
        ======================================= */}
        <div className="leftsection">
          <img 
            src={images} 
            alt="Career Matching Illustration" 
            className="main-illustration"
          />
          <h1 className="title">CareerMatch</h1>
        </div>

        {/* ======================================
            RIGHT SECTION
            Contains user role selection cards for navigation.
        ======================================= */}
        <div className="rightsection">
          {/* Title and subtitle guiding the user */}
          <h2 className="continue-title">Continue as</h2>
          <p className="continue-subtitle">
            Choose your role to start using CareerMatch and find your perfect match.
          </p>

          {/* ======================================
              ROLE SELECTION CARDS
              Each card is a link to a specific login route.
          ======================================= */}
          <div className="user-cards">

            {/* Job Seeker Card */}
            <Link to="/LoginSeeker" className="user-card-link">
              <div className="user-card">
                <div className="user-icon">
                  <img src={woman} alt="Job Seeker" />
                </div>
                <div className="user-info">
                  <h4 className="user-type">JOB SEEKER</h4>
                  <p className="user-description">
                    Explore thousands of job opportunities tailored to your career goals.
                  </p>
                </div>
              </div>
            </Link>

            {/* Company Card */}
            <Link to="/LoginCompany" className="user-card-link">
              <div className="user-card">
                <div className="user-icon">
                  <img src={man} alt="Company" />
                </div>
                <div className="user-info">
                  <h4 className="user-type">COMPANY</h4>
                  <p className="user-description">
                    Find the best candidates quickly and grow your organization efficiently.
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Roleselection;
