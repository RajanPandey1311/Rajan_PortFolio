import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa'
import './footer.css';

const Footer = () => {
  
  let getYear = () => {
    let currentYear = new Date().getFullYear();
    return currentYear;
  };
  
  return (
    <footer>
      <a href="#home" className="footer__logo">Rajan Pandey</a>
      <ul className="permalinks">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Skills</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="footer__socials">
      <a href="https://www.linkedin.com/in/rajanpandey1/" target="_blank" rel="noreferrer" ><BsLinkedin /></a>
      <a href="https://github.com/RajanPandey1311" target="_blank" rel="noreferrer" ><FaGithub /></a>
      <a href="https://www.instagram.com/rajanpandey_r/" target="_blank" rel="noreferrer" ><FaInstagram /></a>
      </div>
      <div className="footer__copyright">
        <small>&copy; Rajan_Pandey {getYear()}. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer
