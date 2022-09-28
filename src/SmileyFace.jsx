import { arc } from "d3";

export const SmileyFace = () => {
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
        .endAngle(Math.PI);

    function BaseFace() {
        return <circle
            r={height / 2 - strokeWidth / 2}
            fill="yellow"
            stroke="black" //outline
            strokeWidth={strokeWidth}
        >
        </circle>;
    }

    function Eyes() {
        return <>
            <circle
                cx={-eyeOffsetX} // where the x position should be
                cy={-eyeOffsetY} // y position
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
        </>;
    }

    function Smile() {
        return <path d={mouthArc()}/>;
    }

    return (
        <svg width={width} height={height}>
            <g transform={`translate(${centerX},${centerY})`}>
                <BaseFace />
                <Eyes />
                <Smile />
            </g>
        </svg>
    );
};