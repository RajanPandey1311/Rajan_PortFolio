import React, { useEffect, useRef } from 'react';
import './Timeline.css';

const experiences = [
  {
    company: 'Cleveratti Skills Pvt. Ltd.',
    role: 'SDE-1',
    period: 'Jun 2025 – Present',
    location: 'Gurgaon, India',
    points: [
      'Building a full-featured LMS platform with role-based access control',
      'Implementing AI-powered features for enhanced learning experiences',
      'Leading frontend architecture decisions using React and TypeScript',
    ],
  },
  {
    company: 'Vega6 Webware Technology',
    role: 'Frontend Developer',
    period: 'Previous Role',
    location: 'Remote',
    points: [
      'Delivered multiple React-based client projects on tight deadlines',
      'Built responsive UI components and interactive user experiences',
      'Collaborated with cross-functional teams for seamless delivery',
    ],
  },
  {
    company: 'Freelance',
    role: 'MERN Stack Developer',
    period: 'Ongoing',
    location: 'Remote',
    points: [
      'Built BuzzAgentsAI — an AI agents automation platform',
      'Developed MovieReel — AI-powered movie discovery app',
      'Delivering end-to-end solutions for clients worldwide',
    ],
  },
];

const Timeline = () => {
  const lineRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!lineRef.current) return;
      const rect = lineRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const scrollProgress = Math.min(
        Math.max((windowHeight - rect.top) / (rect.height + windowHeight), 0),
        1
      );
      lineRef.current.style.setProperty('--line-progress', scrollProgress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="experience-timeline">
      <div className="container">
        <div className="timeline__header reveal">
          <p className="section-label">Experience</p>
          <h2 className="section-heading">Where I've Worked</h2>
        </div>

        <div className="timeline" ref={lineRef}>
          <div className="timeline__line"></div>

          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`timeline__item reveal ${index % 2 === 0 ? 'timeline__item--left' : 'timeline__item--right'}`}
            >
              <div className="timeline__dot"></div>
              <div className="timeline__card glass-card">
                <div className="timeline__card-header">
                  <h3 className="timeline__company">{exp.company}</h3>
                  <span className="timeline__period">{exp.period}</span>
                </div>
                <p className="timeline__role gradient-text">{exp.role}</p>
                <p className="timeline__location">{exp.location}</p>
                <ul className="timeline__points">
                  {exp.points.map((point, i) => (
                    <li key={i} className="timeline__point">
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
