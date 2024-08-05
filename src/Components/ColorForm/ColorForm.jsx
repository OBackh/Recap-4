import ColorInput from "../ColorInput/ColorInput";
import "./ColorForm.css";

export default function ColorForm(
  onSubmitColor,
  initialData = { role: "some color", hex: "#00ff00", contrastText: "#ffffff" }
) {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    onSubmitColor(data);
  }

  return (
    <>
      <form className="color-form" onSubmit={handleSubmit}>
        Color-Form Component
        <fieldset>
          <div>
            <label htmlFor="role">Role</label>
            <br />
            <input type="text" id="role" defaultValue={initialData.role} />
          </div>

          <div>
            <label htmlFor="hex">Hex</label>
            <br />

            <ColorInput id="hex" defaultValue={initialData.hex} />
          </div>

          <div>
            <label htmlFor="hex">Contrast Text</label>
            <br />
            <ColorInput id="hex" defaultValue={initialData.contrastText} />
          </div>

          <button type="submit">ADD COLOR</button>
        </fieldset>
      </form>
    </>
  );
}
