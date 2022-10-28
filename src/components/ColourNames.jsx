import Colours from "../data/colourNames.json";

export default function ColourNames({ Colours }) {
  return (
    <>
      <p>Try any of the colour names below.</p>
      <ul>
        {Colours.map((colour, index) => (
          <li
            key={index}
            colour={colour.name}
          >

          </li>
        ))}
      </ul>
    </>
  )
}