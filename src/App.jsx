import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

    const Smiley = () => {
      // svg needs width and height to fit the needs as it's defaulted and will cut off
        const height = 500;
        const width = 960;
        const strokeWidth = 10;
      return (
          <svg width={width} height={height}>
              <circle
                  cx={width/2} // where the x position should be
                  cy={height/2} // y position
                  r={height / 2- strokeWidth / 2 }
                  fill="yellow"
                  stroke="black" //outline
                  strokeWidth={strokeWidth}
              >

              </circle>
          </svg>
      );
    };

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <Smiley />
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
