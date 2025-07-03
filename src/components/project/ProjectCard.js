import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import './Projects.css'; // Keep styles here or move as needed

const ProjectCard = ({ title, description, github, live, image, index }) => {
  return (
    <div className="project-card" key={index}>
      <div className="project-content">
        <h2 className="project-title">{title}</h2>
        <p className="project-description">{description}</p>
        <div className="project-links">
          <a href={github} className="project-link" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} className="project-icon" />
            <span className="project-label">GitHub</span>
          </a>
          <a href={live} className="project-link" target="_blank" rel="noopener noreferrer">
            <span className="project-label live">Live</span>
          </a>
        </div>
      </div>
      <img src={image} alt={title} className="project-image" />
    </div>
  );
};

export default ProjectCard;
