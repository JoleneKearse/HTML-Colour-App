import "../css/Title.css";

export default function Title() {
  return (
    <>
      <header>
        <div className="container">
          <h1>HTML Colour App</h1>
          <p>Enter a <span className="emphasis">HTML colour name</span> to display it in all it's beautiful glory & grab the <span className="emphasis">hex code</span>.</p>
        </div>
      </header>
    </>
  )
}
