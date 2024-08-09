import { useEffect, useState } from "react";

export default function ColorCheck({ color }) {
  const [score, setScore] = useState("Still checking...");

  console.log(
    "Start with hex:",
    color.hex,
    "and ContrastText:",
    color.contrastText
  );
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        "https://www.aremycolorsaccessible.com/api/are-they",
        {
          mode: "cors",
          method: "POST",
          body: JSON.stringify({ colors: [color.hex, color.contrastText] }),
        }
      );
      const result = await response.json();
      console.log("PPPP", result);
      setScore(result.overall);
    }

    fetchData();
  }, [color]);

  return (
    <div>
      <p
        style={{
          backgroundColor:
            score === "Yup" ? "green" : score === "Nope" ? "red" : "orange", // Dieser Fall tritt ein, wenn der Score "Kinda" ist
          color: "black", // Schriftfarbe immer schwarz
          display: "inline-block", // Passt die Breite des p-Tags an die Textlänge an
          padding: "5px", // Optional: etwas Padding für eine bessere Darstellung
        }}>
        The current score is: {score}
      </p>
    </div>
  );
}

/* const result = await response.json();
  console.log("HEX:", hex);
    console.log("Contrast Text:", contrastText);
    console.log("Small:", result.small);
    console.log("Bold:", result.bold);
    console.log("Large:", result.large);
    console.log("Contrast:", result.contrast);
  console.log("Result: ", result);
  setScore(result.Overall);
  return result.Overall; */
