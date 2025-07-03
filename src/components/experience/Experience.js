import React from 'react';
import './Experience.css';

const achievements = [
  {
    title: '1.5 Years of Self-Learning',
    description: 'Self-employed developer actively learning and building real-world projects for the past 1.5 years, focusing on modern full-stack development.',
  },
  {
    title: '150+ LeetCode Problems Solved',
    description: 'Gained problem-solving skills and algorithmic thinking by solving a wide range of coding challenges.',
  },
  {
    title: '6+ Projects',
    description: 'Developed and deployed various projects.',
  },
];

const Experience = () => {
  return (
    <div className="experience-container" id="experience">
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
