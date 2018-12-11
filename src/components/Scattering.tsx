import * as React from 'react';
import styled from '@emotion/styled-base';
import { keyframes } from '@emotion/core';
import { AirBlue, AirRed, VizWrapper, AirRedDark } from 'src/materials/materials';
import { SquareWrapper } from './Countries';
import { SunRays } from './Sun';
import { AirMolecules } from './Air';
import { ScatteringLegend } from './Legends';


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














// export const ScatterElementPolluted = styled('div')`
//     width: 105px;
//     height: 35px;
//     border-radius: 17.5px;
//     background-color: ${AirRed};
//     position: absolute;
//     // animation: ${RedScatter} ease-out 3s;
// `







const BlueScatter = keyframes`
  from, 0% {
    opacity: 0;
  }

  30% {
      opacity: 1;
  }

  80% {
    opacity: 1;
}

  100% {
    opacity: 0;
    }
`;

export const ScatterElementBlue = styled('div')`
    width: 35px; 
    height: 35px;
    border-radius: 17.5px;
    background-color: ${AirBlue};
    position: absolute;
    animation: ${BlueScatter} ease 6s;
    animation-fill-mode: forwards;
`

const BlueSky = keyframes`
  from, 50% {
    opacity: 0;
  }

  65% {
      opacity: 0.5;
  }

  80% {
    opacity: 0.5;
}

  100% {
    opacity: 0;
  }
`;

export const DaytimeSky = styled('div')`
    position: absolute;
    width: 700px;
    height: 700px;
    background-color: ${AirBlue};
    animation: ${BlueSky} ease 6s;
    animation-fill-mode: forwards;
`

export class BlueScattering extends React.Component {
    render() {
        const blueElements = [];

        for (let i = 0; i < 60; i++) {
            blueElements.push({
                xPos: Math.round(((Math.random() * 665) + 1) / 35) * 35,
                yPos: Math.round(((Math.random() * 350) + 1) / 35) * 35,
            });
        }

        return(
            <>
                {/* call all these values from the giant array to create scatterElement. how to incorporate the boundaries? already calculated when pushing to scatterElement array?
                 {scatterElements.map( scatterElement =>
                    <ScatterElementBlue style={{width: scatterElement.blueElement.width, left: scatterElement.blueElement.xPos, top: scatterElement.blueElement.yPos}}/>
                 )} */}


                {blueElements.map((blueElement, i) =>
                <ScatterElementBlue key={i} style={{left: blueElement.xPos, top: blueElement.yPos}}/>
                )}
            </>
        );
    }
}

// Red Scattering

const RedScatter = keyframes`
from, 0% {
    opacity: 0;
  }

  30% {
      opacity: 1;
  }

  80% {
    opacity: 1;
}

  100% {
    opacity: 0;
    }
`;

export const ScatterElementRed = styled('div')`
    width: 105px;
    height: 35px;
    border-radius: 17.5px;
    background-color: ${AirRed};
    position: absolute;
    animation: ${RedScatter} ease 6s;
    animation-fill-mode: forwards;
`

const RedSky = keyframes`
from, 50% {
    opacity: 0;
  }

  65% {
      opacity: 0.5;
  }

  80% {
    opacity: 0.5;
}

  100% {
    opacity: 0;
  }
`;

export const EveningSky = styled('div')`
    width: 700px;
    height: 700px;
    position: absolute;
    background-color: ${AirRed};
    animation: ${RedSky} ease 6s;
    animation-fill-mode: forwards;
`

export class RedScattering extends React.Component {
    render() {
        const redElements = [];

        for (let i = 0; i < 30; i++) {
            redElements.push({
                xPos: Math.round(((Math.random() * 595) + 1) / 35) * 35,
                yPos: Math.round(((Math.random() * 315) + 350) / 35) * 35,
            });
        }

        return(
            <>
                {redElements.map((redElement, i) =>
                <ScatterElementRed key={i} style={{left: redElement.xPos, top: redElement.yPos}}/>
                )}
            </>
        );
    }
}

const PollutedScatter = keyframes`
from, 0% {
    opacity: 0;
  }

  30% {
      opacity: 1;
  }

  80% {
    opacity: 1;
}

  100% {
    opacity: 0;
    }
`;

export const ScatterElementPolluted = styled('div')`
    width: 105px;
    height: 35px;
    border-radius: 0px;
    background-color: ${AirRedDark};
    position: absolute;
    animation: ${PollutedScatter} ease 6s;
    animation-fill-mode: forwards;
` 

const PollutedRedSky = keyframes`
    from, 50% {
        opacity: 0;
    }

    65% {
        opacity: 0.5;
    }

    80% {
        opacity: 0.5;
    }

    100% {
        opacity: 0;
    }
`;

export const PollutedSky = styled('div')`
    position: absolute;
    width: 700px;
    height: 700px;
    background-color: ${AirRedDark};
    opacity: 0.8;
    animation: ${PollutedRedSky} ease-out 6s;
    animation-fill-mode: forwards;
`

export class PollutedScattering extends React.Component {
    render() {
        const pollutedElements = [];

        for (let i = 0; i < 30; i++) {
            pollutedElements.push({
                xPos: Math.round(((Math.random() * 595) + 1) / 35) * 35,
                yPos: Math.round(((Math.random() * 315) + 350) / 35) * 35,
            });
        }

        return(
            <>
                {pollutedElements.map((pollutedElement, i) =>
                <ScatterElementPolluted key={i} style={{left: pollutedElement.xPos, top: pollutedElement.yPos}}/>
                )}
            </>
        );
    }
}

// full component, consisting of all the scatterings, sky perceptions and sunrays

export class Scattering extends React.Component {
    render() {
        return(
            <VizWrapper style={{marginBottom: "30vh"}}>
                <SquareWrapper>
                    <SunRays />
                    <BlueScattering />
                    <RedScattering />
                    <PollutedScattering />
                    <AirMolecules />
                    <DaytimeSky />
                    <EveningSky />
                    <PollutedSky />
                </SquareWrapper>
                <ScatteringLegend />
            </VizWrapper>
        );
    }
}