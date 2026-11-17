import React, { useState, useEffect, useRef } from 'react';
import CV from '../../assets/Rajan_Resume_2026.pdf';
import ME from '../../assets/rajan-hero-portrait.jpg';
import './header.css';

const roles = [
  'AI Fullstack Engineer',
  'React / Next.js',
  'RAG & GenAI',
  'MERN Engineer',
];

const Header = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const heroRef = useRef(null);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timeout;

    if (!isDeleting) {
      if (displayText.length < currentRole.length) {
        timeout = setTimeout(() => {
          setDisplayText(currentRole.substring(0, displayText.length + 1));
        }, 80);
      } else {
        timeout = setTimeout(() => setIsDeleting(true), 2000);
      }
    } else {
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(currentRole.substring(0, displayText.length - 1));
        }, 40);
      } else {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        setMousePos({
          x: ((e.clientX - rect.left) / rect.width - 0.5) * 20,
          y: ((e.clientY - rect.top) / rect.height - 0.5) * 20,
        });
      }
    };

    const heroElement = heroRef.current;
    if (heroElement) {
      heroElement.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      if (heroElement) {
        heroElement.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);

  return (
    <header id="home" ref={heroRef}>
      <div className="hero__bg-effects">
        <div
          className="hero__dot-grid"
          style={{
            transform: `translate(${mousePos.x * 0.5}px, ${mousePos.y * 0.5}px)`,
          }}
        ></div>
      </div>

      <div className="container hero__container">
        <div className="hero__content">
          <p className="hero__greeting">Hi, I'm</p>
          <h1 className="hero__name">Rajan Pandey</h1>
          <div className="hero__typewriter">
            <span className="hero__role">{displayText}</span>
            <span className="hero__cursor">|</span>
          </div>
          <p className="hero__bio">
            AI Fullstack Engineer with 3 years shipping production web apps across
            SaaS, EdTech, and GenAI — React, Next.js, TypeScript, and MERN. Building
            on LLM, RAG, and prompt-driven workflows to ship AI features end to end.
          </p>

          <div className="hero__cta">
            <a href={CV} download className="btn btn-primary" id="download-resume-btn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7,10 12,15 17,10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Download Resume
            </a>
            <a href="#contact" className="btn" id="hire-me-btn">
              Hire Me
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12,5 19,12 12,19" />
              </svg>
            </a>
          </div>
        </div>

        <div className="hero__visual">
          <div className="hero__photo">
            <img src={ME} alt="Rajan Pandey" />
          </div>
        </div>
      </div>

      <a href="#about" className="hero__scroll-indicator">
        <span className="hero__scroll-text">Scroll</span>
        <span className="hero__scroll-line"></span>
      </a>
    </header>
  );
};

export default Header;
