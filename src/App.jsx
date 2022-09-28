import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { SmileyFace } from "./SmileyFace.jsx";
import {CssColorVis} from "./CssColorVis";

function App() {

  return (
    <div className="App">
        <CssColorVis />
      {/*<SmileyFace />*/}
    </div>
  )
}

export default App
