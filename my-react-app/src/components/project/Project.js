// src/Projects.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import './Projects.css';
const projects = [
  {
    title: 'CourierX',
    image: '/assets/courierX.png',
    description: 'A courier management system build with NextJS REST Api and MongoDB. Fearues allow admin to create and manage branches, staff, and riders. Users can create and track their orders. ',
    github: 'https://github.com/yourusername/project-one',
    live: 'https://example.com/project-one',
  },
  {
    title: 'CMS',
    image: '/assets/images.jpeg',
    description: 'On workingorking.On working. This project is focused on developing a mobile application using React Native.',
    github: 'https://github.com/yourusername/project-two',
    live: 'https://example.com/project-two',
  },
  {
    title: 'Graphs',
    image: '/assets/images.jpeg',
    description: 'On working.On working.On working.On working.On working.On working. This is a data visualization project.',
    github: 'https://github.com/yourusername/project-three',
    live: 'https://example.com/project-three',
  },
  {
    title: 'WeChat',
    image: '/assets/images.jpeg',
    description: 'On working.On working.On working.On working.On working.On working. This project is about creating a real-time chat application.',
    github: 'https://github.com/yourusername/project-four',
    live: 'https://example.com/project-four',
  },
  {
    title: 'WeChat',
    image: '/assets/images.jpeg',
    description: 'On working.On working.On working.On working.On working.On working. This project is about creating a real-time chat application.',
    github: 'https://github.com/yourusername/project-four',
    live: 'https://example.com/project-four',
  },
  {
    title: 'WeChat',
    image: '/assets/images.jpeg',
    description: 'On working.On working.On working.On working.On working.On working. This project is about creating a real-time chat application.',
    github: 'https://github.com/yourusername/project-four',
    live: 'https://example.com/project-four',
  },
];

const Projects = () => {
  return (
    <div className="projects-container" id='projects'>
      <p style={{ fontWeight: 0, marginBottom: "-10px", fontSize: "3rem" }}>
        My Recent <strong style={{ color: "#FF7E5F", }}>Works </strong>
      </p>
      <p style={{ marginBottom: "10lvh" }}>
        Here are a few projects I've worked on recently.
      </p>
      <div className="projects-list">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <div className="project-content">

              <h2 className="project-title">{project.title}</h2>
              <p className="project-description">{project.description}</p>
              <div className="project-links">
                <a href={project.github} className="project-link" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faGithub} className="project-icon" />
                  <span className="project-label">GitHub</span>
                </a>
                <a href={project.live} className="project-link" target="_blank" rel="noopener noreferrer">
                  <span className="project-label live">Live </span>
                </a>
              </div>

            </div>
            <img src={project.image} alt={project.title} className="project-image" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;


