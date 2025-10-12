import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom"; // Added useLocation if you want active states
import "../styles/styles.css";

function NavbarComponent() {
  const [isOpen, setIsOpen] = useState(false);
  // const location = useLocation(); // Uncomment for active logic
  // const currentPath = location.pathname.toLowerCase();

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  // Optional active function (uncomment if needed)
  // const isActive = (path) => currentPath === path.toLowerCase() ? 'active' : '';

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
                <Link to="/jobslanding" onClick={closeMenu}>Jobs</Link>
              </li>
              <li>
                <Link to="#" onClick={closeMenu}>Services</Link> {/* Add route if needed */}
              </li>
              <li>
                <Link to="#" onClick={closeMenu}>Profile</Link> {/* Add route if needed */}
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
