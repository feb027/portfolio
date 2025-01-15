import React, { useEffect, useState } from 'react';
import './contact.css';

const Contact = () => {
  const [displayText, setDisplayText] = useState('');
  const [copied, setCopied] = useState(false);
  const fullText = '> Contact.init()';
  const email = "febnawanrochman2@gmail.com";

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

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <div className="contact">
      <h2>
        {displayText}
        <span className="cursor"/>
      </h2>
      <div className="contact-info">
        <div className="terminal-header-contact">
          <div className="terminal-button-contact button-red"></div>
          <div className="terminal-button-contact button-yellow"></div>
          <div className="terminal-button-contact button-green"></div>
        </div>
        <p onClick={handleCopyEmail} style={{ cursor: 'pointer' }}>
          const email = "{email}"; {copied && <span style={{color: '#27c93f'}}> // Copied! ✓</span>}
        </p>
        <p>const location = "Tasikmalaya";</p>
        <p>const available = true;</p>
        <div className="social-links">
          <a 
            href="https://github.com/yourusername" 
            target="_blank" 
            rel="noopener noreferrer"
            onMouseEnter={e => e.target.textContent = 'Connecting...'}
            onMouseLeave={e => e.target.textContent = 'github/connect'}
          >
            github/connect
          </a>
          <a 
            href="https://linkedin.com/in/yourusername" 
            target="_blank" 
            rel="noopener noreferrer"
            onMouseEnter={e => e.target.textContent = 'Connecting...'}
            onMouseLeave={e => e.target.textContent = 'linkedin/connect'}
          >
            linkedin/connect
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
