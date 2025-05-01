// src/AboutMe.js
import React from 'react';
import './AboutMe.css';

const AboutMe = () => {
  return (
    <div className="about-me-container" id='about'>
      <h1 className='ab'>About Me</h1>
      <div className="content-section">

        <section className="status-section">
          <h2 className='abb'>Current Status</h2>
          <p>
            I have completed Web/App Development at <span className='h1'>SMIT</span> (Saylani Mass IT Training Center), where I focused on mastering modern technologies like <span className='h1'>React, Node.js, NextJs</span> and <span className='h1'>MongoDB</span>.
          </p>
          <p>
            I am also pursuing a <span className='h1'>Bachelor's Degree</span> in <span className='h1'>Software Engineering</span> at <span className='h1'>Virtual University</span>, with an expected graduation date of 2028.
          </p>
        </section>
        <section className="goals-section">
          <h2 className='abb'>My Goals</h2>
          <p>
            My goal is to become a proficient full stack developer, contribute to innovative projects, and collaborate with talented teams. I am eager to take on new challenges, expand my skill set, and make a positive impact in the tech industry.
          </p>
        </section>
      </div>
    </div>
  );
};

export default AboutMe;
