import React from "react";

class LogoLoader extends React.Component {
  render() {
    return (
      <svg
        width="800"
        height="300"
        viewBox="0 0 800 300"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <style>
            {`
              .hexagon {
                fill: black; /* Hexagon color */
                stroke: white; /* Stroke color */
                stroke-width: 3; /* Stroke width */
                animation: pulse 1.5s infinite; /* Pulsing effect */
              }
              .initials {
                font-size: 100px; /* Initials size */
                font-weight: bold; /* Bold text */
                fill: white; /* Initials color */
                text-anchor: middle; /* Center text */
                alignment-baseline: middle; /* Center vertically */
              }
              .fullName {
                font-size: 40px; /* Full name size */
                font-weight: bold; /* Bold text */
                fill: black; /* Full name color */
                text-anchor: middle; /* Center text */
                alignment-baseline: middle; /* Center vertically */
                margin-top: 20px; /* Spacing from hexagon */
              }
              @keyframes pulse {
                0% {
                  transform: scale(1);
                }
                50% {
                  transform: scale(1.05);
                }
                100% {
                  transform: scale(1);
                }
              }
            `}
          </style>
        </defs>

        {/* Hexagonal Shape */}
        <polygon
          className="hexagon"
          points="400,50 500,100 500,200 400,250 300,200 300,100"
        />

        {/* Initials "S" and "L" */}
        <text x="400" y="150" className="initials">
          S L
        </text>

        {/* Full Name "Sourabh Lowanshi" */}
        <text x="400" y="280" className="fullName">
          Sourabh Lowanshi
        </text>
      </svg>
    );
  }
}

export default LogoLoader;
