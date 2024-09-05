import React, { useState } from "react";
import "./Nav.css";
export default function Nav({ onNavigate }) {
  const [activeMenuItem, setActiveMenuItem] = useState("");
  const handleItemClick = (menuItem) => {
    setActiveMenuItem(menuItem);
    onNavigate(menuItem);
  };
  return (
    <nav>
      <ul>
        <li>
          <a
            className={activeMenuItem === "about" ? "nav-link-active" : ""}
            onClick={() => handleItemClick("about")}
          >
            About
          </a>
        </li>
        <li>
          <a
            className={activeMenuItem === "experience" ? "nav-link-active" : ""}
            onClick={() => handleItemClick("experience")}
          >
            Experience
          </a>
        </li>
        <li>
          <a onClick={() => onNavigate("projects")}>Projects</a>
        </li>
        <li>
          <a onClick={() => onNavigate("skills")}>Skills</a>
        </li>
        <li>
          <a onClick={() => onNavigate("certifications")}>Certifications</a>
        </li>
        <li>
          <a onClick={() => onNavigate("education")}>Education</a>
        </li>
        <li>
          <a onClick={() => onNavigate("contact")}>Contact</a>
        </li>
        <li>
          <a onClick={() => onNavigate("resume")}>Resume</a>
        </li>
      </ul>
    </nav>
  );
}
