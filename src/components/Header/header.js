import React, { useState, useEffect, useRef } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isTypingDone, setIsTypingDone] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Updated sections array to include experience
      const sections = ['about', 'experience', 'projects', 'skills', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      setActiveSection(current || '');

      // Calculate scroll progress
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentProgress = (window.scrollY / totalScroll) * 100;
      setScrollProgress(currentProgress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current && 
        !menuRef.current.contains(event.target) && 
        !event.target.closest('.menu-btn')
      ) {
        closeMenu();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-in-out',
    });

    // Add typing animation when component mounts
    setTimeout(() => setIsTypingDone(true), 1000);
  }, []);

  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = '';
  };

  const toggleMenu = () => {
    if (isMenuOpen) {
      closeMenu();
    } else {
      setIsMenuOpen(true);
      document.body.style.overflow = 'hidden';
    }
  };

  const handleLinkClick = (e) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute('href');
    const targetElement = document.querySelector(href);
    
    if (targetElement) {
      const headerOffset = 100;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    
    closeMenu();
  };

  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`} data-aos="fade-down">
      <a href="#" onClick={scrollToTop} className="logo">
        <span className={`logo-text ${isTypingDone ? 'typed' : ''}`}>
          {'FFR'}
        </span>
      </a>
      
      <div className="mobile-nav">
        <button 
          className="menu-btn" 
          onClick={toggleMenu}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          type="button"
        >
          <div className={`hamburger ${isMenuOpen ? 'active' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>
      </div>

      <nav ref={menuRef} className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
        <ul>
          {['about', 'experience', 'projects', 'skills', 'contact'].map((section, index) => (
            <li key={section} style={{ animationDelay: `${index * 0.1}s` }}>
              <a 
                href={`#${section}`} 
                onClick={handleLinkClick} 
                className={activeSection === section ? 'active' : ''}
                data-text={section}
              >
                <span>{`0${index + 1}.`}</span> {section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Scroll Progress Indicator */}
      <div 
        className="scroll-progress"
        style={{ 
          width: `${scrollProgress}%`,
          opacity: scrolled ? 1 : 0 
        }}
      />
    </header>
  );
};

export default Header;