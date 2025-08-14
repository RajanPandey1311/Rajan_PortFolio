import React from "react";
import { FaAward } from "react-icons/fa";
import { VscFolderLibrary } from "react-icons/vsc";
import ME from "../../assets/me2.png";
import "./intro.css";

const Intro = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="me" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>2+ years</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>25+ Completed Projects</small>
            </article>
          </div>
          <p>
           # I'm Rajan Pandey, Enthusiast Frontend Developer skilled in
            crafting engaging user interfaces and Software Developer proficient
            in creating robust applications.{" "}
          </p>
          <p>
           # A developer who is passionate about understanding the business
            requirements and turn those requirements into reusable, maintainable
            and scalable code.{" "}
          </p>
          <p>
            # Innovative and detail-oriented Software Developer with over 1
            year of experience specializing in frontend development using
            React/Next.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default Intro;

