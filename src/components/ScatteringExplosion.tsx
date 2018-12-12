import * as React from 'react';
import styled from '@emotion/styled-base';
import { keyframes } from '@emotion/core';
import { AirBlue, AirRed, VizWrapper, AirRedDark } from 'src/materials/materials';

export const BlueWrapper = styled('div')`
    position: relative;
    width: 700px;
    height: 700px;
`

// Positions: how to encorporate them effectively into element?

export const xPositionBlue = Math.round(((Math.random() * 700) + 1) / 40) * 40;
export const xPositionRed = Math.round(((Math.random() * 700) + 1) / 40) * 40;
export const yPositionBlue = Math.round(((Math.random() * 700) + 1) / 40) * 40;
export const yPositionRed = Math.round(((Math.random() * 700) + 1) / 40) * 40;


const BlueScatter = keyframes`
from, 0% {
    opacity: 0.9;
    top: 350px;
    left: 350px;
    }

100% {
    opacity: 1;
    top: ${xPositionRed};
    left: ${xPositionRed};
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

const BlueSky = keyframes`
from, 50% {
    opacity: 0;
}

100% {
    opacity: 0.5;
}
`;

export const DaytimeSky = styled('div')`
width: 700px;
height: 700px;
background-color: ${AirBlue};
opacity: 0.5;
animation: ${BlueSky} ease-out 6s;
`

export class BlueScattering extends React.Component {
render() {
    const blueElements = [];

    blueElements.push({
    xPos: Math.round(((Math.random() * 700) + 1) / 40) * 40,
    yPos: Math.round(((Math.random() * 700) + 1) / 40) * 40,
});

return(
    <>
    <BlueWrapper>
        {blueElements.map( blueElement =>
        <ScatterElementBlue style={{left: blueElement.xPos, top: blueElement.yPos}}/>
        )}
    </BlueWrapper>
    <DaytimeSky />
    </>
    );
}
}

// // Evening Sky

// const RedScatter = keyframes`
// from, 0% {
//     opacity: 0.9;
//     top: 350px;
//     left: 350px;
//     }

// 100% {
//   opacity: 1;
//   top: ${xPositionRed};
//   left: ${xPositionRed};
// }
// `;

// export const ScatterElementRed = styled('div')`
// width: 105px;
// height: 35px;
// border-radius: 17.5px;
// background-color: ${AirRed};
// position: absolute;
// animation: ${RedScatter} ease-out 5s;
// animation: ${RedScatter} ease-out 3s;
// `

// const RedSky = keyframes`
// from, 50% {
// opacity: 0;
// }

// 100% {
//   opacity: 0.5;
// }
// `;

// export const EveningSky = styled('div')`
// width: 700px;
// height: 700px;
// background-color: ${AirRed};
// opacity: 0.5;
// animation: ${RedSky} ease-out 6s;
// `


// export class RedScattering extends React.Component {
// render() {

// const redElements = [];

// for (let i = 0; i < 3; i++) {
// redElements.push({
//     xPos: Math.round(((Math.random() * 700) + 1) / 40) * 40,
//     yPos: Math.round(((Math.random() * 700) + 1) / 40) * 40,
// });
// }

// return(
// <VizWrapper>
//     {redElements.map( redElement =>
//     <ScatterElementRed style={{left: redElement.xPos, top: redElement.yPos}}/>
//     )}
//     <EveningSky />
// </VizWrapper>
// );
// }
// }


// // Polluted Sky

// const ExtremeRedSky = keyframes`
// from, 50% {
// opacity: 0;
// }

// 100% {
//   opacity: 0.8;
// }
// `;

// export const PollutedSky = styled('div')`
// width: 700px;
// height: 700px;
// background-color: ${AirRedDark};
// opacity: 0.8;
// animation: ${ExtremeRedSky} ease-out 6s;
// `

// export class PollutedScattering extends React.Component {
// render() {
// const pollutedElements = [];

// for (let i = 0; i < 30; i++) {
// pollutedElements.push({
//     xPos: Math.round(((Math.random() * 700) + 1) / 40) * 40,
//     yPos: Math.round(((Math.random() * 700) + 1) / 40) * 40,
//     });
// }

// return(
// <VizWrapper>
//     {pollutedElements.map( pollutedElement =>
//     <ScatterElementRed style={{left: pollutedElement.xPos, top: pollutedElement.yPos}}/>
//     )}
//     <PollutedSky />
// </VizWrapper>
// );
// }
// }

