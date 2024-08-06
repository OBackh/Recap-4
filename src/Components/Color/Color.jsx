import "./Color.css";
import { useState } from "react";

export default function Color({ color, onDeleteColor }) {
  const [confirmDelete, setConfirmDelete] = useState(false);

  return (
    <div
      className="color-card"
      style={{
        background: color.hex,
        color: color.contrastText,
      }}>
      <h3 className="color-card-headline">{color.hex}</h3>
      <h4>{color.role}</h4>
      <p>contrast: {color.contrastText}</p>
      {confirmDelete ? (
        <>
          <span className="color-card-highlight">Wirklich löschen?</span>
          <button onClick={() => setConfirmDelete(false)}>Cancel</button>
          <button onClick={() => onDeleteColor(color.id)}>DELETE</button>
        </>
      ) : (
        <button onClick={() => setConfirmDelete(true)}>DELETE</button>
      )}
    </div>
  );
}
