import React, { useState, useEffect } from "react";
import "../styles/navbarSeeker.css";
import { FaBars, FaTimes, FaHome, FaUser, FaFileAlt, FaChartBar, FaComments, FaQuestionCircle, FaSignOutAlt } from "react-icons/fa";

const NavbarSeeker = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 480);
    handleResize(); // check on load
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {isMobile && (
        <button
          className="hamburger-btn"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? <FaTimes /> : <FaBars />}
        </button>
      )}

      <div
        className={`sidebar ${isExpanded ? "expanded" : ""} ${
          isMobile ? "mobile" : ""
        }`}
        onMouseEnter={() => !isMobile && setIsExpanded(true)}
        onMouseLeave={() => !isMobile && setIsExpanded(false)}
      >
        <div className="sidebar-header">
          <div className="brand-logo">💼</div>
          {isExpanded && <h2 className="brand-text">CareerMatch</h2>}
        </div>

        <ul className="nav-links">
          <li>
            <a href="/mainpage" className="active">
              <FaHome className="icon" />
              {isExpanded && <span>Find Jobs</span>}
            </a>
          </li>
          <li>
            <a href="#">
              <FaUser className="icon" />
              {isExpanded && <span>Profile</span>}
            </a>
          </li>
          <li>
            <a href="/ResumeBuilder">
              <FaFileAlt className="icon" />
              {isExpanded && <span>Resume Builder</span>}
            </a>
          </li>
          <li>
            <a href="#">
              <FaChartBar className="icon" />
              {isExpanded && <span>Application Tracker</span>}
            </a>
          </li>
          <li>
            <a href="#">
              <FaComments className="icon" />
              {isExpanded && <span>Message Board</span>}
            </a>
          </li>
          <li>
            <a href="/index">
              <FaQuestionCircle className="icon" />
              {isExpanded && <span>Help</span>}
            </a>
          </li>
          <li>
            <a href="/">
              <FaSignOutAlt className="icon" />
              {isExpanded && <span>Sign Out</span>}
            </a>
          </li>
        </ul>

        <div className="sidebar-footer">
          {isExpanded && <small>© 2025 CareerMatch</small>}
        </div>
      </div>
    </>
  );
};

export default NavbarSeeker;
