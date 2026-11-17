import React from 'react';
import {
  FaReact, FaNodeJs, FaGitAlt, FaGithub, FaHtml5, FaCss3Alt, FaJs, FaRobot,
} from 'react-icons/fa';
import {
  SiNextdotjs, SiTypescript, SiTailwindcss, SiRedux,
  SiExpress, SiMongodb, SiMysql, SiJsonwebtokens,
  SiVercel, SiPostman, SiOpenai,
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
    title: 'Backend & APIs',
    skills: [
      { name: 'Node.js', icon: <FaNodeJs /> },
      { name: 'Express', icon: <SiExpress /> },
      { name: 'MongoDB', icon: <SiMongodb /> },
      { name: 'MySQL', icon: <SiMysql /> },
      { name: 'JWT / RBAC', icon: <SiJsonwebtokens /> },
      { name: 'REST APIs', icon: <FaNodeJs /> },
    ],
  },
  {
    title: 'AI & Tooling',
    skills: [
      { name: 'OpenAI', icon: <SiOpenai /> },
      { name: 'Gemini', icon: <FaRobot /> },
      { name: 'RAG', icon: <FaRobot /> },
      { name: 'LLM', icon: <FaRobot /> },
      { name: 'Git', icon: <FaGitAlt /> },
      { name: 'GitHub', icon: <FaGithub /> },
      { name: 'Vercel', icon: <SiVercel /> },
      { name: 'Postman', icon: <SiPostman /> },
    ],
  },
];

const Experience = () => {
  return (
    <section id="skills">
      <div className="container">
        <div className="skills__header reveal">
          <p className="section-label">Tech Stack</p>
          <h2 className="section-heading">Tools I ship with</h2>
        </div>

        <div className="skills__grid stagger-children">
          {skillCategories.map((category) => (
            <div key={category.title} className="skills__category glass-card">
              <h3 className="skills__category-title">
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
