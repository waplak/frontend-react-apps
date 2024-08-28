import "../Experience/Experience.css";
import ExperienceCard from "./ExperienceCard/ExperienceCard";
export default function Experience() {
  return (
    <section className="experience-section">
      <div className="header-section">
        <h1 className="section-title">Experience</h1>
      </div>
      <ExperienceCard />
    </section>
  );
}
