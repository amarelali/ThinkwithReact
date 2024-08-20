# Think with React - Color Picker App

This README outlines the process of building a simple Color Picker application using React, following the "Thinking in React" methodology.

## 1. Break Down the UI into a Component Hierarchy

The UI consists of:
- **ColorPicker**: A dropdown to select a color.
- **ColorDisplay**: A box that shows the currently selected color.

Component hierarchy:
- ColorApp (Root Component)
  - ColorPicker
  - ColorDisplay

## 2. Build a Static Version of the UI

Here's a static version of the UI components:

```javascript
const ColorPicker = () => {
  return (<select>
    <option value="red"> Red</option>
    <option value="green"> Green </option>
    <option value="blue"> Blue</option>
  </select>);
}

const ColorDisplay = () => {
  return (
    <div style={{ width: "100px", height: "100px", backgroundColor: "red", display: 'flex', marginTop: '20px' }}>
      <span style={{ margin: "auto" }}>Color</span>
    </div>
  );
}

function ColorApp() {
  return (
    <>
      <ColorPicker />
      <ColorDisplay />
    </>
  )
}

export default ColorApp
```

## 3. Identify the Minimal Representation of UI State

The state needed for this app is the selected color.

## 4. Identify Where the State Should Live

The state should be placed in the parent component (ColorApp) as multiple child components need to access it.

```javascript
import './App.css'
import { useState } from 'react';

const ColorPicker = ({color}) => {
  return (<select value={color}>
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
  const [currentColor, setCurrentColor] = useState("red");
  return (
    <>
      <ColorPicker color={currentColor} setCurrentColor={setCurrentColor}/>
      <ColorDisplay color={currentColor} />
    </>
  )
}

export default ColorApp
```

## 5. Add Inverse Data Flow

Use callback functions to update the state and manage interactions between components.

```javascript
import './App.css'
import { useState } from 'react';

const ColorPicker = ({setCurrentColor, color}) => {
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
  const [currentColor, setCurrentColor] = useState("red");
  return (
    <>
      <ColorPicker color={currentColor} setCurrentColor={setCurrentColor}/>
      <ColorDisplay color={currentColor} />
    </>
  )
}

export default ColorApp
```

This completes the implementation of the Color Picker app following the "Thinking in React" methodology.