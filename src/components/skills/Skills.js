import './Skills.css';
import { FaJs, FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaGitAlt, FaGithub, FaDatabase } from 'react-icons/fa';
import { SiRedux, SiNextdotjs, SiFirebase, SiExpress, SiTailwindcss, SiMongodb } from 'react-icons/si';

const skills = [
  { name: 'JavaScript', icon: <FaJs color="#F7DF1E" /> },
  { name: 'Html5', icon: <FaHtml5 color="#E34F26" /> },
  { name: 'CSS3', icon: <FaCss3Alt color="#1572B6" /> },
  { name: 'React-JS', icon: <FaReact color="#61DAFB" /> },
  { name: 'Next-JS', icon: <SiNextdotjs color="#000000" /> },
  { name: 'Firebase', icon: <SiFirebase color="#FFCA28" /> },
  { name: 'Git', icon: <FaGitAlt color="#F05032" /> },
  { name: 'GitHub', icon: <FaGithub color="#181717" /> },
  { name: 'MongoDB', icon: <SiMongodb color="#47A248" /> },
  { name: 'Express-JS', icon: <SiExpress color="#000000" /> },
  { name: 'REST API', icon: <FaDatabase color="#4DB33D" /> },
  { name: 'Node-JS', icon: <FaNodeJs color="#339933" /> },
  { name: 'Redux Toolkit', icon: <SiRedux color="#764ABC" /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss color="#06B6D4" /> },
];

const Skills = () => {
  return (
    <section className="skills-section" id="skills">
      <h1 className="skills-title">My <span style={{color:"#FF7E5F"}}>Skillset</span></h1>
      <div className="skills-list">
        {skills.map((skill, idx) => (
          <div className="skill-item" key={idx}>
            <span className="skill-icon" style={{ fontSize: '2rem', marginRight: '0.5rem' }}>{skill.icon}</span>
            <span className="skill-name">{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;