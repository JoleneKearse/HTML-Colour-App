import Title from "./components/Title";
import ColourDisplay from "./components/ColourDisplay";
import Input from "./components/Input";
import { useState } from "react";


export default function App() {
  const [colorValue, setColorValue] = useState("");
  const [codeValue, setCodeValue] = useState("");
  const [isDarkText, setIsDarkText] = useState(true);

  return (
    <>
      <Title />
      <ColourDisplay
        colorValue={colorValue}
        codeValue={codeValue}
        isDarkText={isDarkText}
      />
      <Input
        colorValue={colorValue}
        setColorValue={setColorValue}
        setCodeValue={setCodeValue}
        isDarkText={isDarkText}
        setIsDarkText={setIsDarkText}
      />
    </>
  )
}