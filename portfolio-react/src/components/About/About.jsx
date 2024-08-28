import profileImage from "../../assets/images/profile-image.jpg";
import "../About/About.css";
export default function About() {
  return (
    <section className="about-section">
      <h2>Who Is Pamitha?</h2>
      <div className="about-container">
        <div className="image-container">
          <img
            src={profileImage}
            alt="Annie's Picture"
            className="profile-image"
          />
        </div>
        <div className="content-container">
          <h3>
            A Results-Oriented Software Engineer with a Passion for Scalable
            Solutions.
          </h3>
          <p>
            I am a passion-driven Software Engineer with 8+ years of experience
            in Java development. I specialize in designing and deploying
            scalable software solutions, leveraging Java, Spring, React.js, ADF,
            and more to create impactful digital products.
          </p>
          <p>
            With a Bachelor's degree in Computer Science from{" "}
            <a
              href="https://ucsc.cmb.ac.lk"
              target="_blank"
              rel="noopener noreferrer"
            >
              University of Colombo School of Computing(UCSC)
            </a>{" "}
            and an{" "}
            <a
              href="https://www.credly.com/badges/35075bd4-4d19-4d33-ac84-d6e2cab1e510/public_url"
              target="_blank"
              rel="noopener noreferrer"
            >
              AWS Certified Solutions Architect Associate
            </a>{" "}
            , I focus on optimizing distributed systems and implementing clean,
            reliable code. My expertise spans the full Software Development Life
            Cycle (SDLC), Agile methodologies, and Microservice Architecture,
            with hands-on experience in unit testing, data analysis, and cloud
            solutions.
          </p>
          <p>
            Currently, I’m dedicated to creating robust software solutions.
            Although I'm not available for freelance work, feel free to
            connect—I'm always open to discussing technology and solving
            challenging problems.
          </p>
          <a href="mailto:contact@example.com" className="contact-link">
            Get In Touch!
          </a>
        </div>
      </div>
    </section>
  );
}
