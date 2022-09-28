import React, { useState, useCallback } from "react";
import colorsDb from "./assets/csscolors.csv";
// import {csvParse} from "d3";
console.log("colorsCSV: ", colorsDb);
// console.log("d3 csv parse", csvParse(colorsDb));

const width = 960;
const height = 500;

export const CssColorVis = () => {
    const [data] = useState(colorsDb);

    return (
        <>
            {data.map(datum => <p>{JSON.stringify(datum)}</p>)}
        </>
    )
};

