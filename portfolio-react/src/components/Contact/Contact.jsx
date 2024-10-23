import { CONTACT } from "../../data/data"; // Import your contact data
import "./Contact.css";

export default function Contacts() {
  return (
    <section className="contacts-section">
      <div className="header-section">
        <h1 className="section-title">Contact Me</h1>
      </div>
      <div className="contact-card">
        <div className="contact-item">
          <a
            href={`mailto:${CONTACT.email}`}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            <i className={CONTACT.icons.email}></i>
            <span>{CONTACT.email}</span>
          </a>
        </div>
        <div className="contact-item">
          <a
            href={CONTACT.github}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            <i className={CONTACT.icons.github}></i>
            <span>GitHub</span>
          </a>
        </div>
        <div className="contact-item">
          <a
            href={CONTACT.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            <i className={CONTACT.icons.linkedin}></i>
            <span>LinkedIn</span>
          </a>
        </div>
      </div>
    </section>
  );
}
