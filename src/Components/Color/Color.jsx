import "./Color.css";
import { useState, useEffect } from "react";
import ColorForm from "../ColorForm/ColorForm";
import CopyToClipboard from "../CopyToClipboard/CopyToClipboard";
import styled from "styled-components";
import ColorCheck from "../ColorCheck/ColorCheck";

const StyledColorCardHeadline = styled.h3`
  margin: 0;
  & > button {
    font-weight: normal;
  }
`;

export default function Color({
  color,
  //hex,
  //contrastText,
  onDeleteColor,
  onUpdateColor,
  score,
}) {
  console.log("COLOR:", color);

  const [confirmDelete, setConfirmDelete] = useState(false);
  const [chooseEdit, setChooseEdit] = useState(false);
  const [copyStatus, setCopyStatus] = useState("COPY");

  // Use useEffect to handle the timeout for resetting the copy status
  useEffect(() => {
    let timer;
    if (copyStatus === "Successfully copied!") {
      timer = setTimeout(() => setCopyStatus("COPY"), 3000); // Setzt den Text nach 3 Sekunden zurück
    }
    return () => clearTimeout(timer); // Cleanup the timer if component unmounts or status changes
  }, [copyStatus]);

  const handleCopy = async () => {
    const success = await CopyToClipboard(color.hex);
    if (success) {
      setCopyStatus("Successfully copied!");
      console.log("Hex-Code successfully copied to clipboard.", success);
    } else {
      setCopyStatus("Failed to copy Hex-Code to clipboard!", success);
    }
  };

  return (
    <div
      className="color-card"
      style={{
        background: color.hex,
        color: color.contrastText,
      }}>
      <StyledColorCardHeadline className="color-card-headline">
        {color.hex}
        <button
          onClick={handleCopy}
          style={{ marginLeft: "5px" }} // 5px Abstand hinzufügen
        >
          {copyStatus}
        </button>
      </StyledColorCardHeadline>
      <h4>{color.role}</h4>
      <p>contrast: {color.contrastText}</p>
      <ColorCheck color={color} />
      {/* <a className="contrastScore">Overall Contrast Score: {score}</a> */}

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
                colorFieldData={{
                  role: color.role,
                  hex: color.hex,
                  contrastText: color.contrastText,
                }}
                buttonText="UPDATE COLOR"
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
