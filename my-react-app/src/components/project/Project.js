// src/Projects.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import './Projects.css';
import img from "../assets/download.jpeg"
const projects = [
  {
    title: 'E - Commerce',
    image: '/assets/about.png',
    description: 'On working.On working.On working.On working.On working.On working. This project involves building a full-stack application with React and Node.js.',
    github: 'https://github.com/yourusername/project-one',
    live: 'https://example.com/project-one',
  },
  {
    title: 'CMS',
    image: '/assets/images.jpeg',
    description: 'On working.On working.On working.On working.On working.On working. This project is focused on developing a mobile application using React Native.',
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
      <p style={{ fontWeight:0, marginBottom:"-10px", fontSize:"3rem"}}>
        My Recent <strong style={{color:"#FF7E5F",}}>Works </strong>
      </p>
      <p style={{ marginBottom: "10lvh" }}>
        Here are a few projects I've worked on recently.
      </p>
      <div className="projects-list">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <div className="project-content">
              <img src={project.image} alt={project.title} className="project-image" />

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
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;




// import React from 'react';
// import ProjectCard from './ProjectCard';
// import "./Projects.css"

// function Project() {
//   const projectData = [
//     {
//       image: 'https://via.placeholder.com/400x250',
//       title: 'Smart News Aggregator',
//       description: 'Scrapes trending news from multiple sources and summarizes using OpenAI.',
//       techStack: ['Next.js', 'OpenAI API', 'Web Scraping', 'CSS'],
//       githubLink: 'https://github.com/your-repo/news-app',
//       liveLink: 'https://your-live-site.com/news-app',
//     },
//     {
//       image: 'https://via.placeholder.com/400x250',
//       title: 'Restaurant Ordering App',
//       description: 'A Firebase-authenticated app to manage online food orders.',
//       techStack: ['React', 'Firebase', 'Redux', 'MongoDB'],
//       githubLink: 'https://github.com/your-repo/restaurant-app',
//       liveLink: 'https://your-live-site.com/restaurant',
//     },
//     {
//       image: 'https://via.placeholder.com/400x250',
//       title: 'Restaurant Ordering App',
//       description: 'A Firebase-authenticated app to manage online food orders.',
//       techStack: ['React', 'Firebase', 'Redux', 'MongoDB'],
//       githubLink: 'https://github.com/your-repo/restaurant-app',
//       liveLink: 'https://your-live-site.com/restaurant',
//     }
//   ];

//   return (
//     <div className='project-container'>
//       {projectData.map((project, index) => (
//         <ProjectCard key={index} {...project} />
//       ))}
//     </div>
//   );
// }

// export default Project;
