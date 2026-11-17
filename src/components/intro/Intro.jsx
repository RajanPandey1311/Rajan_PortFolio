import React from 'react';
import './intro.css';

const highlights = [
  { value: '3 yrs', label: 'Experience' },
  { value: '15+', label: 'Production apps' },
  { value: '25+', label: 'Projects shipped' },
];

const Intro = () => {
  return (
    <section id="about">
      <div className="container about__container">
        <div className="about__content reveal">
          <p className="section-label">About</p>
          <h2 className="section-heading">I ship AI-powered products end to end.</h2>

          <p className="about__text">
            I'm Rajan Pandey — an AI Fullstack Engineer with 3 years of full-time
            experience building production web applications across SaaS, EdTech,
            and GenAI. Strong in React.js, Next.js, TypeScript, and the MERN stack,
            with hands-on work across frontend, backend, databases, and third-party
            integrations.
          </p>
          <p className="about__text">
            I've delivered{' '}
            <strong style={{ color: 'var(--color-primary)', fontWeight: '700' }}>
              15+ production apps
            </strong>{' '}
            — from AI social automation and GenAI video platforms to enterprise LMS
            systems with RBAC, Meta Graph lead pipelines, and React Native apps for
            thousands of users.
          </p>
          <p className="about__text">
            Certified in Anthropic AI Fluency and IBM Web Development. Currently
            open to full-time roles that need someone who owns the full stack —
            and the AI layer on top of it.
          </p>

          <div className="about__stats stagger-children">
            {highlights.map((item, index) => (
              <div key={index} className="about__stat">
                <span className="about__stat-value">{item.value}</span>
                <span className="about__stat-label">{item.label}</span>
              </div>
            ))}
          </div>

          <a href="#contact" className="btn btn-primary" id="about-lets-talk-btn">
            Let's Talk
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12,5 19,12 12,19" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Intro;
