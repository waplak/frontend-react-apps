import logoImage from "../assets/investment-calculator-logo.png";
export default function Header() {
  return (
    <header id="header">
      <img src={logoImage} alt="money bag logo" />
      <h1>React Investment Calculator</h1>
    </header>
  );
}
