import Colours from "../data/colourNames.json";

export default function ColourNames({ Colours }) {
  return (
    <>
      <p>Try any of the colour names below.</p>
      <ul>
        {Colours.map((colour) => (
          <li
            key={colour.id}
            colour={colour.name}
          >

          </li>
        ))}
      </ul>
    </>
  )
}