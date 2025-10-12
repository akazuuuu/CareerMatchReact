import React from "react";
import { Link } from "react-router-dom";
import "../styles/styles.css"; 


function FooterComponent() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-section footer-brand">
              <h2 className="brand-logo">CareerMatch</h2>
              <p className="brand-description">
                CareerMatch helps individuals find jobs that align with their
                skills, interests, and career goals. It provides tailored
                recommendations, resume assistance, and resources to support
                interview preparation. Its mission is to make the job search
                smoother by connecting people with the right opportunities in a
                supportive and simple way.
              </p>
            </div>

            <div className="footer-section">
              <h3>Services</h3>
              <ul className="footer-links">
                <li><Link to="#">Job Recommendations</Link></li>
                <li><Link to="#">Resume Builder</Link></li>
              </ul>
            </div>

            <div className="footer-section">
              <h3>Support</h3>
              <ul className="footer-links">
                <li><Link to="#">Help Center</Link></li>
                <li><Link to="#">Our Team</Link></li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom">
            <p>&copy; 2025 CareerMatch. All rights reserved.</p>
            <div className="footer-legal">
              <Link to="#">Privacy Policy</Link>
              <Link to="#">Terms of Service</Link>
              <Link to="#">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default FooterComponent;
