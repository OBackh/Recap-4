import { initialColors } from "./lib/colors";
import Color from "./Components/Color/Color";
import "./App.css";
import ColorForm from "./Components/ColorForm/ColorForm";
//import { useState } from "react";
//import { useEffect } from "react";
import useLocalStorageState from "use-local-storage-state";

function App() {
  const [score, setScore] = useLocalStorageState("score", {
    defaultvalue: "Still checking...",
  });

  const [colors, setColors] = useLocalStorageState("Colors", {
    defaultValue: initialColors,
  });
  console.log("Aktuelle Farben im localStorage:", colors);

  function handleColorSubmit(newColor) {
    setColors((prevColors) => [newColor, ...prevColors]);
  }

  function handleDeleteColor(id) {
    setColors((prevColors) => prevColors.filter((color) => color.id !== id));
  }

  function handleUpdateColor(id, updatedColorData) {
    setColors((prevColors) =>
      prevColors.map((color) =>
        color.id === id ? { ...color, ...updatedColorData } : color
      )
    );
  }

  return (
    <>
      <h1>Theme Creator</h1>
      <ColorForm
        onSubmitColor={handleColorSubmit}
        chooseEdit={false}
        buttonText="ADD COLOR"
        setScore={setScore}
        score
      />
      {colors.length > 0 ? (
        colors.map((color) => {
          return (
            <Color
              key={color.id}
              color={color}
              hex={color.hex}
              contrastText={color.contrastText}
              onDeleteColor={handleDeleteColor}
              onUpdateColor={handleUpdateColor}
              //onCopySuccess={() => setConfirmCopy("Successfully copied!")}
              score={score}
              setScore={setScore}
            />
          );
        })
      ) : (
        <p className="warning">
          Keine Farben vorhanden. Bitte erstellen Sie neue Farben.
        </p>
      )}
    </>
  );
}

export default App;
