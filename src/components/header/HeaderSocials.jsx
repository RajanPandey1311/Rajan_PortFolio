import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/rajanpandey1/" target="_blank" rel="noreferrer" ><BsLinkedin /></a>
      <a href="https://github.com/RajanPandey1311" target="_blank" rel="noreferrer" ><FaGithub /></a>
      <a href="https://www.instagram.com/rajanpandey_r/" target="_blank" rel="noreferrer" ><FaInstagram /></a>
    </div>
  )
}

export default HeaderSocials