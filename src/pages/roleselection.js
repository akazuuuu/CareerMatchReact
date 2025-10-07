  import React from "react";
  import { Link } from "react-router-dom";
  import man from "../images/man.png";
  import woman from "../images/woman.png";
  import images from "../images/work.png";
  import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

  function Roleselection() {
    return (
      <div>
        <div className="container-fluid p-0">
          <div className="row g-0 min-vh-100">
            <div className="col-lg-6 left-section d-flex align-items-center justify-content-center">
              <div className="text-center px-4">
                <div className="illustration-container mb-4">
                  <img 
                    src={images} 
                    alt="Career Matching Illustration" 
                    className="img-fluid main-illustration"
                  />
                </div>
                <h1 className="title">CareerMatch</h1>
              </div>
            </div>
            
            <div className="col-lg-6 right-section d-flex align-items-center">
              <div className="w-100 px-4 px-lg-5">
                <div className="mb-4">
                  <h2 className="continue-title">Continue as</h2>
                  <p className="continue-subtitle">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  </p>
                </div>
                
                <div className="user-cards">     
                  {/* Job Seeker Card - Using Link instead of onClick */}
                  <Link 
                    to="/LoginSeeker" 
                    className="user-card-link text-decoration-none"
                  >
                    <div className="user-card mb-3">
                      <div className="d-flex align-items-center">
                        <div className="user-icon me-3">
                          <img src={woman} alt="Job Seeker" className="img-fluid"/>
                        </div>
                        <div className="user-info">
                          <h4 className="user-type">JOB SEEKERS</h4>
                          <p className="user-description">
                            Let's recruit your great candidate faster here
                          </p>
                        </div>
                      </div>
                    </div>
                  </Link>

                  {/* Company Card - Using Link instead of onClick */}
                  <Link 
                    to="/LoginCompany" 
                    className="user-card-link text-decoration-none"
                  >
                    <div className="user-card">
                      <div className="d-flex align-items-center">
                        <div className="user-icon me-3">
                          <img src={man} alt="Company" className="img-fluid"/>
                        </div>
                        <div className="user-info">
                          <h4 className="user-type">COMPANY</h4>
                          <p className="user-description">
                            Let's recruit your great candidate faster here
                          </p>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  export default Roleselection;