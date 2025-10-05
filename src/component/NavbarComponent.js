import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/styles.css";

function NavbarComponent() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbarContainer">
        <div className="logo">CareerMatch</div>

        <div className={`navRight ${isOpen ? "open" : ""}`}>
          <div className="dropdown">
            <ul className="navlinks">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/jobsLanding">Jobs</Link></li>
              <li><Link to="#">Services</Link></li>
              <li><Link to="#">Profile</Link></li>
              <li className="join"><Link to="/roleselection">Register</Link></li>
            </ul>
          </div>
        </div>

        <div className="hamburger" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
}

export default NavbarComponent;
