import './App.css'
import { useState } from 'react';
const ColorPicker = ({setCurrentColor,color}) => {
  return (<select value={color} onChange={(e)=> setCurrentColor(e.target.value)}>
    <option value="red"> Red</option>
    <option value="green"> Green </option>
    <option value="blue"> Blue</option>
  </select>);
}

const ColorDisplay = ({color}) => {
  return (
    <div style={{ width: "100px", height: "100px", backgroundColor: color, display: 'flex', marginTop: '20px' }}>
      <span style={{ margin: "auto" }}>{color}</span>
    </div>
  );
}

function ColorApp() {
  const [currentColor,setCurrentColor] = useState("red");
  return (
    <>
      <ColorPicker color={currentColor} setCurrentColor={setCurrentColor}/>
      <ColorDisplay color={currentColor} />
    </>
  )
}

export default ColorApp
