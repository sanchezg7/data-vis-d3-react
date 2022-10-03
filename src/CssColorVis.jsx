import React, { useState, useCallback } from "react";
import colorsDb from "./assets/csscolors.csv";
// import {csvParse} from "d3";
import { arc, pie } from "d3";
console.log("colorsCSV: ", colorsDb);
// console.log("d3 csv parse", csvParse(colorsDb));

const width = 960;
const height = 500;

const centerX = width / 2;
const centerY = height / 2;



// {data.map(datum =>
//     <div
//         style={{
//             backgroundColor: datum.hex,
//             width: "960px",
//             height: "4px"
//         }}>
//     </div>
// )
// }

const pieArc = arc()
    .innerRadius(0)
    .outerRadius(width);

export const CssColorVis = () => {
    const [data] = useState(colorsDb);

    const colorPie = pie().value(1);

    return (
        <svg width={width} height={height}>
            <g transform={`translate(${centerX},${centerY})`}>
                {data.map((d, i) => {
                    const dpath = pieArc({
                        startAngle: i / data.length * 2 * Math.PI,
                        endAngle: (i + 1) / data.length * 2 * Math.PI
                    });
                    return (
                        <path fill={d.hex} d={dpath}/>
                    )
                })}
            </g>
        </svg>
    )
};

