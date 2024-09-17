import "./Nav.css";
import { MENU_ITEMS } from "../../data/data.js";
export default function Nav({ onNavigate, activeMenuItem }) {
  const handleItemClick = (menuItem) => {
    onNavigate(menuItem);
  };
  return (
    <nav>
      <ul>
        {MENU_ITEMS.map((item) => (
          <li key={item.section}>
            <a
              className={
                activeMenuItem === item.section ? "nav-link-active" : ""
              }
              onClick={() => handleItemClick(item.section)}
            >
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
