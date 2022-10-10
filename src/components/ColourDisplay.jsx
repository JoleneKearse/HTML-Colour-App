import BaseImg from "../img/colours.png";
import "../css/ColourDisplay.css";

export default function ColorDisplay({ colorValue, codeValue }) {
  return (
    <>
      <div className="container">
        <div
          className="display"
          style={{ backgroundColor: colorValue }}
        >
          <p>{colorValue ? colorValue : <img src={BaseImg} alt="colourful gradients" width={300} height={300} />}</p>
          <p>{codeValue ? codeValue : null}</p>
        </div>
      </div>
    </>
  )
}
