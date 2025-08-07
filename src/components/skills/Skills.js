import React from 'react';
import './Skills.css';

const skills = [
  'JavaScript', 'HTML5', 'CSS3', 'React',
  'Next.js', 'Node.js', 'Express', 'MongoDB',
  'Firebase', 'Git', 'GitHub', 'Redux',
  'Tailwind CSS', 'REST API'
];

const Skills = () => {
  return (
    <main className="about-skills-wrapper">
      <section className="about-me">
        <div className="about-me-container">
          <div className="content-section">
            <div className="section-header">
              <h1 className="about-title">About Me</h1>
              <div className="title-decoration"></div>
            </div>
            <section className="status-section">
              <p className="about-paragraph">
                I am a <span className="highlight">MERN Stack</span> and <span className="highlight">Next.js</span> Developer from Faisalabad, Pakistan.
              </p>
              <p className="about-paragraph">
                Recently, I completed <span className="highlight">Web/App Development</span> training at <span className="highlight">SMIT</span>, where I focused on modern technologies like <span className="highlight">React</span>, <span className="highlight">Node.js</span>, <span className="highlight">Next.js</span>, and <span className="highlight">MongoDB</span>.
              </p>
              <p className="about-paragraph">
                I'm pursuing a <span className="highlight">Bachelor's Degree</span> in <span className="highlight">Software Engineering</span> at <span className="highlight">Virtual University</span> (expected 2028).
              </p>
              <p className="about-paragraph">
                I've built projects like a <span className="highlight">courier management system</span>, <span className="highlight">social media app</span>, and an <span className="highlight">event management system</span>, using <span className="highlight">Firebase</span>, <span className="highlight">Redux</span>, and <span className="highlight">JWT authentication</span>.
              </p>
              <p className="about-paragraph">
                Currently learning advanced <span className="highlight">Next.js</span> and <span className="highlight">AI integrations</span> via <span className="highlight">OpenAI API</span>.
              </p>
              <p className="about-paragraph">
                My goal is to work on impactful projects and grow into a top full-stack engineer.
              </p>
            </section>
          </div>
        </div>
      </section>

      <section className="skills-section">
        <div className="skills-container">
          <div className="skills-header">
            <h2 className="skills-title">Core Competencies</h2>
            <div className="skills-subtitle">Technologies I work with</div>
          </div>
          <div className="skills-grid">
            {skills.map((skill, idx) => (
              <div className="skill-item" key={idx}>
                <div className="skill-dot"></div>
                <span className="skill-name">{skill}</span>
                <div className="skill-hover-effect"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Skills;