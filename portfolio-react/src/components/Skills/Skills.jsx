import { SKILLS } from "../../data/data";
import "./Skills.css";
import SkillsCard from "./SkillsCard/SkillsCard";
import "@fortawesome/fontawesome-free/css/all.min.css";
export default function Skills() {
  return (
    <section className="experience-section">
      <div className="header-section">
        <h1 className="section-title">Skills</h1>
      </div>
      {SKILLS.map((category, index) => (
        <div key={index} className="skill-category">
          <h2>{category.category}</h2>
          <div className="skills-cards">
            {category.skills.map((skill, skillIndex) => (
              <SkillsCard
                key={skillIndex}
                name={skill.name}
                icon={skill.icon}
              />
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
