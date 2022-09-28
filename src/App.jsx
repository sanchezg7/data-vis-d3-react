import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { arc } from "d3";

function App() {
  const [count, setCount] = useState(0)

    const Smiley = () => {
      // svg needs width and height to fit the needs as it's defaulted and will cut off
        const height = 500;
        const width = 960;
        const strokeWidth = 10;
        const centerX = width/2;
        const centerY = height/2;
        const eyeOffsetX = 100;
        const eyeOffsetY = 80;
        const mouthWidth = 20;
        const mouthRadius = 150;
        const eyeRadius = 50;
        const mouthArc = arc() // constructor pattern with method chaining
            .innerRadius(mouthRadius)
            .outerRadius(mouthRadius + mouthWidth)
            .startAngle(Math.PI / 2)
            .endAngle(Math.PI * 3/2 );

      return (
          <svg width={width} height={height}>
              <g transform={`translate(${centerX},${centerY})`}>
                  <circle
                      r={height / 2- strokeWidth / 2 }
                      fill="yellow"
                      stroke="black" //outline
                      strokeWidth={strokeWidth}
                  >
                  </circle>
                  <circle
                      cx={- eyeOffsetX} // where the x position should be
                      cy={- eyeOffsetY} // y position
                      r={eyeRadius}
                      stroke="black" //outline
                      strokeWidth={strokeWidth}
                  >
                  </circle>
                  <circle
                      cx={eyeOffsetX} // where the x position should be
                      cy={-eyeOffsetY} // y position
                      r={eyeRadius}
                      stroke="black" //outline
                      strokeWidth={strokeWidth}
                  >
                  </circle>
                  <path d={mouthArc()} />
              </g>
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
