import BaseImg from "../img/colours.png";
import "../css/ColourDisplay.css";

export default function ColorDisplay({ colorValue }) {
  return (
    <>
      <div className="container">
        <div
          className="display"
          style={{ backgroundColor: colorValue }}
        >
          <p>{colorValue ? colorValue : <img src={BaseImg} alt="colourful gradients" width={300} height={300} />}</p>

        </div>
      </div>
    </>
  )
}
