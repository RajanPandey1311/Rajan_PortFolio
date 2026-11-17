import React, { useEffect, useRef } from 'react';
import './Timeline.css';

const experiences = [
  {
    company: 'Cleveratti Skills Pvt. Ltd.',
    role: 'SDE-1',
    period: 'Jun 2026 – Present',
    location: 'Gurugram, India',
    points: [
      'Architected a full-stack LMS on MERN with 4 RBAC-secured role workflows, real-time progress tracking, and Admin Panel ownership.',
      'Engineered a Meta Graph API lead-generation pipeline from Instagram and Facebook Ads with demographic segmentation and enquiry routing.',
      'Shipped a cross-platform React Native (CLI/Expo) assessor app for 5,000+ users with Zustand and SQLite offline-first storage.',
    ],
  },
  {
    company: 'Vega6 Webware Technologies Pvt. Ltd.',
    role: 'ReactJS Developer',
    period: 'Sep 2024 – May 2026',
    location: 'Noida, India',
    points: [
      'Delivered 20+ production web applications using React.js, Redux Toolkit and Bootstrap — including SaaS and GenAI products.',
      'Improved frontend performance by 35% using React Query, memoization, lazy loading and Error Boundaries.',
      'Launched interactive dashboards with Recharts, enabling data-driven insights for 1,000+ users.',
    ],
  },
  {
    company: 'Infinevo Tech Pvt. Ltd.',
    role: 'Software Developer',
    period: 'Mar 2024 – Jun 2024',
    location: 'Delhi, India',
    points: [
      'Built 4+ real-world projects using React.js, Next.js, Tailwind CSS, REST APIs and JWT authentication.',
      'Optimized frontend rendering with React Suspense and lazy loading, improving Lighthouse metrics by ~20%.',
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
          <h2 className="section-heading">Where I've worked</h2>
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
                <p className="timeline__role">{exp.role}</p>
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
