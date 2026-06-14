import React, { useRef } from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { soloProjects } from '../../data';
import './portfolio.css';

const Portfolio = () => {
  const handleMouseMove = (e, cardRef) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -8;
    const rotateY = ((x - centerX) / centerX) * 8;

    cardRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
  };

  const handleMouseLeave = (cardRef) => {
    if (!cardRef.current) return;
    cardRef.current.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
  };

  return (
    <section id="projects">
      <div className="container">
        <div className="portfolio__header reveal">
          <p className="section-label">Featured Work</p>
          <h2 className="section-heading">Things I've Built</h2>
        </div>

        <div className="portfolio__grid stagger-children">
          {soloProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            />
          ))}
        </div>

        <div className="portfolio__footer reveal">
          <a
            href="https://github.com/RajanPandey1311"
            target="_blank"
            rel="noreferrer"
            className="btn"
            id="view-all-github-btn"
          >
            <FaGithub />
            View All on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ project, onMouseMove, onMouseLeave }) => {
  const cardRef = useRef(null);

  return (
    <article
      className="portfolio__card glass-card"
      ref={cardRef}
      onMouseMove={(e) => onMouseMove(e, cardRef)}
      onMouseLeave={() => onMouseLeave(cardRef)}
    >
      <div className="portfolio__card-accent"></div>

      {project.featured && (
        <span className="portfolio__featured-badge">FEATURED</span>
      )}

      <div className="portfolio__card-body">
        <h3 className="portfolio__card-title">{project.title}</h3>
        <p className="portfolio__card-desc">{project.description}</p>

        <div className="portfolio__tags">
          {project.technologies.map((tech) => (
            <span key={tech} className="portfolio__tag">
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div className="portfolio__card-actions">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="btn portfolio__action-btn"
          >
            <FaGithub />
            GitHub
          </a>
        )}
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary portfolio__action-btn"
          >
            Live
            <FaExternalLinkAlt size={12} />
          </a>
        )}
      </div>
    </article>
  );
};

export default Portfolio;
