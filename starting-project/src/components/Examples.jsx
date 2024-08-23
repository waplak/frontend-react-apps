import { useState } from "react";
import { EXAMPLES } from "../data.js";
import TabButton from "./TabButton/TabButton";
import Section from "./Section/Section.jsx";
import Tabs from "./Tabs.jsx";

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
    <Section title="Example" id="examples">
      <Tabs
        buttons={
          <>
            {Object.keys(EXAMPLES).map((key) => (
              <TabButton
                key={key}
                isSelected={selectedButton === key}
                onSelect={() => HandleSelect(key)}
              >
                {EXAMPLES[key].title}
              </TabButton>
            ))}
          </>
        }
      >
        {tabContent}
      </Tabs>
    </Section>
  );
}
