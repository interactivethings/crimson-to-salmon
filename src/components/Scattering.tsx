import * as React from 'react';
import styled from '@emotion/styled-base';
import { keyframes } from '@emotion/core';
import { AirBlue, AirRed, AirGreen, VizWrapper, AirRedDark } from 'src/materials/materials';


// xPos pushed to this array to have it all in one place?

export const scatterElements = [{blueElement: {width: 35, xPos: 104, yPos: 85 }}, {greenElement: {green: 70}}, {redElement: { red: 105}} ];

export const xPositionGreen = Math.round(((Math.random() * 700) + 1) / 40) * 40;
export const xPositionRed = Math.round(((Math.random() * 700) + 1) / 40) * 40;
export const xPositionBlue = Math.round(((Math.random() * 700) + 1) / 40) * 40;


export const yPositionGreen = Math.round(((Math.random() * 700) + 1) / 40) * 40;
export const yPositionRed = Math.round(((Math.random() * 700) + 1) / 40) * 40;
export const yPositionBlue = Math.round(((Math.random() * 700) + 1) / 40) * 40;

export let xPosition = Math.round(((Math.random() * 600) + 1) / 40) * 40;
export let yPosition = Math.round(((Math.random() * 600) + 1) / 40) * 40;


// export const yPositionBlue = yPosition - 35;
// export const xPositionBlue = yPosition - 35;


    // switch (xPosition) {
    //     case 'ScatterElementBlue':
    //         xPosition - 35;
    //         yPosition - 35;
    //     case 'ScatterElementGreen':
    //         xPosition - 35;
    //         yPosition - 35;
    //     case 'ScatterElementRed':
    //         xPosition - 35;
    //         yPosition - 35;
    //     default:
    //         xPosition - 105;
    //         yPosition - 105;
    // };

    // export const xPos = xPosition as number  => {
    //     switch (xPos) {
    //         case xPositionBlue:
    //             return xPosition ===  xPosition - 35;
    //         case 'xPositionGreen':
    //             return xPosition ===  xPosition - 70;
    //         case 'xPositionRed':
    //             return xPosition ===  xPosition - 105;
    //         default:
    //             return xPosition ===  xPosition - 105;
    //     }
    // };

//     var boxElement = document.getElementById('theIdOfTheBox');


// TBD: 
// 1. create an array with the widths of the elements (also push created positions to this existing array?) and based on that, create the element with the width and the position, maybe also color. 
// 2. use this element for an if clause which determines the distance needed to relocate the element when crossing the boundaries of VizWrapper (xPosition for every case)
// 3. also bind perception div to this if-clause

const BlueScatter = keyframes`
  from, 0% {
    opacity: 0.9;
    top: 350px;
    left: 350px;
  }

  100% {
      opacity: 1;
      top: ${xPositionBlue};
      left: ${xPositionBlue};
  }

`;

export const ScatterElementBlue = styled('div')`
    width: 35px; 
    height: 35px;
    border-radius: 17.5px;
    background-color: ${AirBlue};
    position: absolute;
    animation: ${BlueScatter} ease-out 3s;
`

// if (ScatterElementBlue) {
//         // Calculate and store some of the box coordinates:
//         const ScatterElementBlueXPos = ScatterElementBlue.offsetLeft,
//         ScatterElementBlueYPos = ScatterElementBlueXPos + ScatterElementBlue.offsetWidth;
//         // When right side of the box goes too far - change direction:
//         if (ScatterElementBlueXPos > VizWrapper) {
//             xPosition = -35;
//         }
//         // When left side of the box goes too far - change direction:
//         if (ScatterElementBlueYPos < 0) {
//             yPosition = -35;
//         }
//         // Recalculate position:
//         ScatterElementBlue.style.left = (ScatterElementBlueXPos - xPosition);
//     };


const GreenScatter = keyframes`
  from, 0% {
    opacity: 0.9;
    top: 350px;
    left: 350px;
  }

  100% {
      opacity: 1;
      top: ${xPositionGreen};
      left: ${xPositionGreen};
  }
`;

export const ScatterElementGreen = styled('div')`
    width: 70px;
    height: 35px;
    border-radius: 17.5px;
    background-color: ${AirGreen};
    position: absolute;
    animation: ${GreenScatter} ease-out 3s;
`

const RedScatter = keyframes`
  from, 0% {
    opacity: 0.9;
    top: 350px;
    left: 350px;
  }

  100% {
      opacity: 1;
      top: ${xPositionBlue};
      left: ${xPositionBlue};
  }
`;

const BlueSky = keyframes`
  from, 50% {
    opacity: 0;
  }

  100% {
      opacity: 0.5;
  }
`;

const RedSky = keyframes`
  from, 50% {
    opacity: 0;
  }

  100% {
      opacity: 0.5;
  }
`;

const ExtremeRedSky = keyframes`
  from, 50% {
    opacity: 0;
  }

  100% {
      opacity: 0.8;
  }
`;



