import "../css/Input.css";

export default function Input() {
  return (
    <>
      <div className="container">
        <form>
          <label
            htmlFor="htmlInput"
            className="sr-only"
          >
            Enter a HTML colour name:
          </label>
          <input
            type="text"
            name="htmlInput"
            id="htmlInput"
            className="html-input"
            placeholder="Enter a HTML colour name..."
            autoFocus
            required
          />
        </form>
      </div>
    </>
  )
}
