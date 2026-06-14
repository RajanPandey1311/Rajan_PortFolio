import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import {
  MdOutlineEmail,
  MdOutlineLocationOn,
} from 'react-icons/md';
import { BsLinkedin } from 'react-icons/bs';
import { FaExternalLinkAlt } from 'react-icons/fa';
import './contact.css';

const contactInfo = [
  {
    icon: <MdOutlineEmail />,
    label: 'Email',
    value: 'rajanpandeygiit31078379@gmail.com',
    link: 'mailto:rajanpandeygiit31078379@gmail.com',
  },
  {
    icon: <BsLinkedin />,
    label: 'LinkedIn',
    value: 'linkedin.com/in/rajanpandey1',
    link: 'https://www.linkedin.com/in/rajanpandey1/',
  },
  {
    icon: <FaExternalLinkAlt />,
    label: 'Freelancer',
    value: 'freelancer.com/u/RajanDevelop',
    link: 'https://www.freelancer.com/u/RajanDevelop',
  },
  {
    icon: <MdOutlineLocationOn />,
    label: 'Location',
    value: 'Delhi NCR, India (Remote Friendly)',
    link: null,
  },
];

const Contact = () => {
  const [status, setStatus] = useState('idle');
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');

    emailjs
      .sendForm(
        'service_lqzov2d',
        'template_8a54u9b',
        formRef.current,
        'h5oGvm41pN7nc8LcO'
      )
      .then(
        () => {
          setStatus('sent');
          e.target.reset();
          setTimeout(() => setStatus('idle'), 5000);
        },
        (error) => {
          console.error('EmailJS error:', error.text);
          setStatus('error');
          setTimeout(() => setStatus('idle'), 5000);
        }
      );
  };

  return (
    <section id="contact">
      <div className="container">
        <div className="contact__header reveal">
          <p className="section-label">Get In Touch</p>
          <h2 className="section-heading">Let's Build Something</h2>
          <p className="contact__subtext">
            Available for freelance projects, contract work, and full-time remote roles.
          </p>
        </div>

        <div className="contact__container">
          <div className="contact__info reveal-left">
            {contactInfo.map((info, index) => (
              <div key={index} className="contact__card glass-card">
                <span className="contact__card-icon">{info.icon}</span>
                <div className="contact__card-content">
                  <h4 className="contact__card-label">{info.label}</h4>
                  {info.link ? (
                    <a
                      href={info.link}
                      target="_blank"
                      rel="noreferrer"
                      className="contact__card-value"
                    >
                      {info.value}
                    </a>
                  ) : (
                    <p className="contact__card-value">{info.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="contact__form glass-card reveal-right"
            id="contact-form"
          >
            <div className="contact__form-group">
              <input
                type="text"
                name="user_name"
                placeholder="Your Name"
                required
                className="contact__input"
                id="contact-name-input"
              />
            </div>
            <div className="contact__form-group">
              <input
                type="email"
                name="user_email"
                placeholder="Your Email"
                required
                className="contact__input"
                id="contact-email-input"
              />
            </div>
            <div className="contact__form-group">
              <textarea
                name="user_message"
                placeholder="Tell me about your project..."
                rows="5"
                required
                className="contact__input contact__textarea"
                id="contact-message-input"
              ></textarea>
            </div>
            <button
              type="submit"
              className="btn btn-primary contact__submit-btn"
              disabled={status === 'sending'}
              id="contact-submit-btn"
            >
              {status === 'sending' ? (
                <>
                  <span className="contact__spinner"></span>
                  Sending...
                </>
              ) : status === 'sent' ? (
                '✓ Message Sent!'
              ) : status === 'error' ? (
                'Error — Try Again'
              ) : (
                <>
                  Send Message
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12,5 19,12 12,19" />
                  </svg>
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
