import "./Skills.css";
import SkillsCard from "./SkillsCard/SkillsCard";
export default function Skills() {
  return (
    <section className="skills-section">
      <div className="header-section">
        <h1 className="section-title">Skills</h1>
      </div>
      <SkillsCard />
    </section>
  );
}
