import React from "react";
import CTA from "./CTA";
import HeaderSocials from "./HeaderSocials";
import "./header.css";

const Header = () => {
  return (
    <header id="home">
      <div className="container header__container">
        <h3>Hello!👋Connections, I'm</h3>
        <h1>Rajan Pandey</h1>
        <h2 className="text-light">Front-end Developer | MERN Developer</h2>
        <CTA />
        <a href="#contact" className="scroll__down">
          Let's Intro
        </a>
        <HeaderSocials />
      </div>
    </header>
  );
};

export default Header;
