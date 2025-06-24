// src/Projects.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import './Projects.css';
const projects = [
  {
    title: 'AiTechBlog',
    image: '/assets/home-ss.png',
    description: 'A modern AI and tech blog built with Next.js and Tailwind CSS. It features articles, tutorials, and resources on artificial intelligence and technology trends.',
    github: 'https://github.com/osmanbey918/AiTechBlog',
    live: '',
  },
  {
    title: 'Courier Management System',
    image: '/assets/courierX.png',
    description: 'A web app for managing courier deliveries efficiently. Built with Next.js, REST API, and MongoDB, it allows admins to manage branches, staff, and orders.',
    github: 'https://github.com/osmanbey918/courier-management-system',
    live: 'https://courier-management-system-iota.vercel.app/',
  },
  {
    title: 'Event Management System',
    image: '/assets/event.png',
    description: 'An event management platform built using the MERN stack. It helps users organize, manage, and track events with ease.',
    github: 'https://github.com/osmanbey918/final-hackathon-SMIT',
    live: 'event-site-918.surge.sh',
  },
  {
    title: 'Hackathon Project',
    image: '/assets/hotel.png',
    description: 'A hackathon app built using React, Redux Toolkit, and Firebase. It supports authentication, Firestore database, and file storage.',
    github: 'https://github.com/osmanbey918/Hackathon',
    live: 'https://osmanbey918.github.io/Hackathon',
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


