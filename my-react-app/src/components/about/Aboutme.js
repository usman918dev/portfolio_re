// src/AboutMe.js
import React from 'react';
import './AboutMe.css';

const AboutMe = () => {
  return (
    <div className="about-me-container" id='about'>
      <h1 className='h1 ab'>About Me</h1>
      <div className="profile-section">
        <img
          src="https://via.placeholder.com/150" // Replace with your profile picture URL
          alt="Profile"
          className="profile-picture"
        />
        <h1 className="name">Muhammad Usman</h1>
        <p className="title">Web Developer</p>
      </div>
      <div className="content-section">
        <section className="status-section">
          <h2 className='h1'>Current Status</h2>
          <p>
            I am currently learning Full Stack Development at <span className='h1'>SMIT</span>(Saylani Mass IT Training Center), where I
            focus on learning modern technologies like
            <span className='h1'> React, Node.js,</span> and <span className='h1'>MangoDB</span>. I am passionate about coding and enjoy
            solving complex problems with innovative solutions.
          </p>
          <p>I am currently pursuing a <span className='h1'>Bachelor's Degree</span> in <span className='h1'>Software Engineering </span> at <span className='h1'>Virtual University</span>, with an expected graduation date of 2028.<br/><br/> My educational journey at Virtual University is equipping me with a solid foundation in software development</p>
        </section>
      
      </div>
    </div>
  );
};

export default AboutMe;