export const ScatterElementRed = styled('div')`
    width: 105px;
    height: 35px;
    border-radius: 17.5px;
    background-color: ${AirRed};
    position: absolute;
    animation: ${RedScatter} ease-out 3s;
`

export const DaytimeSky = styled('div')`
    width: 700px;
    height: 700px;
    background-color: ${AirBlue};
    opacity: 0.5;
    animation: ${BlueSky} ease-out 6s;
`

export const EveningSky = styled('div')`
    width: 700px;
    height: 700px;
    background-color: ${AirRed};
    opacity: 0.5;
    animation: ${RedSky} ease-out 6s;
`

export const PollutedEveningSky = styled('div')`
    width: 700px;
    height: 700px;
    background-color: ${AirRedDark};
    opacity: 0.8;
    animation: ${ExtremeRedSky} ease-out 6s;

`

export class BlueScattering extends React.Component {
    render() {
        const blueElements = [];
        const redElements = [];
        const greenElements = [];

        // how to push to scatterElements array to specific position (to object blueElement)?

        for (let i = 0; i < 25; i++) {
            blueElements.push({
                xPos: Math.round(((Math.random() * 700) + 1) / 40) * 40,
                yPos: Math.round(((Math.random() * 700) + 1) / 40) * 40,
            });
        }

        for (let i = 0; i < 3; i++) {
            redElements.push({
                xPos: Math.round(((Math.random() * 700) + 1) / 40) * 40,
                yPos: Math.round(((Math.random() * 700) + 1) / 40) * 40,
            });
        }

        for (let i = 0; i < 1; i++) {
            greenElements.push({
                xPos: Math.round(((Math.random() * 700) + 1) / 40) * 40,
                yPos: Math.round(((Math.random() * 700) + 1) / 40) * 40,
            });
        }

        return(
            <VizWrapper>

                {/* call all these values from the giant array to create scatterElement. how to incorporate the boundaries? already calculated when pushing to scatterElement array?
                 {scatterElements.map( scatterElement =>
                    <ScatterElementBlue style={{width: scatterElement.blueElement.width, left: scatterElement.blueElement.xPos, top: scatterElement.blueElement.yPos}}/>
                 )} */}


                {blueElements.map( blueElement =>
                <ScatterElementBlue style={{left: blueElement.xPos, top: blueElement.yPos}}/>
                )}

                {redElements.map( redElement =>
                <ScatterElementGreen style={{left: redElement.xPos, top: redElement.yPos}}/>
                )}

                {greenElements.map( greenElement =>
                <ScatterElementRed style={{left: greenElement.xPos, top: greenElement.yPos}}/>
                )}
                <DaytimeSky />
            </VizWrapper>
        );
    }
}

export class RedScattering extends React.Component {
    render() {
        const blueElements = [];
        const redElements = [];
        const greenElements = [];


        for (let i = 0; i < 1; i++) {
            blueElements.push({
                xPos: Math.round(((Math.random() * 700) + 1) / 40) * 40,
                yPos: Math.round(((Math.random() * 700) + 1) / 40) * 40,
            });
        }

        for (let i = 0; i < 3; i++) {
            redElements.push({
                xPos: Math.round(((Math.random() * 700) + 1) / 40) * 40,
                yPos: Math.round(((Math.random() * 700) + 1) / 40) * 40,
            });
        }

        for (let i = 0; i < 20; i++) {
            greenElements.push({
                xPos: Math.round(((Math.random() * 700) + 1) / 40) * 40,
                yPos: Math.round(((Math.random() * 700) + 1) / 40) * 40,
            });
        }

        return(
            <VizWrapper>
                {blueElements.map( blueElement =>
                <ScatterElementBlue style={{left: blueElement.xPos, top: blueElement.yPos}}/>
                )}

                {redElements.map( redElement =>
                <ScatterElementGreen style={{left: redElement.xPos, top: redElement.yPos}}/>
                )}

                {greenElements.map( greenElement =>
                <ScatterElementRed style={{left: greenElement.xPos, top: greenElement.yPos}}/>
                )}

                <EveningSky />
            </VizWrapper>
        );
    }
}

export class RedPollutedScattering extends React.Component {
    render() {
        const redElements = [];
        const greenElements = [];

        for (let i = 0; i < 2; i++) {
            redElements.push({
                xPos: Math.round(((Math.random() * 700) + 1) / 40) * 40,
                yPos: Math.round(((Math.random() * 700) + 1) / 40) * 40,
            });
        }

        for (let i = 0; i < 35; i++) {
            greenElements.push({
                xPos: Math.round(((Math.random() * 700) + 1) / 40) * 40,
                yPos: Math.round(((Math.random() * 700) + 1) / 40) * 40,
            });
        }

        return(
            <VizWrapper>
                {redElements.map( redElement =>
                <ScatterElementGreen style={{left: redElement.xPos, top: redElement.yPos}}/>
                )}

                {greenElements.map( greenElement =>
                <ScatterElementRed style={{left: greenElement.xPos, top: greenElement.yPos}}/>
                )}
                <PollutedEveningSky />
            </VizWrapper>
        );
    }
}