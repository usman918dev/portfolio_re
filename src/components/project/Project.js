import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

import homeSS from '../assets/home-ss.png';
import courierX from '../assets/courierX.png';
import event from '../assets/event.png';
import hotel from '../assets/hotel.png';
import './Projects.css';

const projects = [
  {
    title: 'Techolyze',
    image: homeSS,
    description: 'A modern AI design blog built with Next.js and Tailwind CSS featuring responsive design, markdown content, and SEO optimization.',
    github: 'https://github.com/usman918dev/AiTechBlog',
    live: 'https://www.techolyze.com/',
    tags: ['Next.js', 'Tailwind CSS', 'AI Integration']
  },
  {
    title: 'Courier Management System',
    image: courierX,
    description: 'Full-stack web app for managing courier deliveries with real-time tracking, admin dashboard, and customer portal.',
    github: 'https://github.com/usman918dev/courier-management-system',
    live: 'https://courier-management-system-iota.vercel.app/',
    tags: ['MERN Stack', 'JWT Auth', 'Redux']
  },
  {
    title: 'Event Management System',
    image: event,
    description: 'Comprehensive event platform with ticket booking, payment processing, and organizer tools.',
    github: 'https://github.com/usman918dev/final-hackathon-SMIT',
    live: 'http://event-site-918.surge.sh',
    tags: ['React', 'Node.js', 'MongoDB']
  },
  {
    title: 'Hotel Booking App',
    image: hotel,
    description: 'Hackathon-winning hotel reservation system with instant booking, reviews, and admin panel.',
    github: 'https://github.com/usman918dev/Hackathon',
    live: 'https://usman918dev.github.io/Hackathon',
    tags: ['React', 'Firebase', 'Redux Toolkit']
  },
];

const ProjectCard = ({ title, description, github, live, image, tags, index }) => {
  return (
    <motion.div 
      className="project-card"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="project-image-container">
        <img src={image} alt={title} className="project-image" />
        <div className="project-overlay">
          <div className="project-links">
            <a href={github} target="_blank" rel="noopener noreferrer">
              <FaGithub className="project-icon" />
            </a>
            <a href={live} target="_blank" rel="noopener noreferrer">
              <FaExternalLinkAlt className="project-icon" />
            </a>
          </div>
        </div>
      </div>
      <div className="project-content">
        <h3 className="project-title">{title}</h3>
        <p className="project-description">{description}</p>
        <div className="project-tags">
          {tags.map((tag, i) => (
            <span key={i} className="project-tag">{tag}</span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section className="projects-section" id="projects">
      <div className="projects-container">
        <div className="section-header">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            My <span className="highlight">Projects</span>
          </motion.h2>
          <motion.p 
            className="section-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Here are some of my recent works
          </motion.p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <ProjectCard key={index} index={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;