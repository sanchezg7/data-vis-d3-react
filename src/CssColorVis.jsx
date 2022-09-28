import React, { useState, useCallback } from "react";
import colorsDb from "./assets/csscolors.csv";
// import {csvParse} from "d3";
console.log("colorsCSV: ", colorsDb);
// console.log("d3 csv parse", csvParse(colorsDb));

const width = 960;
const height = 500;
const radius = 30;
const initMosPos = { x: width/2, y: height/2 };

export const CssColorVis = () => {
    const [mousePos, setMousePos] = useState(initMosPos);
    const handleMouseMove = useCallback(e => {
        const { clientX, clientY } = e;
        setMousePos({x: clientX, y: clientY});
    }, [setMousePos]);
    return (
        <svg
            width={width}
            height={height}
            onMouseMove={handleMouseMove}
        >
            <circle
                cx={mousePos.x}
                cy={mousePos.y}
                r={radius}
            />
        </svg>
    );
};

