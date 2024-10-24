import { PROJECTS } from "../../data/data"; // Import your projects data
import "./Project.css";

export default function Projects() {
  return (
    <section className="projects-section">
      <div className="header-section">
        <h1 className="section-title">Projects</h1>
      </div>
      <div className="projects-list">
        {PROJECTS.map((project, index) => (
          <div key={index} className="project-card">
            {project.image && (
              <img
                src={project.image}
                alt={`${project.title} screenshot`}
                className="project-image"
              />
            )}
            <h2 className="project-title">{project.title}</h2>
            <p className="project-description">{project.description}</p>
            <div className="technologies">
              {project.technologies.map((tech, techIndex) => (
                <span key={techIndex} className="tech-tag">
                  {tech}
                </span>
              ))}
            </div>
            <div className="project-links">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  <i className="fab fa-github"></i> GitHub
                </a>
              )}
              {/* Removed Live Demo Link */}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
