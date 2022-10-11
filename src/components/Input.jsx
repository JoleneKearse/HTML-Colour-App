import "../css/Input.css";
import colorNames from "colornames";
import isDarkColor from "is-dark-color";

export default function Input({ colorValue, setColorValue, setCodeValue, isDarkText, setIsDarkText }) {
  return (
    <>
      <div className="container">
        <form onSubmit={(e) => e.preventDefault()}>
          <label
            htmlFor="htmlInput"
            className="sr-only"
          >
            Enter a HTML colour name:
          </label>
          <input
            autoFocus
            type="text"
            name="htmlInput"
            id="htmlInput"
            className="html-input"
            placeholder="Enter a HTML colour name..."
            required
            value={colorValue}
            onChange={(e) => {
              setColorValue(e.target.value);
              setCodeValue(colorNames(e.target.value));
              setIsDarkColor(!isDarkColor);
            }}
          />
        </form>
      </div>
    </>
  )
}
