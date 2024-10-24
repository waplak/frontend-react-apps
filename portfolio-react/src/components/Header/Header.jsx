import Nav from "../Nav/Nav";
import { PROFILE } from "../../data/data";
import "./Header.css";
export default function Header({ onNavigate, activeMenuItem }) {
  return (
    <div className="header-container">
      <section>
        <header
          style={{
            backgroundImage: `url(${PROFILE.headerImage})`,
          }}
        >
          <div>
            <h1>{PROFILE.name}</h1>
          </div>
          <div>
            <Nav onNavigate={onNavigate} activeMenuItem={activeMenuItem} />
          </div>
        </header>
      </section>
    </div>
  );
}
