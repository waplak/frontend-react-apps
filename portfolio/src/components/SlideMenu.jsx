import React, { useState, useEffect } from "react";
import MenuItem from "./MenuItem";
import { data } from "../data/data";

function SlideMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  const [isScreenSmall, setIsScreenSmall] = useState(false); // To track if the screen is small or not
  const [activeSection, setActiveSection] = useState(data.menuItems[0].section);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMenuItemClick = (section) => {
    setActiveSection(section);
  };

  const handleResize = () => {
    if (window.innerWidth <= 768) {
      setIsScreenSmall(true);
      setIsMenuOpen(false); // Hide menu initially when screen is small
    } else {
      setIsScreenSmall(false);
      setIsMenuOpen(true); // Show menu when screen is large
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize(); // Initial check

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      <div className="header">
        <div
          className="name-designation"
          style={{ display: isScreenSmall && !isMenuOpen ? "block" : "none" }}
        >
          <h2>{data.name}</h2>
          <p>{data.designation}</p>
        </div>
        <button
          className="toggle-button"
          onClick={toggleMenu}
          style={{ display: isScreenSmall ? "block" : "none" }}
        >
          ☰
        </button>
      </div>
      <div className={`slide-menu ${isMenuOpen ? "open" : "closed"}`}>
        <div
          className="name-designation"
          style={{ display: isScreenSmall ? "none" : "block" }}
        >
          <h2>{data.name}</h2>
          <p>{data.designation}</p>
        </div>
        <ul className="menu-list">
          {data.menuItems.map((item) => (
            <MenuItem
              key={item.id}
              label={item.label}
              section={item.section}
              isActive={activeSection === item.section}
              onClick={handleMenuItemClick}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default SlideMenu;
