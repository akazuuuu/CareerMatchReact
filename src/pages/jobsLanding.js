import React from "react";
import placeholder from "../images/placehodler.png";
import jobsPic from "../images/jobsPic.png";
import "../styles/styles.css";
import "../styles/jobs.css";

function JobsLanding() {
  return (
    <div>
      <div className="JobsTitle">
        <h1>Discover Thousands of Jobs</h1>
      </div>

      <div className="JobsFlex">
        <div className="JobContainer">
          <img src={placeholder} id="placehodler" alt="Job placeholder" />
          <h2>Job Title</h2>
          <p>Company Name</p>
          <p><span className="material-icons">star</span> 4.2</p>
          <p>0 Reviews</p>
          <p>0 Jobs</p>
        </div>

        <div className="JobContainer">
          <img src={placeholder} id="placehodler" alt="Job placeholder" />
          <h2>Job Title</h2>
          <p>Company Name</p>
          <p><span className="material-icons">star</span> 4.2</p>
          <p>0 Reviews</p>
          <p>0 Jobs</p>
        </div>

        <div className="JobContainer">
          <img src={placeholder} id="placehodler" alt="Job placeholder" />
          <h2>Job Title</h2>
          <p>Company Name</p>
          <p><span className="material-icons">star</span> 4.2</p>
          <p>0 Reviews</p>
          <p>0 Jobs</p>
        </div>
      </div>

      <div className="JobsBottom">
        <div className="BottomContainer">
          <div className="BottomHero">
            <h1>Match the right job for you on CareerMatch</h1>
            <div className="BottomButton">
              <a href="loginSeeker.html">
                <button>Sign in</button>
              </a>
              <p>
                Don't have an account?{" "}
                <span>
                  <a href="registerSeeker.html">Register</a>
                </span>
              </p>
            </div>
          </div>
          <img src={jobsPic} id="heroBottom" alt="Jobs Hero" />
        </div>
      </div>
    </div>
  );
}

export default JobsLanding;
