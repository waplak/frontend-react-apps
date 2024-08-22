import { useState } from "react";
import { EXAMPLES } from "../data.js";
import TabButton from "./TabButton/TabButton";

export default function Examples() {
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
      {tabContent}
    </section>
  );
}
