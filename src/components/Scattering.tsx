import * as React from 'react';
import styled from '@emotion/styled-base';
import { keyframes } from '@emotion/core';
import { VizWrapper, AirRedDark, SunBlue, SunRed, LegendLabelColor } from 'src/materials/materials';
import { SquareWrapper } from './Countries';
import { SunRayShort, SunRayLong } from './Sun';
import { AirElement } from './Air';
import { ScatteringLegendBlue, ScatteringLegendPolluted, ScatteringLegendRed, DistanceLegendElement } from './Legends';


// xPos pushed to this array to have it all in one place?

export const xPosition = Math.round(((Math.random() * 700) + 1) / 40) * 40;
export const yPosition = Math.round(((Math.random() * 700) + 1) / 40) * 40;

const BlueScatter = keyframes`
  from, 10% {
    opacity: 0;
    top: 315px;
    left: 315px;
  }

  50% {
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

const RedScatterForBlue = keyframes`
    from, 10% {
        opacity: 0;
        top: 315px;
        left: 315px;
      }
    
      50% {
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

export const ScatterElementRedForBlue = styled('div')`
    width: 105px;
    height: 35px;
    border-radius: 17.5px;
    background-color: ${SunRed};
    position: absolute;
    animation: ${RedScatterForBlue} ease 8s infinite;
    animation-fill-mode: forwards;
`

export const ScatterElementBlue = styled('div')`
    width: 35px; 
    height: 35px;
    border-radius: 17.5px;
    background-color: ${SunBlue};
    position: absolute;
    animation: ${BlueScatter} ease 8s infinite;
s`

const BlueSky = keyframes`
  from, 70% {
    opacity: 0;
  }

  90% {
    opacity: 0.5;
  }

  100% {
    opacity: 0.5;
  }
`;

export const DaytimeSky = styled('div')`
    position: absolute;
    width: 700px;
    height: 700px;
    background-color: ${SunBlue};
    animation: ${BlueSky} ease 8s infinite;
    animation-fill-mode: forwards;
    animation-play-state: ${(props: {runAnimation: boolean}) => props.runAnimation ? 'running' : 'paused'};
`

export class BlueScattering extends React.Component<{ runAnimation: boolean }> {
    render() {
        var blueElements = [] as any[];
        const redElements = [] as any[];

        for (let i = 0; i < 200; i++) {
            blueElements.push({
                xPos: Math.round(((Math.random() * 665) + 1) / 35) * 35,
                yPos: Math.round(((Math.random() * 665) + 1) / 35) * 35,
            });
        }

        for (let i = 0; i < 5; i++) {
            redElements.push({
                xPos: Math.round(((Math.random() * 595) + 1) / 35) * 35,
                yPos: Math.round(((Math.random() * 665) + 1) / 35) * 35,
            });
        }

        return(
            <>
                {/* call all these values from the giant array to create scatterElement. how to incorporate the boundaries? already calculated when pushing to scatterElement array?
                 {scatterElements.map( scatterElement =>
                    <ScatterElementBlue style={{width: scatterElement.blueElement.width, left: scatterElement.blueElement.xPos, top: scatterElement.blueElement.yPos}}/>
                 )} */}

                 {redElements.map((redElement, i) =>
                <ScatterElementRedForBlue key={i} style={{left: redElement.xPos, top: redElement.yPos, animationPlayState: this.props.runAnimation ? 'running' : 'paused'}}/>
                )}

                {blueElements.map((blueElement, i) =>
                <ScatterElementBlue key={i} style={{
                    // animationDelay: i * 0.05 + "s",
                    // animationDuration: 8 + ((blueElements.length -i) * 0.05) + "s", 
                    left: blueElement.xPos, top: blueElement.yPos, animationPlayState: this.props.runAnimation ? 'running' : 'paused' }}/>
                )}

                <AirElement style={{top: 315, left: 315}}/>
                
            </>
        );
    }
}

// Red Scattering

const RedScatter = keyframes`
    from, 20% {
        opacity: 0;
        top: 595px;
        left: 315px;
      }
    
      50% {
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

const BlueScatterForRed = keyframes`
  from, 10% {
    opacity: 0;
    top: 315px;
    left: 315px;
  }

  50% {
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

export const ScatterElementBlueForRed = styled('div')`
    width: 35px; 
    height: 35px;
    border-radius: 17.5px;
    background-color: ${SunBlue};
    position: absolute;
    animation: ${BlueScatterForRed} ease 8s infinite;
    animation-fill-mode: forwards;
`

export const ScatterElementRed = styled('div')`
    width: 105px;
    height: 35px;
    border-radius: 17.5px;
    background-color: ${SunRed};
    position: absolute;
    animation: ${RedScatter} ease 8s infinite;
    animation-fill-mode: forwards;
`

const RedSky = keyframes`
from, 72% {
    opacity: 0;
  }

  90% {
    opacity: 0.5;
  }

  100% {
    opacity: 0.5;
  }
`;

export const EveningSky = styled('div')`
    width: 700px;
    height: 700px;
    position: absolute;
    background-color: ${SunRed};
    animation: ${RedSky} ease 8s infinite;
    animation-fill-mode: forwards;
    animation-play-state: ${(props: {runAnimation: boolean}) => props.runAnimation ? 'running' : 'paused'};
`

export class RedScattering extends React.Component<{ runAnimation: boolean }> {
    render() {
        const redElements = [] as any[];
        const blueElements = [] as any[];


        for (let i = 0; i < 5; i++) {
            blueElements.push({
                xPos: Math.round(((Math.random() * 665) + 1) / 35) * 35,
                yPos: Math.round(((Math.random() * 65) + 250) / 35) * 35,
            });
        }

        for (let i = 0; i < 80; i++) {
            redElements.push({
                xPos: Math.round(((Math.random() * 595) + 1) / 35) * 35,
                yPos: Math.round(((Math.random() * 665) + 1) / 35) * 35,
            });
        }

        return(
            <>
                {blueElements.map((blueElement, i) =>
                <ScatterElementBlueForRed key={i} style={{left: blueElement.xPos, top: blueElement.yPos, animationPlayState: this.props.runAnimation ? 'running' : 'paused' }}/>
                )}

                {redElements.map((redElement, i) =>
                <ScatterElementRed key={i} style={{left: redElement.xPos, top: redElement.yPos, animationPlayState: this.props.runAnimation ? 'running' : 'paused'}}/>
                )}
                 <AirElement style={{top: 595, left: 315}}/>
            </>
        );
    }
}

const PollutedScatter = keyframes`
    from, 18% {
        opacity: 0;
        top: 595px;
        left: 315px;
    }

    50% {
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
    animation: ${PollutedScatter} ease 8s infinite;
    animation-fill-mode: forwards;
` 

const PollutedRedSky = keyframes`
from, 72% {
    opacity: 0;
  }

  90% {
    opacity: 0.5;
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
    animation: ${PollutedRedSky} ease 8s infinite;
    animation-fill-mode: forwards;
    animation-play-state: ${(props: {runAnimation: boolean}) => props.runAnimation ? 'running' : 'paused'};
`

export class PollutedScattering extends React.Component<{ runAnimation: boolean}> {
    render() {
        const pollutedElements = [] as any[];
        const redElements = [] as any[];
        const blueElements = [] as any[];


        for (let i = 0; i < 5; i++) {
            blueElements.push({
                xPos: Math.round(((Math.random() * 665) + 1) / 35) * 35,
                yPos: Math.round(((Math.random() * 65) + 250) / 35) * 35,
            });
        }

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
            <>  
                {blueElements.map((blueElement, i) =>
                <ScatterElementBlueForRed key={i} style={{left: blueElement.xPos, top: blueElement.yPos, animationPlayState: this.props.runAnimation ? 'running' : 'paused' }}/>
                )}

                {redElements.map((redElement, i) =>
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
                    <DaytimeSky runAnimation={this.props.Animation}/>
                    <DistanceLegendElement style={{top: "-5vh"}}>Travel distance<br></br>of Sun rays<br></br>↓</DistanceLegendElement>
                    <DistanceLegendElement style={{top: 315, color: SunBlue}}>12.00 AM:<br></br>short distance</DistanceLegendElement>
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
                    <SunRayLong runAnimation={this.props.Animation}/>
                    <RedScattering runAnimation={this.props.Animation}/>
                    <EveningSky runAnimation={this.props.Animation}/>
                    <DistanceLegendElement style={{top: "-5vh"}}>Travel distance<br></br>of Sun rays<br></br>↓</DistanceLegendElement>
                    <DistanceLegendElement style={{top: 315}}>12.00 AM:<br></br>short distance</DistanceLegendElement>
                    <DistanceLegendElement style={{top: 595, color: SunRed}}>06.00 PM:<br></br>long distance</DistanceLegendElement>
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
                    <SunRayLong runAnimation={this.props.Animation}/>
                    <PollutedScattering runAnimation={this.props.Animation}/>
                    <PollutedSky runAnimation={this.props.Animation}/>
                    <DistanceLegendElement style={{top: "-5vh", color: LegendLabelColor}}>Travel distance<br></br>of Sun rays<br></br>↓</DistanceLegendElement>
                    <DistanceLegendElement style={{top: 315 }}>12.00 AM:<br></br>short distance</DistanceLegendElement>
                    <DistanceLegendElement style={{top: 595, color: SunRed}}>06.00 PM:<br></br>long distance</DistanceLegendElement>
                </SquareWrapper>
                <ScatteringLegendPolluted />
            </VizWrapper>
        );
    }
}