import React from "react";
import SlideMenu from "./components/SlideMenu";
import "./index.css";

const App = () => {
  return (
    <div className="app">
      <SlideMenu />
      <div className="content">
        <section id="home">
          <h2>Home Section</h2>
        </section>
        <section id="about">
          <h2>About Section</h2>
        </section>
        <section id="services">
          <h2>Services Section</h2>
        </section>
        <section id="contact">
          <h2>Contact Section</h2>
        </section>
      </div>
    </div>
  );
};

export default App;
