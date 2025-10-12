import React, { useState } from "react";
import { FaHome, FaUser, FaFileAlt, FaChartBar, FaComments, FaQuestionCircle, FaSignOutAlt } from "react-icons/fa";
import "../styles/navbarSeeker.css";

const NavbarSeeker = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      className={`sidebar ${isExpanded ? "expanded" : ""}`}
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
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
          <a href="/resumebuilder">
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
        {isExpanded && (
          <div className="footer-text">
            <small>© 2025 CareerMatch</small>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavbarSeeker;
