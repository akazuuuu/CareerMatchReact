import React from "react";
import Hero2Img from "../images/Hero2Img.png";
import mobileview from "../images/mobileview.jpg";
import mainVideo from "../videos/videobuilding.mp4";
import "../styles/styles.css";

function Index() {
  return (
    <div>
      {/* Background Video */}
      <div className="desktop-bg-container">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="desktop-bg-video"
        >
          <source src={mainVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Hero Section */}
      <div className="HeroContainer">
        <div className="mobile-only">
          <img src={mobileview} alt="Mobile View" />
        </div>

        <h1 id="HeroTitle" className="scroll-animate">
          Your Dream <br /> Career Awaits
        </h1>
        <p id="HeroP" className="scroll-animate">
          Connect with amazing opportunities from world-class companies. <br />
          Your perfect job is just one swipe away.
        </p>

      
        <a href="/roleselection" id="HeroButtonLink" className="scroll-animate">
          <button id="HeroButton">
            Start Swiping <i className="material-icons">swipe</i>
          </button>
        </a>
      </div>

      {/* Stats Section */}
      <div className="Container2">
        <div className="Container2v2">
          <div className="box1">
            <h1>0</h1>
            <p>Active Jobs</p>
          </div>
          <div className="box2">
            <h1>0</h1>
            <p>Top Companies</p>
          </div>
          <div className="box3">
            <h1>0</h1>
            <p>Employed</p>
          </div>
        </div>
      </div>

      {/* Secondary Hero Section */}
      <div className="Container3">
        <div className="Container3v1">
          <div className="Hero2">
            <h1>Discover Your Perfect Job Today</h1>
            <p>
              Our job board simplifies your job search with an intuitive swiping
              feature. Experience faster, more accurate job matches tailored to
              your preferences.
            </p>

            {/* will proceed to roleselection*/}
            <a href="/roleselection" id="btnCreateLink">
              <button id="btnCreate">Register</button>
            </a>
          </div>

          <div className="Hero2Img">
            <img src={Hero2Img} alt="Hero 2" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
