import "./Color.css";
import { useState } from "react";
import ColorForm from "../ColorForm/ColorForm";
import CopyToClipBoard from "../CopyToClipboard/CopyToClipboard";

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
      <h3 className="color-card-headline">
        {color.hex}
        <button onClick={() => CopyToClipboard(color.hex)}>COPY</button>
      </h3>
      <h4>{color.role}</h4>
      <p>contrast: {color.contrastText}</p>
      {confirmDelete ? (
        <div className="colorButtons">
          <span className="color-card-highlight">
            Sure to delete the current color?
          </span>
          <button className="no" onClick={() => setConfirmDelete(false)}>
            No
          </button>
          <button className="yes" onClick={() => onDeleteColor(color.id)}>
            Yes
          </button>
        </div>
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
                chooseEdit={chooseEdit}
                setChooseEdit={setChooseEdit}
              />
            </>
          ) : (
            <div className="colorFieldButtons">
              <button onClick={() => setChooseEdit(true)}>EDIT</button>
              <button onClick={() => setConfirmDelete(true)}>DELETE</button>
            </div>
          )}
        </>
      )}
    </div>
  );
}
