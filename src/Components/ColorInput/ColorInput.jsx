import { useState } from "react";
export default function ColorInput({ id, name, defaultValue }) {
  const [inputValue, setInputValue] = useState(defaultValue);

  function handleInputValue(event) {
    setInputValue(event.target.value);
  }
  return (
    <>
      <input
        type="text"
        id={id}
        name={name}
        value={inputValue}
        onChange={handleInputValue}
      />
      <input type="color" value={inputValue} onChange={handleInputValue} />
    </>
  );
}
