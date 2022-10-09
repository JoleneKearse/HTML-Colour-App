import "../css/Input.css";

export default function Input({ colorValue, setColorValue }) {
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
            onChange={(e) => setColorValue(e.target.value)}
          />
        </form>
      </div>
    </>
  )
}
