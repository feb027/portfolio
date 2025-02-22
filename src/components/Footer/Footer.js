import React, { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaCodepen, FaArrowUp } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [asciiArt, setAsciiArt] = useState('default');
  const [isMobile, setIsMobile] = useState(false);

  // Toggle back to top button visibility
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const getAsciiArt = (type) => {
    const arts = {
      default: `  _____           _       
 |  __ \\         | |      
 | |__) |__  _ __| |_ ___ 
 |  ___/ _ \\| '__| __/ __|
 | |  | (_) | |  | |_\\__ \\
 |_|   \\___/|_|   \\__|___/`,
      hover: `  _______ ______ _____ _    _ 
 |__   __|  ____/ ____| |  | |
    | |  | |__ | |    | |__| |
    | |  |  __|| |    |  __  |
    | |  | |___| |____| |  | |
    |_|  |______\\_____|_|  |_|`
    };
    return arts[type];
  };

  const socialLinks = [
    { icon: <FaGithub />, url: "https://github.com", label: "GitHub" },
    { icon: <FaLinkedin />, url: "https://linkedin.com", label: "LinkedIn" },
    { icon: <FaTwitter />, url: "https://twitter.com", label: "Twitter" },
    { icon: <FaCodepen />, url: "https://codepen.io", label: "CodePen" }
  ];

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-top">
          {!isMobile && (
            <div className="footer-ascii" 
                 onMouseEnter={() => setAsciiArt('hover')}
                 onMouseLeave={() => setAsciiArt('default')}>
              {getAsciiArt(asciiArt)}
            </div>
          )}
          <nav className="footer-links">
            <a href="#about">{isMobile ? 'About' : '<About />'}</a>
            <a href="#projects">{isMobile ? 'Projects' : '<Projects />'}</a>
            <a href="#skills">{isMobile ? 'Skills' : '<Skills />'}</a>
            <a href="#contact">{isMobile ? 'Contact' : '<Contact />'}</a>
          </nav>
        </div>
        
        <div className="footer-social">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              title={link.label}
            >
              {link.icon}
            </a>
          ))}
        </div>

        <div className="terminal-line">
          <span className="terminal-prompt">echo "© {new Date().getFullYear()} Febnawan Fatur Rochman"</span>
        </div>
        
        <p className="footer-credit">
          &lt;Built with React + Creativity /&gt;
        </p>
      </div>

      <button 
        className={`back-to-top ${isVisible ? 'visible' : ''}`}
        onClick={scrollToTop}
        aria-label="Scroll to top"
      >
        <FaArrowUp />
      </button>
    </footer>
  );
};

export default Footer;
