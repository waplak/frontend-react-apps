import "./About.css";
import { ABOUT_ME } from "../../data/data";
export default function About() {
  return (
    <section className="about-section">
      <div className="header-section">
        <h1 className="section-title">About Me</h1>
      </div>
      <div className="about-container">
        <div className="image-container">
          <img
            src={ABOUT_ME.profileImage}
            alt="Profile Picture"
            className="profile-image"
          />
        </div>
        <div className="content-container">
          <h3>{ABOUT_ME.descriptionTitle}</h3>
          {ABOUT_ME.description.map((paragraph, index) => (
            <p key={index} dangerouslySetInnerHTML={{ __html: paragraph }} />
          ))}
          <p>
            Feel free to contact me at{" "}
            <a
              href={`mailto:${ABOUT_ME.contactEmail}`}
              className="contact-link"
            >
              {ABOUT_ME.contactEmail}
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
