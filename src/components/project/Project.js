import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

import homeSS from '../assets/home-ss.png';
import wellness from '../assets/wellness.png';
import event from '../assets/event.png';
import hotel from '../assets/hotel.png';
import './Projects.css';

const projects = [
  {
    title: 'Techolyze Blog',
    image: homeSS,
    description: 'A modern AI design tech blog built with Next.js and Tailwind CSS, featuring responsive design, rich Markdown editing via Tiptap, and full SEO optimization. Built on top of ISR/SSG and SSR for blazing-fast performance, it offers dynamic metadata generation, static page routing, proper schema implementation, and SEO best practices — all while delivering a smooth reading experience.',
    github: 'https://github.com/usman918dev/AiTechBlog',
    live: 'https://www.techolyze.com/',
    tags: ['Next.js', 'Tailwind CSS', 'MongoDB', 'ISR', 'SSG', 'SSR', 'SEO',]
  },
  {
    title: 'Wellness Tracker',
    image: wellness, 
    description: 'A modern full-stack wellness tracking app built with Next.js, MongoDB, and NextAuth.js. Track daily habits like water intake, sleep, exercise, and mood with an interactive dashboard, rich filtering, and detailed charts. Features in-app/browser notifications, email reminders, responsive design, and accessibility built in. Includes secure authentication, dynamic reports, and customizable reminders for better daily habits.',
    github: 'https://github.com/usman918dev/weellness-tracker-crud', 
    live: 'https://personal-wellness-tracker.vercel.app', 
    tags: [
      'Next.js',
      'Tailwind CSS',
      'MongoDB',
      'NextAuth.js',
      'Chart.js',
    ]
  },
  {
    title: 'Event Management System',
    image: event,
    description: 'Comprehensive event platform with ticket booking, payment processing, and organizer tools.',
    github: 'https://github.com/usman918dev/final-hackathon-SMIT',
    live: '',
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
      className="project-card-full"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
    >
      <div className="project-card-full-image">
        <img src={image} alt={title} />
      </div>

      <div className="project-card-full-content">
        <h3>{title}</h3>
        <p>{description}</p>

        <div className="project-tags">
          {tags.map((tag, i) => (
            <span key={i} className="project-tag">{tag}</span>
          ))}
        </div>

        <div className="project-buttons">
          <a href={github} target="_blank" rel="noopener noreferrer" className="btn-github">
            <FaGithub /> GitHub
          </a>
          <a href={live} target="_blank" rel="noopener noreferrer" className="btn-live">
            <FaExternalLinkAlt /> Live Demo
          </a>
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

        <div className="projects-list">
          {projects.map((project, index) => (
            <ProjectCard key={index} index={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
