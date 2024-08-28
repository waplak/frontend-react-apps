import Nav from "../Nav/Nav";
import { PROFILE } from "../../data/data";
import "../Header/Header.css";
export default function Header() {
  return (
    <div>
      <section>
        <header>
          <div>
            <h1>{PROFILE.name}</h1>
          </div>
          <div>
            <Nav />
          </div>
        </header>
      </section>
    </div>
  );
}
