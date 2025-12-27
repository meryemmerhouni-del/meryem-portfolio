import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/ExperienceAndProjects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Extracurricular from './components/Extracurricular'; // Added import

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Projects />
      <Skills />
      <Extracurricular /> {/* Added Extracurricular section */}
      <Contact />
      <Footer />
    </div>
  );
}

export default App;