import React, { useRef } from "react";
import "./index.css";
import Header from "./components/Header/Header";
import HomePage from "./components/HomePage/HomePage";
import About from "./components/About/About";
import Experience from "./components/Experience/Experience";

function App() {
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
    }
  };
  return (
    <div>
      <Header onNavigate={handleNavigate} />
      <HomePage />
      <section ref={aboutRef} id="about">
        <About />
      </section>
      <section ref={experienceRef} id="experience">
        <Experience />
      </section>
    </div>
  );
}

export default App;
