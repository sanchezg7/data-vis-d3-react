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

const pieArc = () => arc()
    .innerRadius(0)
    .outerRadius(width)
    .startAngle(Math.PI / 2)
    .endAngle((Math.PI) * 3/2);

// {/*{data.map((datum, index) =>*/}
// {/*        <path*/}
// {/*            key={JSON.stringify(datum)}*/}
// {/*            fill={datum.hex}*/}
// {/*            d={radialProjection({*/}
// {/*                startAngle: index / data.length * 2 * Math.PI,*/}
// {/*                endAngle: (index + 1) / data.length * 2 * Math.PI*/}
// {/*            })} />*/}
// {/*    )*/}
// {/*}*/}

export const CssColorVis = () => {
    const [data] = useState(colorsDb);

    const colorPie = pie().value(1);

    return (
        <svg width={width} height={height}>
            {/*<g transform={`translate(${centerX},${centerY})`}>*/}
                {data.map(d => <path fill={d.hex} d={pieArc()} />)}
            {/*</g>*/}
        </svg>
    )
};

