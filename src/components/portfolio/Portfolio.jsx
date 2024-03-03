import React from "react";
import IMG1 from "../../assets/02.png";
import IMG2 from "../../assets/eco2.png";
import IMG3 from "../../assets/01.png";
import IMG4 from "../../assets/Screenshot (g1).png";
import IMG5 from "../../assets/33.png";
import IMG6 from "../../assets/ClimaCheck1.png";

import "./portfolio.css";

const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: "MERN Stack Quiz App",
      img: IMG1,
      description:
        "A sophisticated MERN stack quiz application featuring MERN Stack including React hooks, MongoDB, Express.js, Node.js, and Redux for state management.",
      technologies: "React | Redux | Node.js | Express.js | MongoDB",
      link: "https://brain-teaser-ten.vercel.app/",
      github: "https://github.com/RajanPandey1311/Brain-Teaser",
    },
    {
      id: 1,
      title: "E-commerce WebApp",
      img: IMG2,
      description:
        "A fully responsive E-Com site with React.js which allows users to browse, select, and purchase items and having features of product listings, login page and shopping carts.",
      technologies: "React | JavaScript | CSS",
      link: "https://ecommerce-web-app-xi.vercel.app/",
      github: "https://github.com/RajanPandey1311/Ecommerce_WebApp",
    },
    {
      id: 1,
      title: "my npm package",
      img: IMG3,
      description:
        "Created a package designed to be easily integrated into applications, allowing a random quote feature to be incorporated with just a few lines of code.",
      technologies: "Node.js | JavaScript | CSS",
      link: "https://www.npmjs.com/package/rajan-random-quote",
      github: "https://github.com/RajanPandey1311/rajan_npm_package",
    },
    {
      id: 1,
      title: "Fitness WebApp",
      img: IMG4,
      description:
        "FitFlare is a fully responsive gym app by leveraging ReactJS as the core framework with Framer Motion for seamless animations and EmailJS for streamlined communication.",
      technologies: "React | Framer Motion | Email.js | JavaScript",
      link: "https://fit-flare.vercel.app/",
      github: "https://github.com/RajanPandey1311/FitFlare",
    },
    {
      id: 2,
      title: "ClimaCheck Weather_App",
      img: IMG6,
      description:
        "Developed a weather webapp using React to display current weather conditions Globally using Open Weather API to fetch real-time weather data.",
      technologies: "React | API | GeoLocation",
      link: "https://climacheckk.netlify.app/",
      github: "https://github.com/RajanPandey1311/ClimaCheck",
    },
    {
      id: 3,
      title: "VoiceRecognition",
      img: IMG5,
      description:
        "Designed and developed a fully responsive Voice Recognition web utilizing React , used Node packages such as react-speech-recognition and react-use-clipboard",
      technologies: "React.js | SpeechRecognition Hook",
      link: "https://voice22text.netlify.app/",
      github: "https://github.com/RajanPandey1311/VoiceRecognition",
    },
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              <p>{pro.technologies}</p>
            </div>
            <div className="portfolio__item-cta">
              <a
                href={pro.github}
                target="_blank"
                className="btn"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                href={pro.link}
                target="_blank"
                className="btn btn-primary"
                rel="noreferrer"
              >
                Live Website
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
