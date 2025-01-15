import React, { useEffect } from 'react';
import { HashRouter } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from './components/Header/header';
import About from './components/About/About';
import Projects from './components/Projects/project';
import Skills from './components/Skills/skills';
import Contact from './components/Contact/contact';
import Footer from './components/Footer/Footer';
import Experience from './components/Experience/Experience';

function App() {
  useEffect(() => {
    // Add smooth scroll behavior to html
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Initialize AOS
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-in-out',
    });
  }, []);

  return (
    <HashRouter>
    <div className="App">
      <Header />
      <main>
        <section id="about">
          <About />
        </section>
        <section id="experience">
          <Experience />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
    </HashRouter>
  );
}

export default App;