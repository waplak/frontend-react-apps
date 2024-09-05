import "../ExperienceCard/ExperienceCard.css";
export default function ExperienceCard({ experience }) {
  return (
    <div className="card">
      <div className="card-content">
        <div className="card-header">
          <div className="col s12 m2">
            <a
              href={experience.websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                alt="Lightspeed logo"
                src={experience.companyLogo}
                className="responsive-img center-block"
              />
            </a>
          </div>
          <div className="col s12 m10">
            <p>
              <span className="card-title">
                <a
                  href={experience.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="teal-text hoverline"
                >
                  {experience.companyName}
                </a>
              </span>
            </p>
          </div>
        </div>
        <div className="role">{experience.role}</div>
        <div className="companey-details">
          <p>
            <em className="companey-description">
              {experience.companyDescription}
            </em>
          </p>
          <ul>
            {experience.responsibilities.map((resp) => (
              <li className="responsibility">{resp}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="card-action">
        <span>{experience.timePeriod}</span>
      </div>
    </div>
  );
}
