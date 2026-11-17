import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub, FaInstagram } from 'react-icons/fa';
import './footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="footer">
      <div className="container footer__container">
        <div className="footer__top">
          <div className="footer__brand">
            <a href="#home" className="footer__logo">
              <span>RP</span>
            </a>
            <p className="footer__tagline">
              AI Fullstack Engineer — shipping GenAI & MERN products.
            </p>
          </div>

          <div className="footer__links">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#services">Services</a>
            <a href="#contact">Contact</a>
          </div>

          <div className="footer__socials">
            <a
              href="https://www.linkedin.com/in/rajanpandey1/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <BsLinkedin />
            </a>
            <a
              href="https://github.com/RajanPandey1311"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.instagram.com/rajanpandey_r/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
          </div>
        </div>

        <div className="footer__divider"></div>

        <div className="footer__bottom">
          <div className="footer__availability">
            <span className="footer__availability-dot"></span>
            Open to full-time opportunities
          </div>
          <p className="footer__copyright">
            &copy; Rajan Pandey {currentYear}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
