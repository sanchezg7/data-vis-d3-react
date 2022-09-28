import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { SmileyFace } from "./SmileyFace.jsx";
import { CssColorVis } from "./CssColorVis";
import colorsDb from "./assets/csscolors.csv";

console.log(colorsDb);

function App() {

  return (
    <div className="App">
        <CssColorVis />
      {/*<SmileyFace />*/}
    </div>
  )
}

export default App
