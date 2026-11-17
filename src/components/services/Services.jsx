import React from 'react';
import { FaCode, FaLayerGroup, FaRobot } from 'react-icons/fa';
import './Services.css';

const services = [
  {
    icon: <FaCode />,
    title: 'Web Application Development',
    points: [
      'React / Next.js SPAs and full-stack apps',
      'REST API integration & responsive UI',
      'Performance-focused, production-ready delivery',
    ],
  },
  {
    icon: <FaLayerGroup />,
    title: 'Full-Stack MERN',
    points: [
      'End-to-end MongoDB + Express + React + Node',
      'Authentication, JWT, RBAC, and admin panels',
      'Scalable backend architecture & integrations',
    ],
  },
  {
    icon: <FaRobot />,
    title: 'AI Product Integration',
    points: [
      'OpenAI / Gemini API integration',
      'AI agents, chatbots, and automation workflows',
      'GenAI features for SaaS and content products',
    ],
  },
];

const Services = () => {
  return (
    <section id="services">
      <div className="container">
        <div className="services__header reveal">
          <p className="section-label">Services</p>
          <h2 className="section-heading">What I can build for you</h2>
        </div>

        <div className="services__grid stagger-children">
          {services.map((service, index) => (
            <div key={index} className="services__card glass-card">
              <span className="services__icon">{service.icon}</span>
              <h3 className="services__title">{service.title}</h3>
              <ul className="services__points">
                {service.points.map((point, i) => (
                  <li key={i} className="services__point">
                    <span className="services__point-dot"></span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="services__footer reveal">
          <p className="services__pricing">
            End-to-end delivery across frontend, backend, and AI integrations.
          </p>
          <a href="#contact" className="btn btn-primary" id="hire-me-now-btn">
            Get in Touch
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

export default Services;
