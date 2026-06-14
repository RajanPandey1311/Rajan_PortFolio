import React, { useEffect } from 'react';
import Topbar from './components/topbar/Topbar';
import Header from './components/header/Header';
import Intro from './components/intro/Intro';
import Experience from './components/experience/Experience';
import Portfolio from './components/portfolio/Portfolio';
import Services from './components/services/Services';
import Timeline from './components/timeline/Timeline';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Chatbot from './components/chatbot/Chatbot';

const App = () => {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.15,
      rootMargin: '0px 0px -50px 0px',
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
        }
      });
    }, observerOptions);

    const revealElements = document.querySelectorAll(
      '.reveal, .reveal-left, .reveal-right, .stagger-children'
    );

    revealElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Topbar />
      <Header />
      <Intro />
      <Experience />
      <Portfolio />
      <Services />
      <Timeline />
      <Contact />
      <Footer />
      <Chatbot />
    </>
  );
};

export default App;
