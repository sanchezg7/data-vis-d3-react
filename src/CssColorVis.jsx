import React, { useState } from "react";

const width = 960;
const height = 500;
// const cx = width / 2;
// const cy = height / 2;
const radius = 30;



const initMosPos = { x: width/2, y: height/2 };

export const CssColorVis = () => {

    const [mousePos, setMousePos] = useState(initMosPos);
    const handleMouseMove = e => {
        const { clientX, clientY } = e;
        setMousePos({x: clientX, y: clientY});
    };
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

