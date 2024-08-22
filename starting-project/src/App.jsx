import { useState } from "react";
import Header from "./components/Header/Header.jsx";
import CoreConcept from "./components/CoreConcept/CoreConcept.jsx";
import { CORE_CONCEPTS } from "./data.js";
import TabButton from "./components/TabButton/TabButton.jsx";
import { EXAMPLES } from "./data.js";

function App() {
  const [selectedButton, setSelectedButton] = useState();
  function HandleSelect(selectedButton) {
    setSelectedButton(selectedButton);
  }
  let tabContent = <p>Please select a topic!</p>;
  if (selectedButton) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedButton].title}</h3>
        <p>{EXAMPLES[selectedButton].description}</p>
        <pre>
          <code>{EXAMPLES[selectedButton].code}</code>
        </pre>
      </div>
    );
  }

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((concept) => (
              <CoreConcept key={concept.title} {...concept} />
            ))}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton
              isSelected={selectedButton === "components"}
              onSelect={() => HandleSelect("components")}
            >
              Component
            </TabButton>
            <TabButton
              isSelected={selectedButton === "jsx"}
              onSelect={() => HandleSelect("jsx")}
            >
              JAX
            </TabButton>
            <TabButton
              isSelected={selectedButton === "props"}
              onSelect={() => HandleSelect("props")}
            >
              Props
            </TabButton>
            <TabButton
              isSelected={selectedButton === "state"}
              onSelect={() => HandleSelect("state")}
            >
              State
            </TabButton>
          </menu>
        </section>
        {tabContent}
      </main>
    </div>
  );
}

export default App;
