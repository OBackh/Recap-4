import "./Color.css";
import { useState } from "react";
import ColorForm from "../ColorForm/ColorForm";

export default function Color({ color, onDeleteColor, onUpdateColor }) {
  const [confirmDelete, setConfirmDelete] = useState(false);
  const [chooseEdit, setChooseEdit] = useState(false);

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
        <>
          {chooseEdit ? (
            <>
              <ColorForm
                onSubmitColor={(updatedColor) => {
                  onUpdateColor(color.id, updatedColor);
                  setChooseEdit(false);
                }}
                changeButtonText="1"
                colorFieldData={{
                  role: color.role,
                  hex: color.hex,
                  contrastText: color.contrastText,
                }}
                setChooseEdit={setChooseEdit}
              />
            </>
          ) : (
            <>
              <button onClick={() => setConfirmDelete(true)}>DELETE</button>
              <button onClick={() => setChooseEdit(true)}>EDIT</button>
            </>
          )}
        </>
      )}
    </div>
  );
}
