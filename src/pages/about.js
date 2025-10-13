import React from 'react';
import '../styles/styles.css'; 
import '../styles/about.css';
import aboutPic from "../images/aboutPic.png";
function About() {
  return (
    <div>
      <div className="title">
        <h1 className="scroll-animate">What is CareerMatch?</h1>
      </div>

      <div className="flexContent">
        <img src={aboutPic} id="AboutPic" alt="About CareerMatch" className="scroll-animate"/>
        <p className="scroll-animate">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
          when an unknown printer took a galley of type and scrambled it to make a type 
          specimen book. It has survived not only five centuries, but also the leap into 
          electronic typesetting, remaining essentially unchanged.
        </p>
      </div>
    </div>
  );
}

export default About;
