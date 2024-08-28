import "../ExperienceCard/ExperienceCard.css";
import loldigitalLogo from "../../../assets/images/101digital-logo.png";
export default function ExperienceCard() {
  return (
    <div className="card">
      <div className="card-content">
        <div className="row">
          <div className="col s12 m2">
            <a
              href="https://www.lightspeedhq.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                alt="Lightspeed logo"
                src={loldigitalLogo}
                className="responsive-img center-block"
              />
            </a>
          </div>
          <div className="col s12 m10">
            <p>
              <span className="card-title">
                <a
                  href="https://www.lightspeedhq.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="teal-text hoverline"
                >
                  Lightspeed
                </a>
              </span>
            </p>
          </div>
        </div>
        <div className="role brown-text">Principal Front-End Developer</div>
        <p>
          <em className="grey-text">
            The one-stop commerce platform for retail, hospitality, and golf
            merchants around the world.
          </em>
        </p>
        <ul>
          <li>
            Focusing on front-end development and integrating Upserve's
            best-in-class insights product into Lightspeed's flagship all-in-one
            cloud-based POS system.
          </li>
        </ul>
      </div>
      <div className="card-action">
        <span>Apr 2021 - Present | Providence, RI</span>
      </div>
    </div>
  );
}
