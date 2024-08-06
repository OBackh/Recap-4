import ColorInput from "../ColorInput/ColorInput";
import "./ColorForm.css";
import { uid } from "uid";

export default function ColorForm({
  onSubmitColor,
  initialData = { role: "some color", hex: "#00ff00", contrastText: "#ffffff" },
  colorFieldData,
  changeButtonText,
  setChooseEdit,
}) {
  const data = colorFieldData || initialData;
  const id = uid();

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());
    const dataWithId = { id, ...data };
    onSubmitColor(dataWithId);
  }

  return (
    <>
      <form className="colorForm" onSubmit={handleSubmit}>
        <fieldset className="colorPicker">
          <legend className="legend">Adjust Theme-Color</legend>
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
          </div>
          {changeButtonText ? (
            <div className="editForm">
              <p>
                <br />
                <button type="button" onClick={() => setChooseEdit(false)}>
                  CANCEL
                </button>
                &nbsp;
                <button type="submit">UPDATE COLOR</button>
              </p>
            </div>
          ) : (
            <>
              <button type="submit">ADD COLOR</button>
            </>
          )}
        </fieldset>
      </form>
    </>
  );
}
