import React from 'react';
import './project.css';

const Projects = () => {
  
  const projects = [
    {
      title: 'Project 1',
      description: 'Description of project 1',
      technologies: ['React', 'Node.js', 'MongoDB'],
      githubLink: 'https://github.com/yourusername/project1',
      liveDemo: 'https://project1-demo.com',
      stats: {
        stars: 25,
        forks: 12
      }
    },
    {
      title: 'Project 1',
      description: 'Description of project 1',
      technologies: ['React', 'Node.js', 'MongoDB'],
      githubLink: 'https://github.com/yourusername/project1',
      liveDemo: 'https://project1-demo.com',
      stats: {
        stars: 25,
        forks: 12
      }
    },
    {
      title: 'Project 1',
      description: 'Description of project 1',
      technologies: ['React', 'Node.js', 'MongoDB'],
      githubLink: 'https://github.com/yourusername/project1',
      liveDemo: 'https://project1-demo.com',
      stats: {
        stars: 25,
        forks: 12
      }
    },
    {
      title: 'Project 1',
      description: 'Description of project 1',
      technologies: ['React', 'Node.js', 'MongoDB'],
      githubLink: 'https://github.com/yourusername/project1',
      liveDemo: 'https://project1-demo.com',
      stats: {
        stars: 25,
        forks: 12
      }
    },
    {
      title: 'Project 1',
      description: 'Description of project 1',
      technologies: ['React', 'Node.js', 'MongoDB'],
      githubLink: 'https://github.com/yourusername/project1',
      liveDemo: 'https://project1-demo.com',
      stats: {
        stars: 25,
        forks: 12
      }
    },
    {
      title: 'Project 1',
      description: 'Description of project 1',
      technologies: ['React', 'Node.js', 'MongoDB'],
      githubLink: 'https://github.com/yourusername/project1',
      liveDemo: 'https://project1-demo.com',
      stats: {
        stars: 25,
        forks: 12
      }
    },
    // Add more projects as needed
  ];

  return (
    <section className="projects" data-aos="fade-up" data-aos-delay="100">
      <div className="terminal-header">
        <div className="terminal-buttons">
          <span className="terminal-button close"></span>
          <span className="terminal-button minimize"></span>
          <span className="terminal-button maximize"></span>
        </div>
        <div className="terminal-title">~/projects</div>
      </div>
      
      <div className="terminal-body">
        <div className="command-line">
          <span className="prompt">$</span>
          <span className="command">ls -la projects/</span>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="project-card"
              data-aos="fade-up"
              data-aos-delay={100 * (index + 1)}
            >
              <h3 className="project-title">{project.title}</h3>
              <p>{project.description}</p>
              
              <div className="tech-stack">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="project-links">
                <a 
                  href={project.githubLink} 
                  className="project-link"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  &lt;GitHub /&gt;
                </a>
                {project.liveDemo && (
                  <a 
                    href={project.liveDemo} 
                    className="project-link"
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    &lt;Live Demo /&gt;
                  </a>
                )}
              </div>
              
              {project.stats && (
                <div className="project-stats">
                  <div className="stat-item">
                    <svg className="stat-icon" viewBox="0 0 16 16">
                      <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.75.75 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25z" />
                    </svg>
                    <span className="stat-count">{project.stats.stars}</span>
                  </div>
                  <div className="stat-item">
                    <svg className="stat-icon" viewBox="0 0 16 16">
                      <path d="M5 5.372v.878c0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75v-.878a2.25 2.25 0 1 1 1.5 0v.878a2.25 2.25 0 0 1-2.25 2.25h-1.5v2.128a2.251 2.251 0 1 1-1.5 0V8.5h-1.5A2.25 2.25 0 0 1 3.5 6.25v-.878a2.25 2.25 0 1 1 1.5 0ZM5 3.25a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Zm6.75.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm-3 8.75a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Z" />
                    </svg>
                    <span className="stat-count">{project.stats.forks}</span>
                  </div>
                </div>
              )}
              
            </div>
          ))}
        </div>

        <div className="terminal-decoration">
          <div className="matrix-rain"></div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
