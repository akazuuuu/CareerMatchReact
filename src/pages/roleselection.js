import React from "react";
import { Link } from "react-router-dom";
import man from "../images/man.png";
import woman from "../images/woman.png";
import images from "../images/work.png";
import "../styles/roleselection.css";

function Roleselection() {
  return (
    <div className="role-selection-page">
      <div className="role-selection-container">
        {/* Left Section */}
        <div className="leftsection">
          <img 
            src={images} 
            alt="Career Matching Illustration" 
            className="main-illustration"
          />
          <h1 className="title">CareerMatch</h1>
        </div>

        {/* Right Section */}
        <div className="rightsection">
          <h2 className="continue-title">Continue as</h2>
          <p className="continue-subtitle">
            Choose your role to start using CareerMatch and find your perfect match.
          </p>

          <div className="user-cards">
            <Link to="/LoginSeeker" className="user-card-link">
              <div className="user-card">
                <div className="user-icon">
                  <img src={woman} alt="Job Seeker" />
                </div>
                <div className="user-info">
                  <h4 className="user-type">JOB SEEKER</h4>
                  <p className="user-description">
                    Let's recruit your great candidate faster here
                  </p>
                </div>
              </div>
            </Link>

            <Link to="/LoginCompany" className="user-card-link">
              <div className="user-card">
                <div className="user-icon">
                  <img src={man} alt="Company" />
                </div>
                <div className="user-info">
                  <h4 className="user-type">COMPANY</h4>
                  <p className="user-description">
                    Let's recruit your great candidate faster here
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
