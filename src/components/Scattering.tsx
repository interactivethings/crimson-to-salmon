import * as React from 'react';
import styled from '@emotion/styled-base';
import { keyframes } from '@emotion/core';
import { AirBlue, AirRed, VizWrapper, AirRedDark } from 'src/materials/materials';
import { SquareWrapper } from './Countries';
import { SunRayShort, SunRayLong } from './Sun';
import { AirElement } from './Air';
import { ScatteringLegendBlue, ScatteringLegendPolluted, ScatteringLegendRed } from './Legends';


// xPos pushed to this array to have it all in one place?

export const xPosition = Math.round(((Math.random() * 700) + 1) / 40) * 40;
export const yPosition = Math.round(((Math.random() * 700) + 1) / 40) * 40;

const BlueScatter = keyframes`
  from, 0% {
    opacity: 0.5;
    top: 315px;
    left: 315px;
  }

  30% {
      opacity: 1;
      top: ${yPosition};
      left: ${xPosition};
  }

  100% {
    opacity: 1;
    top: ${yPosition};
    left: ${xPosition};
    }
`;

export const ScatterElementBlue = styled('div')`
    width: 35px; 
    height: 35px;
    border-radius: 17.5px;
    background-color: ${AirBlue};
    position: absolute;
    animation: ${BlueScatter} ease 6s infinite;
    animation-fill-mode: forwards;
`

const BlueSky = keyframes`
  from, 90% {
    opacity: 0;
  }

  100% {
    opacity: 0.5;
  }
`;

export const DaytimeSky = styled('div')`
    position: absolute;
    width: 700px;
    height: 700px;
    background-color: ${AirBlue};
    animation: ${BlueSky} ease 8s infinite;
    animation-fill-mode: forwards;
`

export class BlueScattering extends React.Component<{ runAnimation: boolean }> {
    render() {
        const blueElements = [];

        for (let i = 0; i < 200; i++) {
            blueElements.push({
                xPos: Math.round(((Math.random() * 665) + 1) / 35) * 35,
                yPos: Math.round(((Math.random() * 665) + 1) / 35) * 35,
            });
        }

        return(
            <>
                {/* call all these values from the giant array to create scatterElement. how to incorporate the boundaries? already calculated when pushing to scatterElement array?
                 {scatterElements.map( scatterElement =>
                    <ScatterElementBlue style={{width: scatterElement.blueElement.width, left: scatterElement.blueElement.xPos, top: scatterElement.blueElement.yPos}}/>
                 )} */}
                {blueElements.map((blueElement, i) =>
                <ScatterElementBlue key={i} style={{left: blueElement.xPos, top: blueElement.yPos, animationPlayState: this.props.runAnimation ? 'running' : 'paused' }}/>
                )}
                <AirElement style={{top: 315, left: 315}}/>
                
            </>
        );
    }
}

// Red Scattering

const RedScatter = keyframes`
from, 0% {
    opacity: 0.5;
    top: 595px;
    left: 315px;
  }

  30% {
      opacity: 1;
      top: ${yPosition};
      left: ${xPosition};
  }

  100% {
    opacity: 1;
    top: ${yPosition};
    left: ${xPosition};
    }
`;

export const ScatterElementRed = styled('div')`
    width: 105px;
    height: 35px;
    border-radius: 17.5px;
    background-color: ${AirRed};
    position: absolute;
    animation: ${RedScatter} ease 6s infinite;
    animation-fill-mode: forwards;
`

const RedSky = keyframes`
from, 90% {
    opacity: 0;
  }

  100% {
    opacity: 0.5;
  }
`;

export const EveningSky = styled('div')`
    width: 700px;
    height: 700px;
    position: absolute;
    background-color: ${AirRed};
    animation: ${RedSky} ease 8s infinite;
    animation-fill-mode: forwards;
`

