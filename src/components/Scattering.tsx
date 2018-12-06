import * as React from 'react';
import styled from '@emotion/styled-base';
import { keyframes } from '@emotion/core';
import { AirBlue, AirRed, AirGreen, VizWrapper, AirRedDark } from 'src/materials/materials';

export const xPositionBlue = Math.round(((Math.random() * 700) + 1) / 40) * 40;
export const xPositionGreen = Math.round(((Math.random() * 700) + 1) / 40) * 40;
export const xPositionRed = Math.round(((Math.random() * 700) + 1) / 40) * 40;

export const yPositionBlue = Math.round(((Math.random() * 700) + 1) / 40) * 40;
export const yPositionGreen = Math.round(((Math.random() * 700) + 1) / 40) * 40;
export const yPositionRed = Math.round(((Math.random() * 700) + 1) / 40) * 40;

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

const GreenScatter = keyframes`
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