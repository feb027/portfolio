import React, { useEffect, useState } from 'react';
import './About.css';
import profileImg from '../../assets/photo.JPG';

const About = () => {
  const [displayText, setDisplayText] = useState('');
  const fullText = "Tuurning Vision Into Reality With Code And Design.";
  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setDisplayText(prev => prev + fullText.charAt(index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  const stats = [
    { 
      number: '2+', 
      label: 'Years Experience', 
      icons: '{ }',
      color: '#00ff9d'
    },
    { 
      number: '20+', 
      label: 'Projects Completed', 
      icons: '[ ]',
      color: '#00d8ff'
    },
    { 
      number: '15+', 
      label: 'Technologies', 
      icons: '</>',
      color: '#ff3d00'
    }
  ];

  return (
    <div className="about">
      <div className="matrix-background">
        <div className="matrix-column"></div>
        <div className="matrix-column"></div>
        <div className="matrix-column"></div>
      </div>

      <div className="about-container" data-aos="fade-up">

        <div className="about-content">
          <div className="about-image-column" data-aos="fade-right">
            <div className="terminal-wrapper">
              <div className="terminal-header">
                <div className="terminal-buttons">
                  <span></span><span></span><span></span>
                </div>
                <div className="terminal-title">
                  <i className="fas fa-code"></i>
                  developer.exe
                </div>
                <div className="terminal-menu">
                  <span>File</span>
                  <span>Edit</span>
                  <span>View</span>
                </div>
              </div>
              <div className="terminal-body">
                <div className="line-numbers">
                  {[...Array(5)].map((_, i) => (
                    <span key={i}>{i + 1}</span>
                  ))}
                </div>
                <div className="image-container">
                  <img src={profileImg} alt="Your Profile" />
                  <div className="image-overlay">
                    <div className="typing-text">
                      Loading developer profile...
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="about-info-column" data-aos="fade-left">
            <h3>{displayText}</h3>
            
            <div className="bio-container">
              <p className="bio">
                <span className="highlight">const</span> aboutMe = {'{'}
                <br />
                &nbsp;&nbsp;name: <span className="highlight">'Febnawan Fatur Rochman'</span>,
                <br />
                &nbsp;&nbsp;passion: <span className="highlight">'Creating beautiful digital experiences'</span>,
                <br />
                &nbsp;&nbsp;focus: <span className="highlight">'Building responsive & user-friendly applications'</span>,
                <br />
                &nbsp;&nbsp;role: <span className="highlight">'Web Developer'</span>
                <br />
                {'}'};
              </p>
            </div>

            <div className="stats-grid">
              {stats.map((stat, index) => (
                <div 
                  className="stat-card" 
                  key={index}
                  data-aos="zoom-in"
                  data-aos-delay={index * 100}
                >
                  <span className="stat-icons" style={{ color: stat.color }}>
                    {stat.icons}
                  </span>
                  <h4>{stat.number}</h4>
                  <p>const {stat.label.toLowerCase().replace(' ', '_')} = {stat.number};</p>
                </div>
              ))}
            </div>

            <div className="cta-group">
              <a href="#contact" className="btn primary-btn">
                Let's Talk
              </a>
              <a href="/resume.pdf" className="btn secondary-btn">
                Download CV
                <span className="btn-icon">⤓</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
