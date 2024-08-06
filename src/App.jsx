import { initialColors } from "./lib/colors";
import Color from "./Components/Color/Color";
import "./App.css";
import ColorForm from "./Components/ColorForm/ColorForm";
import { useState } from "react";

function App() {
  const [colors, setColors] = useState(initialColors);
  console.log("Submit wurde ausgeführt:", colors);

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
      <ColorForm onSubmitColor={handleColorSubmit} />
      {colors.length > 0 ? (
        colors.map((color) => {
          return (
            <Color
              key={color.id}
              color={color}
              onDeleteColor={handleDeleteColor}
              onUpdateColor={handleUpdateColor}
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