export class RedScattering extends React.Component<{ runAnimation: boolean }> {
    render() {
        const redElements = [];

        for (let i = 0; i < 80; i++) {
            redElements.push({
                xPos: Math.round(((Math.random() * 595) + 1) / 35) * 35,
                yPos: Math.round(((Math.random() * 665) + 1) / 35) * 35,
            });
        }

        return(
            <>
                {redElements.map((redElement, i) =>
                <ScatterElementRed key={i} style={{left: redElement.xPos, top: redElement.yPos, animationPlayState: this.props.runAnimation ? 'running' : 'paused'}}/>
                )}
                 <AirElement style={{top: 595, left: 315}}/>
            </>
        );
    }
}

const PollutedScatter = keyframes`
    from, 0% {
        opacity: 0.5;
        top: 595px;
        left: 315px;
    }

    30% {
        opacity: 1;
        top: ${yPosition};
        left: ${xPosition};
    }

    100% {
        opacity: 1;
        top: ${yPosition};
        left: ${xPosition};
    }
`;

export const ScatterElementPolluted = styled('div')`
    width: 105px;
    height: 35px;
    border-radius: 0px;
    background-color: ${AirRedDark};
    position: absolute;
    animation: ${PollutedScatter} ease 6s infinite;
    animation-fill-mode: forwards;
` 

const PollutedRedSky = keyframes`
    from, 90% {
        opacity: 0;
    }

    100% {
        opacity: 0.5;
    }
`;

export const PollutedSky = styled('div')`
    position: absolute;
    width: 700px;
    height: 700px;
    background-color: ${AirRedDark};
    opacity: 0.8;
    animation: ${PollutedRedSky} ease-out 8s infinite;
    animation-fill-mode: forwards;
`

export class PollutedScattering extends React.Component<{ runAnimation: boolean}> {
    render() {
        const pollutedElements = [];
        const redElements = [];

        for (let i = 0; i < 80; i++) {
            redElements.push({
                xPos: Math.round(((Math.random() * 595) + 1) / 35) * 35,
                yPos: Math.round(((Math.random() * 665) + 1) / 35) * 35,
            });
        }

        for (let i = 0; i < 80; i++) {
            pollutedElements.push({
                xPos: Math.round(((Math.random() * 595) + 1) / 35) * 35,
                yPos: Math.round(((Math.random() * 665) + 1) / 35) * 35,
            });
        }

        return(
            <>  {redElements.map((redElement, i) =>
                <ScatterElementRed key={i} style={{left: redElement.xPos, top: redElement.yPos, animationPlayState: this.props.runAnimation ? 'running' : 'paused'}}/>
                )}

                {pollutedElements.map((pollutedElement, i) =>
                <ScatterElementPolluted key={i} style={{left: pollutedElement.xPos, top: pollutedElement.yPos, animationPlayState: this.props.runAnimation ? 'running' : 'paused'}}/>
                )}
                <AirElement style={{top: 595, left: 315}}/>
            </>
        );
    }
}

// full component, consisting of all the scatterings, sky perceptions and sunrays

interface Props {
	Animation: boolean;
}

export class ScatteringBlue extends React.Component<Props> {
    render() {
        return(
            <VizWrapper style={{marginBottom: "30vh"}}>
                <SquareWrapper>
                    <SunRayShort runAnimation={this.props.Animation}/>
                    <BlueScattering runAnimation={this.props.Animation}/>
                    <DaytimeSky />
                </SquareWrapper>
                <ScatteringLegendBlue />
            </VizWrapper>
        );
    }
}

export class ScatteringRed extends React.Component<Props> {
    render() {
        return(
            <VizWrapper style={{marginBottom: "30vh"}}>
                <SquareWrapper>
                    <SunRayLong />
                    <RedScattering runAnimation={this.props.Animation}/>
                    <EveningSky />
                </SquareWrapper>
                <ScatteringLegendRed />
            </VizWrapper>
        );
    }
}

export class ScatteringPolluted extends React.Component<Props> {
    render() {
        return(
            <VizWrapper style={{marginBottom: "30vh"}}>
                <SquareWrapper>
                    <SunRayLong />
                    <PollutedScattering runAnimation={this.props.Animation}/>
                    <PollutedSky />
                </SquareWrapper>
                <ScatteringLegendPolluted />
            </VizWrapper>
        );
    }
}