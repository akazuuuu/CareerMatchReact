import React, { useState, useEffect } from "react";
import "../styles/navbarSeeker.css";
import { FaBars, FaTimes, FaHome, FaUser, FaFileAlt, FaChartBar, FaComments, FaQuestionCircle, FaSignOutAlt } from "react-icons/fa";

const NavbarCompany = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 480);
    handleResize();
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
        className={`sidebar ${isExpanded ? "expanded" : ""} ${isMobile ? "mobile" : ""}`}
        onMouseEnter={() => !isMobile && setIsExpanded(true)}
        onMouseLeave={() => !isMobile && setIsExpanded(false)}
      >
        <div className="sidebar-header">
          <div className="brand-logo">🏢</div>
          {isExpanded && <h2 className="brand-text">CareerMatch</h2>}
        </div>

        <ul className="nav-links">
          <li>
            <a href="/viewapplicants" className="active">
              <FaHome className="icon" />
              {isExpanded && <span>View Applicants</span>}
            </a>
          </li>
          <li>
            <a href="/jobpost">
              <FaUser className="icon" />
              {isExpanded && <span>Job Post</span>}
            </a>
          </li>
          <li>
            <a href="/analytics">
              <FaChartBar className="icon" />
              {isExpanded && <span>Analytics</span>}
            </a>
          </li>
          <li>
            <a href="/messages">
              <FaComments className="icon" />
              {isExpanded && <span>Notification</span>}
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

export default NavbarCompany;
