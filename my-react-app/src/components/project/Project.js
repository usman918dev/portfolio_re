// src/Projects.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import './Projects.css';

const projects = [
  {
    title: 'E - Commerce',
    description: 'On working. This project involves building a full-stack application with React and Node.js.',
    github: 'https://github.com/yourusername/project-one', 
    live: 'https://example.com/project-one',
  },
  {
    title: 'CMS',
    description: 'On working. This project is focused on developing a mobile application using React Native.',
    github: 'https://github.com/yourusername/project-two', 
    live: 'https://example.com/project-two',
  },
  {
    title: 'Graphs',
    description: 'On working. This is a data visualization project.',
    github: 'https://github.com/yourusername/project-three', 
    live: 'https://example.com/project-three',
  },
  {
    title: 'WeChat',
    description: 'On working. This project is about creating a real-time chat application.',
    github: 'https://github.com/yourusername/project-four', 
    live: 'https://example.com/project-four',
  },
];

const Projects = () => {
  return (
    <div className="projects-container" id='projects'>
      <h1 className="projects-title">Projects</h1>
      <div className="projects-list">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <div className="project-content">
              <h2 className="project-title">{project.title}</h2>
              <p className="project-description">{project.description}</p>
              <div className="project-links">
                <a href={project.github} className="project-link" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faGithub} className="project-icon" />
                  <span className="project-label">GitHub (Upcoming)</span>
                </a>
                <a href={project.live} className="project-link" target="_blank" rel="noopener noreferrer">
                  <span className="project-label live">Live Preview</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
