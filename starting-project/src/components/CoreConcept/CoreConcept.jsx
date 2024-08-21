import "./CoreConcept.css";

function CoreConcept({ image, title, description }) {
  return (
    <li>
      <img src={image} alt={title}></img>
      <h2>{title}</h2>
      <p>{description}</p>
    </li>
  );
}

export default CoreConcept;
