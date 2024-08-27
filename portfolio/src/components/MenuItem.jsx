import React from "react";

const MenuItem = ({ label, section, isActive, onClick }) => {
  return (
    <li className={isActive ? "active" : ""} onClick={() => onClick(section)}>
      <a href={section}>{label}</a>
    </li>
  );
};

export default MenuItem;
