import React from 'react';
import {
  FaReact, FaNodeJs, FaGitAlt, FaGithub, FaDocker, FaHtml5, FaCss3Alt, FaJs,
} from 'react-icons/fa';
import {
  SiNextdotjs, SiTypescript, SiTailwindcss, SiRedux,
  SiExpress, SiMongodb, SiPostgresql, SiJsonwebtokens,
  SiVercel, SiPostman, SiVisualstudiocode,
} from 'react-icons/si';
import './experience.css';

const skillCategories = [
  {
    title: 'Frontend',
    skills: [
      { name: 'React', icon: <FaReact /> },
      { name: 'Next.js', icon: <SiNextdotjs /> },
      { name: 'TypeScript', icon: <SiTypescript /> },
      { name: 'Tailwind', icon: <SiTailwindcss /> },
      { name: 'Redux', icon: <SiRedux /> },
      { name: 'HTML5', icon: <FaHtml5 /> },
      { name: 'CSS3', icon: <FaCss3Alt /> },
      { name: 'JavaScript', icon: <FaJs /> },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node.js', icon: <FaNodeJs /> },
      { name: 'Express', icon: <SiExpress /> },
      { name: 'MongoDB', icon: <SiMongodb /> },
      { name: 'PostgreSQL', icon: <SiPostgresql /> },
      { name: 'JWT', icon: <SiJsonwebtokens /> },
      { name: 'REST API', icon: <FaNodeJs /> },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', icon: <FaGitAlt /> },
      { name: 'GitHub', icon: <FaGithub /> },
      { name: 'Docker', icon: <FaDocker /> },
      { name: 'Vercel', icon: <SiVercel /> },
      { name: 'Postman', icon: <SiPostman /> },
      { name: 'VS Code', icon: <SiVisualstudiocode /> },
    ],
  },
];

const Experience = () => {
  return (
    <section id="skills">
      <div className="container">
        <div className="skills__header reveal">
          <p className="section-label">Tech Stack</p>
          <h2 className="section-heading">Tools I Ship With</h2>
        </div>

        <div className="skills__grid stagger-children">
          {skillCategories.map((category) => (
            <div key={category.title} className="skills__category glass-card">
              <h3 className="skills__category-title gradient-text">
                {category.title}
              </h3>
              <div className="skills__items">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="skills__item">
                    <span className="skills__icon">{skill.icon}</span>
                    <span className="skills__name">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
