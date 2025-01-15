import React, { useState, useEffect, useMemo } from 'react';
import './skills.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faServer, faTools } from '@fortawesome/free-solid-svg-icons';

const Skills = () => {
  const [visibleSkills, setVisibleSkills] = useState([]);
  
  const skillsData = useMemo(() => ({
    'Frontend Development': {
      icon: faCode,
      skills: [
        { name: 'HTML5/CSS3', level: 90, color: '#e34c26' },
        { name: 'JavaScript (ES6+)', level: 85, color: '#f7df1e' },
        { name: 'React.js', level: 80, color: '#61dafb' },
        { name: 'TypeScript', level: 75, color: '#007acc' },
      ]
    },
    'Backend Development': {
      icon: faServer,
      skills: [
        { name: 'Node.js', level: 75, color: '#68a063' },
        { name: 'REST APIs', level: 75, color: '#4ca1af' },
        { name: 'SQL/NoSQL', level: 70, color: '#336791' },
      ]
    },
    'Developer Tools': {
      icon: faTools,
      skills: [
        { name: 'Git/GitHub', level: 80, color: '#f05032' },
        { name: 'Docker', level: 65, color: '#2496ed' },
        { name: 'VS Code', level: 85, color: '#007acc' },
      ]
    }
  }), []);

  useEffect(() => {
    const timer = setTimeout(() => {
      const allSkills = Object.values(skillsData)
        .flatMap(category => category.skills);
      setVisibleSkills(allSkills);
    }, 500);

    return () => clearTimeout(timer);
  }, [skillsData]);  // Added skillsData to dependency array

  return (
    <div className="skills-container" data-aos="fade-up">
      <div className="terminal-header-skills">
        <div className="terminal-buttons-skills">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="terminal-title-skills">skills.tsx</div>
      </div>
      
      <div className="skills-content">
        <div className="line-numbers">
          {[...Array(30)].map((_, i) => (
            <div key={i}>{(i + 1).toString().padStart(2, '0')}</div>
          ))}
        </div>
        
        <div className="skills-main">
          {Object.entries(skillsData).map(([category, { icon, skills }]) => (
            <div key={category} className="skill-category">
              <h3>
                <FontAwesomeIcon icon={icon} />
                <span className="typing-effect">{category}</span>
              </h3>
              <div className="skills-grid">
                {skills.map((skill, index) => (
                  <div 
                    key={index} 
                    className="skill-item"
                    style={{
                      animationDelay: `${index * 100}ms`,
                      borderColor: visibleSkills.includes(skill) ? skill.color : 'transparent'
                    }}
                  >
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      <div className="skill-bar">
                        <div 
                          className="skill-progress"
                          style={{ 
                            width: `${skill.level}%`,
                            background: `linear-gradient(90deg, ${skill.color}, ${skill.color}bb)`
                          }}
                        ></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
