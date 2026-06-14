import React from 'react';
import ME from '../../assets/me2.png';
import { FaAward, FaRocket, FaBrain } from 'react-icons/fa';
import './intro.css';

const highlights = [
  { icon: <FaAward />, value: '2.5+', label: 'Years Experience' },
  { icon: <FaRocket />, value: '20+ SaaS', label: 'Products Shipped' },
  { icon: <FaBrain />, value: '1,000s+', label: 'Active Users' },
];

const Intro = () => {
  return (
    <section id="about">
      <div className="container about__container">
        <div className="about__image-wrapper reveal-left">
          <div className="about__image-glow"></div>
          <div className="about__image">
            <img src={ME} alt="Rajan Pandey" loading="lazy" />
          </div>
          <div className="about__float-badges">
            <span className="about__float-badge about__float-badge--1">React</span>
            <span className="about__float-badge about__float-badge--2">Node.js</span>
            <span className="about__float-badge about__float-badge--3">AI</span>
            <span className="about__float-badge about__float-badge--4">Next.js</span>
          </div>
        </div>

        <div className="about__content reveal-right">
          <p className="section-label">About Me</p>
          <h2 className="section-heading">I Build Products, Not Just Websites</h2>

          <p className="about__text">
            I'm Rajan Pandey — a MERN Stack Developer who obsesses over building
            products that actually solve problems. I have successfully <strong style={{color: 'var(--color-primary)', fontWeight: '700'}}>delivered 20+ SaaS products with thousands of active users</strong>, turning complex business ideas into fast, scalable applications.
          </p>
          <p className="about__text">
            With 2.5+ years of hands-on experience in the MERN ecosystem, I've
            shipped everything from AI-powered platforms to enterprise LMS systems.
            My code is clean, my delivery is fast, and my clients keep coming back.
          </p>
          <p className="about__text">
            Currently building AI-integrated products and available for freelance
            projects that challenge me to push boundaries.
          </p>

          <div className="about__highlights stagger-children">
            {highlights.map((item, index) => (
              <div key={index} className="about__highlight glass-card">
                <span className="about__highlight-icon">{item.icon}</span>
                <span className="about__highlight-value gradient-text">{item.value}</span>
                <span className="about__highlight-label">{item.label}</span>
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
