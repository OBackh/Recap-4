import ColorInput from "../ColorInput/ColorInput";
import "./ColorForm.css";
import { uid } from "uid";

export default function ColorForm({
  onSubmitColor,
  initialData = { role: "some color", hex: "#00ff00", contrastText: "#ffffff" },
}) {
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
      <form className="color-form" onSubmit={handleSubmit}>
        <fieldset className="colorPicker">
          <legend className="legend">Color-Form Component</legend>
          <div>
            <label htmlFor="role">Role</label>
            <br />
            <input
              type="text"
              id="role"
              name="role"
              defaultValue={initialData.role}
            />
          </div>

          <div>
            <label htmlFor="hex">Hex</label>
            <br />

            <ColorInput id="hex" name="hex" defaultValue={initialData.hex} />
          </div>

          <div>
            <label htmlFor="contrastText">Contrast Text</label>
            <br />
            <ColorInput
              id="contrastText"
              name="contrastText"
              defaultValue={initialData.contrastText}
            />
          </div>

          <button type="submit">ADD COLOR</button>
        </fieldset>
      </form>
    </>
  );
}
