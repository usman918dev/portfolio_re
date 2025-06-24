// src/AboutMe.js
import React from 'react';
import './AboutMe.css';

const AboutMe = () => {
  return (
    <section className="about-me" id="about">
      <div className="about-me-container">
        <div className="content-section">
          <h1 className="ab">About Me</h1>
          <section className="status-section">
            <p>
              I am a <span className="h1">MERN Stack</span> and <span className="h1">Next.js</span> Developer from Faisalabad, Pakistan.
            </p>
            <p>
              Recently, I completed <span className="h1">Web/App Development</span> training at <span className="h1">SMIT</span> (Saylani Mass IT Training Center), where I focused on mastering modern technologies like <span className="h1">React</span>, <span className="h1">Node.js</span>, <span className="h1">Next.js</span>, and <span className="h1">MongoDB</span>.
            </p>
            <p>
              I am also pursuing a <span className="h1">Bachelor's Degree</span> in <span className="h1">Software Engineering</span> at <span className="h1">Virtual University</span>, with an expected graduation in 2028.
            </p>
            <p>
              I have worked on several projects, including a <span className="h1">courier management system</span>, a <span className="h1">social media app</span>, and a <span className="h1">event management system</span>. These projects helped me strengthen my skills in <span className="h1">Firebase</span>, <span className="h1">Redux</span>, <span className="h1">JWT authentication</span>, and more.
            </p>
            <p>
              I believe in continuous growth and am currently learning modern <span className="h1">Next.js</span> and exploring <span className="h1">AI integrations</span> using the <span className="h1">OpenAI API</span>.
            </p>
            <p>
              My ultimate goal is to contribute to impactful projects, collaborate with forward-thinking teams, and become a highly skilled full-stack engineer.
            </p>
          </section>
        </div>
      </div>

    </section>
  );
};

export default AboutMe;
