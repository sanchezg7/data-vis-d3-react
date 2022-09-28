import React from "react";

const width = 960;
const height = 500;
const cx = width / 2;
const cy = height / 2;
const radius = 30;

export const CssColorVis = () => {

    return (
        <svg width={width} height={height}>
            <circle
                cx={cx}
                cy={cy}
                r={radius}
            />
        </svg>
    );
};

