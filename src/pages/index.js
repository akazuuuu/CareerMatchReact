import React from "react";
import Hero2Img from "../images/Hero2Img.png";
import mobileview from "../images/mobileview.jpg";
import desktopBg from "../images/mainbg.jpg"; 
import '../styles/styles.css';

function Index() {
  return (
    <div>
      
      <div className="desktop-bg-container">
        <div className="desktop-bg-image"></div>
      </div>

      <div className="HeroContainer">
        <div className="mobile-only">
          <img src={mobileview} alt="Mobile View" />
        </div>
        <h1 id="HeroTitle">
          Your Dream <br /> Career Awaits
        </h1>
        <p id="HeroP">
          Connect with amazing opportunities from world-class companies. <br /> 
          Your perfect job is just one swipe away.
        </p>
        <button id="HeroButton">
          Start Swiping <i className="material-icons">swipe</i>
        </button>
      </div>

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
      

      <div className="Container3">
        <div className="Container3v1">
          <div className="Hero2">
            <h1>Discover Your Perfect Job Today</h1>
            <p>
              Our job board simplifies your job search with an intuitive swiping feature.
              Experience faster, more accurate job matches tailored to your preferences.
            </p>
            <button id="btnCreate">Create Profile</button>
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