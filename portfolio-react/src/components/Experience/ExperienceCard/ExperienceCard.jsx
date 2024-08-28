import "../ExperienceCard/ExperienceCard.css";
import loldigitalLogo from "../../../assets/images/101digital-logo.png";
export default function ExperienceCard() {
  return (
    <div className="card">
      <div className="card-header">
        <img src={loldigitalLogo} alt="Wespire Logo" className="logo" />
        <div className="header-text">
          <h2>WESPIRE</h2>
          <h3>QA Developer</h3>
        </div>
      </div>
      <div className="card-content">
        <p>
          SaaS platform that enables enterprise companies to build, run, and
          measure their positive impact campaigns
        </p>
        <ul>
          <li>Improved accuracy, coverage, and speed of automated tests</li>
          <li>
            Created an automated 'smoke test' using Ruby and the
            CrossBrowserTesting API
          </li>
          <li>
            Streamlined CLI and deployment, saving 10/hrs week and increasing
            releases 5x
          </li>
        </ul>
      </div>
      <div className="card-footer">
        <p>May 2015 - Dec 2015 | Boston, MA</p>
      </div>
    </div>
  );
}
