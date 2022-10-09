import Title from "./components/Title";
import ColourDisplay from "./components/ColourDisplay";
import Input from "./components/Input";
import { useState } from "react";


export default function App() {
  const [colorValue, setColorValue] = useState("");
  return (
    <>
      <Title />
      <ColourDisplay colorValue={colorValue} />
      <Input
        colorValue={colorValue}
        setColorValue={setColorValue}
      />
    </>
  )
}