import React, { useState, useRef } from "react";
import "./index.css";
import Header from "./components/Header/Header";
import HomePage from "./components/HomePage/HomePage";
import About from "./components/About/About";
import Experience from "./components/Experience/Experience";
import Skills from "./components/Skills/Skills";
import Certifications from "./components/Certifications/Certifications";

function App() {
  const [activeMenuItem, setActiveMenuItem] = useState("");
  const aboutRef = useRef(null);
  const experienceRef = useRef(null);
  const projectsRef = useRef(null);
  const skillsRef = useRef(null);
  const certificationsRef = useRef(null);
  const educationRef = useRef(null);
  const contactRef = useRef(null);
  const resumeRef = useRef(null);

  const handleNavigate = (section) => {
    const targetSection = window.document.getElementById(section);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" });
      setActiveMenuItem(section);
    }
  };

  return (
    <div>
      <Header onNavigate={handleNavigate} activeMenuItem={activeMenuItem} />
      <HomePage />
      <section ref={aboutRef} id="about">
        <About />
      </section>
      <section ref={experienceRef} id="experience">
        <Experience />
      </section>
      <section ref={skillsRef} id="skills">
        <Skills />
      </section>
      <section ref={certificationsRef} id="certifications">
        <Certifications />
      </section>
    </div>
  );
}

export default App;
