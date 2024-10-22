import "./SkillsCard.css";

export default function SkillsCard({ name, icon }) {
  return (
    <div className="skills-card">
      <i className={`${icon} skill-icon`}></i>
      <p>{name}</p>
    </div>
  );
}
