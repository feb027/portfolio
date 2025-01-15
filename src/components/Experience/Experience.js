import React, { useState, useRef } from 'react';
import './Experience.css';

const Experience = () => {
  const [activeTab, setActiveTab] = useState(0);
  const tabsRef = useRef(null);

  const experiences = [
    {
      company: "Company Name",
      title: "Software Developer",
      period: "2023 - Present",
      duties: [
        "Developed and maintained web applications using React.js",
        "Implemented responsive design principles",
        "Collaborated with cross-functional teams"
      ],
      technologies: ["React", "Node.js", "TypeScript"]
    },
    {
      company: "Company Name",
      title: "Software Developer",
      period: "2023 - Present",
      duties: [
        "Developed and maintained web applications using React.js",
        "Implemented responsive design principles",
        "Collaborated with cross-functional teams"
      ],
      technologies: ["React", "Node.js", "TypeScript"]
    },
    {
      company: "Another Company",
      title: "Web Developer Intern",
      period: "2022 - 2023",
      duties: [
        "Built responsive user interfaces",
        "Optimized application performance",
        "Worked with REST APIs"
      ],
      technologies: ["JavaScript", "HTML/CSS", "Git"]
    }
  ];

  const scrollToTab = (idx) => {
    const tabElement = tabsRef.current.children[idx];
    if (tabElement) {
      const scrollLeft = tabElement.offsetLeft - (tabsRef.current.clientWidth - tabElement.clientWidth) / 2;
      tabsRef.current.scrollTo({ left: scrollLeft, behavior: 'smooth' });
    }
  };

  const handleTabClick = (idx) => {
    setActiveTab(idx);
    scrollToTab(idx);
  };

  return (
    <div className="experience-container" data-aos="fade-up">
      <h2 className="section-title">
        <span className="hash">#</span>experience
        <span className="brace"> {`{`}</span>
      </h2>

      <div className="experience-content">
        <div className="company-tabs" ref={tabsRef}>
          {experiences.map((exp, idx) => (
            <button
              key={idx}
              className={`tab-button ${activeTab === idx ? 'active' : ''}`}
              onClick={() => handleTabClick(idx)}
            >
              <span className="const">const</span> {exp.company}
            </button>
          ))}
        </div>

        <div className="experience-details">
          <div className="code-block">
            <div className="line">
              <span className="keyword">const</span> role = <span className="string">"{experiences[activeTab].title}"</span>;
            </div>
            <div className="line">
              <span className="keyword">const</span> period = <span className="string">"{experiences[activeTab].period}"</span>;
            </div>
            <div className="line">
              <span className="keyword">const</span> responsibilities = {`[`}
            </div>
            {experiences[activeTab].duties.map((duty, idx) => (
              <div key={idx} className="line indent">
                <span className="string">"{duty}"</span>{idx !== experiences[activeTab].duties.length - 1 ? ',' : ''}
              </div>
            ))}
            <div className="line">{`];`}</div>
            <div className="line">
              <span className="keyword">const</span> tech = {`[`}
              {experiences[activeTab].technologies.map((tech, idx) => (
                <span key={idx} className="tech-tag">
                  {tech}{idx !== experiences[activeTab].technologies.length - 1 ? ', ' : ''}
                </span>
              ))}
              {`];`}
            </div>
          </div>
        </div>
      </div>

      <div className="section-end">
        <span className="brace">{`}`}</span>
      </div>
    </div>
  );
};

export default Experience;
