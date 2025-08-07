import React from 'react';
import './LandingPage.css';
import MY from '../assets/me.jpg';
import Type from './Type';

const LandingPage = () => {
  return (
    <section className="landing-wrapper" id="home">
      <div className="landing-content">
        <div className="intro">
          <p className="greeting">Hi, I'm</p>
          <h1 className="name">
            Muhammad Usman <br />
            <span className="typed-role"><Type /></span>
          </h1>
          <p className="description">
            I blend creativity and logic to build sleek digital experiences.
            From stunning interfaces to seamless functionality, I turn ideas into code that inspires.
          </p>
          <div className="cta-buttons">
            <button className="resume-btn">Download Resume</button>
            {/* <button className="secondary-btn">Contact Me</button> */}
          </div>
        </div>
        <div className="image-side">
          <img src={MY} alt="Usman" className="profile-img" />
        </div>
      </div>
    </section>
  );
};

export default LandingPage;
