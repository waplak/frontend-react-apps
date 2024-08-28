import React from "react";
import "./index.css";
import Header from "./components/Header/Header";
import HomePage from "./components/HomePage/HomePage";
import About from "./components/About/About";

function App() {
  return (
    <div>
      <Header />
      <HomePage />
      <About />
    </div>
  );
}

export default App;
