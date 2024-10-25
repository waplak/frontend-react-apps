import "./HomePage.css";
import { PROFILE } from "../../data/data";

export default function HomePage({ onNavigate }) {
  return (
    <section className="home-section">
      <div className="content">
        <p className="intro">Hi, my name is</p>
        <h1 className="name">{PROFILE.name}.</h1>
        <h2 className="subtitle">{PROFILE.subtitle}.</h2>
        <p className="description">{PROFILE.description}</p>
        <button
          className="contact-btn"
          onClick={() => onNavigate("contact")} // Navigate to the contact section
        >
          Get In Touch
        </button>
      </div>
      <div className="social-links">
        {/* Add your social media icons and links here */}
      </div>
    </section>
  );
}
