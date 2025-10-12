import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/styles.css"; // keep your CSS import

function NavbarComponent() {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle menu when hamburger clicked
  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  // Optional: close the menu when a link is clicked (for mobile)
  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbarContainer">
        {/* Logo */}
        <div className="logo">CareerMatch</div>

        {/* Hamburger Button */}
        <div
          className={`hamburger ${isOpen ? "active" : ""}`}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Right Side Navigation */}
        <div className={`navRight ${isOpen ? "active" : ""}`}>
          <div className="dropdown">
            <ul className="navlinks">
              <li>
                <Link to="/" onClick={closeMenu}>Home</Link>
              </li>
              <li>
                <Link to="/about" onClick={closeMenu}>About</Link>
              </li>
              <li>
                <Link to="/jobsLanding" onClick={closeMenu}>Jobs</Link>
              </li>
              <li>
                <Link to="#" onClick={closeMenu}>Services</Link>
              </li>
              <li>
                <Link to="#" onClick={closeMenu}>Profile</Link>
              </li>
              <li className="join">
                <Link to="/roleselection" onClick={closeMenu}>Register</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavbarComponent;
