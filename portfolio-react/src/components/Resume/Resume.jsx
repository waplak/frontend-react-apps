import { RESUME } from "../../data/data";
import "./Resume.css";

export default function Resume() {
  return (
    <section className="resume-section">
      <div className="header-section">
        <h1 className="section-title">Resume</h1>
      </div>
      <div className="resume-card">
        <div className="resume-item">
          <a
            href={RESUME.link}
            target="_blank"
            rel="noopener noreferrer"
            className="resume-link"
          >
            <i className="fas fa-file-alt"></i>
            <span>View My Resume</span>
          </a>
        </div>
      </div>
    </section>
  );
}
