import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/navAndFooter.css";

function NavbarComponent() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(prev => !prev);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbarContainer">
        <div className="logo">CareerMatch</div>

        <div className={`hamburger ${isOpen ? "active" : ""}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div className={`navRight ${isOpen ? "active" : ""}`}>
          <ul className="navlinks">
            <li><Link to="/" onClick={closeMenu}>Home</Link></li>
            <li><Link to="/about" onClick={closeMenu}>About</Link></li>
            <li><Link to="/jobslanding" onClick={closeMenu}>Jobs</Link></li>
            
            <li className="join"><Link to="/roleselection" onClick={closeMenu}>Register</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavbarComponent;
