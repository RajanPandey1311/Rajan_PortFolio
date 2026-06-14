import React, { useState, useEffect, useCallback } from 'react';
import './topbar.css';

const navLinks = [
  { id: '#home', label: 'Home' },
  { id: '#about', label: 'About' },
  { id: '#skills', label: 'Skills' },
  { id: '#projects', label: 'Projects' },
  { id: '#services', label: 'Services' },
  { id: '#contact', label: 'Contact' },
];

const Topbar = () => {
  const [activeNav, setActiveNav] = useState('#home');
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 60);

    const sections = navLinks.map((link) => link.id.substring(1));
    for (let i = sections.length - 1; i >= 0; i--) {
      const section = document.getElementById(sections[i]);
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 150) {
          setActiveNav(`#${sections[i]}`);
          break;
        }
      }
    }
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const handleNavClick = (id) => {
    setActiveNav(id);
    setMenuOpen(false);
  };

  return (
    <nav className={`topbar ${scrolled ? 'topbar--scrolled' : ''}`} id="topbar-nav">
      <div className="topbar__inner">
        <a href="#home" className="topbar__logo" onClick={() => handleNavClick('#home')}>
          <span className="topbar__logo-text">RP</span>
        </a>

        <div className={`topbar__links ${menuOpen ? 'topbar__links--open' : ''}`}>
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.id}
              className={`topbar__link ${activeNav === link.id ? 'topbar__link--active' : ''}`}
              onClick={() => handleNavClick(link.id)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="btn btn-primary topbar__hire-btn-mobile"
            onClick={() => handleNavClick('#contact')}
          >
            Hire Me
          </a>
        </div>

        <div className="topbar__right">
          <div className="topbar__status">
            <span className="topbar__status-dot"></span>
            <span className="topbar__status-text">Available for Freelance</span>
          </div>

          <button
            className={`topbar__hamburger ${menuOpen ? 'topbar__hamburger--open' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="topbar__overlay" onClick={() => setMenuOpen(false)}></div>
      )}
    </nav>
  );
};

export default Topbar;