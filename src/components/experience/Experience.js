// src/Experience.js
import React from 'react';
import './Experience.css';

const achievements = [
  {
    title: '1 Year Experience',
    description: 'Professional experience in software development, working on various projects and technologies.',
  },
  {
    title: '150+ LeetCode Problems Solved',
    description: 'Demonstrated problem-solving skills and algorithmic thinking by solving a wide range of coding challenges.',
  },
  {
    title: '10+ GitHub Repositories',
    description: 'Contributed to multiple projects and open-source repositories, showcasing diverse skills and collaborative work.',
  },
  {
    title: '10+ Projects',
    description: 'Developed and deployed various projects, ranging from web applications to tools and utilities.',
  },
];

const Experience = () => {
  return (
    <div className="experience-container" id='experience'>
      <h1 className="experience-title">Experience & Achievements</h1>
      <div className="experience-list">
        {achievements.map((item, index) => (
          <div className="experience-card" key={index}>
            <h2 className="experience-card-title">{item.title}</h2>
            <p className="experience-card-description">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
