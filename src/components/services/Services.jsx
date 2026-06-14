import React from 'react';
import { FaCode, FaLayerGroup, FaRobot } from 'react-icons/fa';
import './Services.css';

const services = [
  {
    icon: <FaCode />,
    title: 'Web Application Development',
    points: [
      'React / Next.js SPAs and full-stack apps',
      'REST API integration',
      'Performance optimized, SEO ready',
    ],
  },
  {
    icon: <FaLayerGroup />,
    title: 'MERN Stack Development',
    points: [
      'End-to-end MongoDB + Express + React + Node',
      'Authentication, RBAC, file uploads',
      'Scalable backend architecture',
    ],
  },
  {
    icon: <FaRobot />,
    title: 'AI-Integrated Products',
    points: [
      'Gemini / OpenAI API integration',
      'AI chatbots, automation tools',
      'Smart dashboards and data apps',
    ],
  },
];

const Services = () => {
  return (
    <section id="services">
      <div className="container">
        <div className="services__header reveal">
          <p className="section-label">Services</p>
          <h2 className="section-heading">What I Can Build For You</h2>
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
            Starting from <span className="gradient-text">₹15,000 / $200</span> ·
            Fast turnaround · Clean code guaranteed
          </p>
          <a href="#contact" className="btn btn-primary" id="hire-me-now-btn">
            Hire Me Now
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
