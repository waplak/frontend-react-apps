import Nav from "../Nav/Nav";
import { PROFILE } from "../../data/data";
import "../Header/Header.css";
export default function Header({ onNavigate }) {
  return (
    <div className="header-container">
      <section>
        <header>
          <div>
            <h1>{PROFILE.name}</h1>
          </div>
          <div>
            <Nav onNavigate={onNavigate} />
          </div>
        </header>
      </section>
    </div>
  );
}
