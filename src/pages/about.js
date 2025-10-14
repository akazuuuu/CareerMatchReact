import React from "react";
import "../styles/about.css";
import aboutPic from "../images/aboutPic.png";

function About() {
  return (
    <div className="about-page">

      {/* === LEFT SECTION === */}
      <div className="about-text scroll-animate">
        <h5 className="about-subtitle">How It Started</h5>
        <h1 className="about-title">
          CareerMatch <br /> 
        </h1>
        <p className="about-description">
          CareerMatch was founded by passionate educators and tech innovators who
          shared a dream of making job-seeking and recruitment accessible and
          efficient for everyone. United by their belief in the power of
          technology and learning, they created a platform where career
          opportunities and talent meet — seamlessly and globally.
        </p>
      </div>

      {/* === RIGHT SECTION === */}
      <div className="about-visual scroll-animate">
        <div className="about-image-container">
          <img src={aboutPic} alt="CareerMatch Team" className="about-image" />
        </div>

        <div className="about-stats">
          <div className="stat-card">
            <h2>20</h2>
            <p>Years Experience</p>
          </div>
          <div className="stat-card">
            <h2>10k</h2>
            <p>Companies</p>
          </div>
          <div className="stat-card">
            <h2>830+</h2>
            <p>Positive Reviews</p>
          </div>
          <div className="stat-card">
            <h2>20k</h2>
            <p>Job Seekers</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
