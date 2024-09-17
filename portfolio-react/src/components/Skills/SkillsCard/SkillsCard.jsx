import { SKILLS } from "../../../data/data";
import "./SkillsCard.css";

export default function SkillsCard() {
  return (
    <div className="tech-section">
      <h2>Javascript</h2>
      <div className="icons-container">
        {SKILLS.map((item, index) => (
          <div className="icon" key={index}>
            <img src={item.imgSrc} alt={item.alt} />
            <p>{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
