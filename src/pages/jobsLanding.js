import React from "react";
import placeholder from "../images/placehodler.png";
import jobsPic from "../images/jobsPic.png";
import "../styles/styles.css";
import "../styles/jobs.css";

/**
 * JobsLanding Component
 * 
 * This component serves as the landing page for the Jobs section of the application.
 * It introduces users to available job opportunities and encourages them to sign in
 * or register to explore more listings.
 */

function JobsLanding() {
  return (
    <div>
      {/* ==============================
          PAGE TITLE SECTION
          Displays the main heading encouraging users to explore jobs.
      =============================== */}
      <div className="JobsTitle">
        <h1 className="scroll-animate">Discover Thousands of Jobs</h1>
      </div>

      {/* ==============================
          JOB LIST PREVIEW SECTION
          Showcases sample job cards with placeholder content.
          Each job card represents a company listing preview.
      =============================== */}
      <div className="JobsFlex">
        {/* Single Job Card */}
        <div className="JobContainer">
          <img src={placeholder} id="placehodler" alt="Job placeholder" />
          <h2>Job Title</h2>
          <p>Company Name</p>
          <p>
            <span className="material-icons">star</span> 4.2
          </p>
          <p>0 Reviews</p>
          <p>0 Jobs</p>
        </div>

        {/* Duplicate Job Cards for Layout Display */}
        <div className="JobContainer">
          <img src={placeholder} id="placehodler" alt="Job placeholder" />
          <h2>Job Title</h2>
          <p>Company Name</p>
          <p>
            <span className="material-icons">star</span> 4.2
          </p>
          <p>0 Reviews</p>
          <p>0 Jobs</p>
        </div>

        <div className="JobContainer">
          <img src={placeholder} id="placehodler" alt="Job placeholder" />
          <h2>Job Title</h2>
          <p>Company Name</p>
          <p>
            <span className="material-icons">star</span> 4.2
          </p>
          <p>0 Reviews</p>
          <p>0 Jobs</p>
        </div>
      </div>

      {/* ==============================
          CALL-TO-ACTION SECTION
          Encourages users to sign in or register for personalized job matches.
          Includes a hero image and sign-in/register buttons.
      =============================== */}
      <div className="JobsBottom">
        <div className="BottomContainer">
          <div className="BottomHero">
            <h1 className="scroll-animate">
              Match the right job for you on CareerMatch
            </h1>
            <div className="BottomButton">
              {/* Sign-in Button */}
              <a href="/LoginSeeker">
                <button className="scroll-animate">Sign in</button>
              </a>

              {/* Registration Link */}
              <p className="scroll-animate">
                Don't have an account?{" "}
                <span>
                  <a href="/RegisterSeeker">Register</a>
                </span>
              </p>
            </div>
          </div>

          {/* Hero Image beside CTA */}
          <img
            src={jobsPic}
            id="heroBottom"
            alt="Jobs Hero"
            className="scroll-animate"
          />
        </div>
      </div>
    </div>
  );
}

export default JobsLanding;
