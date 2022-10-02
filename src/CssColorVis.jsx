import React, { useState, useCallback } from "react";
import colorsDb from "./assets/csscolors.csv";
// import {csvParse} from "d3";
import { csv, arc } from "d3";
console.log("colorsCSV: ", colorsDb);
// console.log("d3 csv parse", csvParse(colorsDb));

const width = 960;
const height = 500;

const centerX = width / 2;
const centerY = height / 2;

const radialProjection = arc()
    .innerRadius(0)
    .outerRadius(width)
    .startAngle(Math.PI / 2)
    .endAngle((Math.PI) * 3/2);

export const CssColorVis = () => {
    const [data] = useState(colorsDb);

    return (
        <svg width={width} height={height}>
            <g transform={`translate(${centerX},${centerY})`}>
                {data.map(datum =>
                        <path
                            key={JSON.stringify(datum)}
                            fill={datum.hex}
                            d={radialProjection()} />
                    )
                }
            </g>
        </svg>
    )
};

