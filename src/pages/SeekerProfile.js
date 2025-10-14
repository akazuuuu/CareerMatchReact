import React from "react";
import "../styles/SeekerProfile.css";
import NavbarSeeker from "../component/NavbarSeeker";
import mobileview from "../images/woman.png";

const SeekerProfile = () => {
  return (
    <div>
      {/* Navbar must be rendered first */}
      <NavbarSeeker />

      {/* === Profile Section === */}
      <div className="seeker-profile-page">
        {/* === LEFT SECTION === */}
        <div className="profile-left">
          <div className="profile-card">
            <img
              src={mobileview}
              alt="User"
              className="profile-photo"
            />
            <h2>Ananya Grover</h2>
            <p className="profile-role">UI/UX Designer</p>
            <p className="profile-desc">
              Full stack product designer with hands-on experience in solving
              problems for clients ranging from Real Estate, Hospitality,
              Rentals, On Demand Healthcare, IT Services & Social Network among
              others.
            </p>

            <h3>Skills</h3>
            <div className="skills">
              <span>UI</span>
              <span>Adobe XD</span>
              <span>Mobile Apps</span>
              <span>User Research</span>
              <span>Wireframing</span>
              <span>Information Architecture</span>
            </div>

            <h3>Add Notes</h3>
            <textarea placeholder="Add notes for future reference"></textarea>
            <button className="add-note-btn">Add Note</button>
          </div>
        </div>

        {/* === RIGHT SECTION === */}
        <div className="profile-right">
          <div className="basic-info card">
            <h3>Basic Information</h3>
            <div className="info-grid">
              <div><strong>Age:</strong> 28 years</div>
              <div><strong>Years of Experience:</strong> 6 years</div>
              <div><strong>CTC:</strong> 12.5 Lac</div>
              <div><strong>Location:</strong> Ahmedabad, Gujarat</div>
              <div><strong>Phone:</strong> +91 98123 55679</div>
              <div><strong>Email:</strong> ananyasharma@gmail.com</div>
            </div>

            <div className="button-group">
              <button className="btn primary">Download Resume</button>
              <button className="btn secondary">Send Email</button>
            </div>
          </div>

          <div className="experience card">
            <h3>Experience</h3>
            <div className="exp-item">
              <div className="exp-logo blue">ST</div>
              <div>
                <h4>Infosys</h4>
                <p>Product & UI/UX Designer</p>
                <span>Apr 2018 – Present | Pune, India</span>
              </div>
            </div>

            <div className="exp-item">
              <div className="exp-logo pink">PS</div>
              <div>
                <h4>Pixel Studio</h4>
                <p>UI/UX Designer</p>
                <span>Oct 2016 – Apr 2018 | Bengaluru, India</span>
              </div>
            </div>

            <div className="exp-item">
              <div className="exp-logo orange">RS</div>
              <div>
                <h4>Ramotion Studio</h4>
                <p>Web Designer</p>
                <span>Apr 2015 – Jul 2016 | Bengaluru, India</span>
              </div>
            </div>
          </div>

          <div className="accordion-section card">
            <h3>Education</h3>
          </div>
          <div className="accordion-section card">
            <h3>Accomplishments</h3>
          </div>
          <div className="accordion-section card">
            <h3>Certifications</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeekerProfile;
