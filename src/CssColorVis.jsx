import React from "react";

const width = 960;
const height = 500;
const cx = width / 2;
const cy = height / 2;
const radius = 30;

const handleMouseMove = e => {
    const { clientX, clientY } = e;
  console.log({clientX, clientY});
};

export const CssColorVis = () => {

    return (
        <svg width={width} height={height} onMouseMove={handleMouseMove}>
            <circle
                cx={cx}
                cy={cy}
                r={radius}
            />
        </svg>
    );
};

