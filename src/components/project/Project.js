import React from 'react';

import homeSS from '../assets/home-ss.png';
import courierX from '../assets/courierX.png';
import event from '../assets/event.png';
import hotel from '../assets/hotel.png';

import './Projects.css';
import ProjectCard from './ProjectCard';

const projects = [
  {
    title: 'Techolyze',
    image: homeSS,
    description: 'A modern AI design blog built with Next.js and Tailwind CSS...',
    github: 'https://github.com/usmandev918/AiTechBlog',
    live: 'https://www.techolyze.com/',
  },
  {
    title: 'Courier Management System',
    image: courierX,
    description: 'A web app for managing courier deliveries efficiently...',
    github: 'https://github.com/usmandev918/courier-management-system',
    live: 'https://courier-management-system-iota.vercel.app/',
  },
  {
    title: 'Event Management System',
    image: event,
    description: 'An event management platform built using the MERN stack...',
    github: 'https://github.com/usmandev918/final-hackathon-SMIT',
    live: 'http://event-site-918.surge.sh',
  },
  {
    title: 'Hackathon Project',
    image: hotel,
    description: 'A hackathon app built using React, Redux Toolkit, and Firebase...',
    github: 'https://github.com/usmandev918/Hackathon',
    live: 'https://usmandev918.github.io/Hackathon',
  },
];

const Project = () => {
  return (
    <div className="projects-container" id="projects">
      <p style={{ fontWeight: 0, marginBottom: '-10px', fontSize: '3rem' }}>
        My Recent <strong style={{ color: '#FF7E5F' }}>Works</strong>
      </p>
      <p style={{ marginBottom: '10lvh' }}>
        Here are a few projects I've worked on recently.
      </p>
      <div className="projects-list">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Project;
