import React from 'react';
import './Projects.css'; 

const ProjectCard = ({ image, title, description, techStack, githubLink, liveLink }) => {
  return (
    <div className="project-card">
      <img src={image} alt={title} className="project-image" />
      <div className="project-content">
        <h3 className="project-title">{title}</h3>
        <p className="project-description">{description}</p>
        <div className="tech-stack">
          {techStack.map((tech, index) => (
            <span key={index}>{tech}</span>
          ))}
        </div>
        <div className="project-links">
          <a href={githubLink} target="_blank" rel="noopener noreferrer" className="btn github">GitHub</a>
          <a href={liveLink} target="_blank" rel="noopener noreferrer" className="btn live">Live Demo</a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
