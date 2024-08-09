import ColorInput from "../ColorInput/ColorInput";
import "./ColorForm.css";
import { uid } from "uid";

export default function ColorForm({
  onSubmitColor,
  initialData = { role: "some color", hex: "#00ff00", contrastText: "#ffffff" },
  colorFieldData,
  chooseEdit,
  setChooseEdit,
  buttonText,
  // setScore,
}) {
  const data = colorFieldData || initialData;
  const id = uid();

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());
    const dataWithId = { id, ...data };
    // const hex = data.hex;
    // const contrastText = data.contrastText;

    // Abrufen der aktuellen Farbwerte
    console.log(
      "Form submits: Hex=",
      data.hex,
      "and ContrastText=",
      data.contrastText
    );
    // Aufruf von ColorCheck mit den aktuellen Farbwerten
    // ColorCheck(hex, contrastText, setScore);

    onSubmitColor(dataWithId);
  }

  return (
    <>
      <form className="colorForm" onSubmit={handleSubmit}>
        <fieldset className="colorPicker">
          {chooseEdit ? (
            <legend className="legend">Adjust current Color</legend>
          ) : (
            <legend className="legend">Adjust new Color</legend>
          )}
          <div>
            <label htmlFor="role">Role</label>
            <br />
            <input type="text" id="role" name="role" defaultValue={data.role} />
          </div>
          <div>
            <label htmlFor="hex">Hex</label>
            <br />

            <ColorInput id="hex" name="hex" defaultValue={data.hex} />
          </div>
          <div>
            <label htmlFor="contrastText">Contrast Text</label>
            <br />
            <ColorInput
              id="contrastText"
              name="contrastText"
              defaultValue={data.contrastText}
            />
            <br />
            <br />
          </div>
          <div className="editForm">
            <button type="submit">{buttonText}</button>
            <button type="button" onClick={() => setChooseEdit(false)}>
              CANCEL
            </button>
          </div>
        </fieldset>
      </form>
    </>
  );
}
