import { CERTIFICATIONS } from "../../data/data"; // Import your certifications data
import "./Certifications.css";

export default function Certifications() {
  return (
    <section className="certifications-section">
      <div className="header-section">
        <h1 className="section-title">Certifications</h1>
      </div>
      <div className="certifications-list">
        {CERTIFICATIONS.map((certification, index) => (
          <div key={index} className="certification-card">
            <div className="certification-header">
              <img
                src={certification.organizationLogo}
                alt={`${certification.organization} logo`}
                className="org-image"
              />
              <h2>{certification.name}</h2>
              <a
                href={certification.viewLink}
                target="_blank"
                rel="noopener noreferrer"
                className="view-button"
              >
                <i className="fas fa-eye"></i>
              </a>
            </div>
            <p className="organization">{certification.organization}</p>
            <div className="issue-expiry">
              <span className="issue-date">
                Issued: {certification.issueDate}
              </span>
              <span className="expiration-date">
                {" "}
                | Expires: {certification.expirationDate}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
