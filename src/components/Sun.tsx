import * as React from 'react';
import { VizWrapper, SunRed, SunOrange, SunYellow, SunGreen, SunIndigo, SunBlue, SunPurple, LabelColor } from 'src/materials/materials';
import styled from '@emotion/styled-base';
import { keyframes } from '@emotion/core';
import { ScatterElementSmall } from './Scattering';

export const SunColors = [SunRed, SunOrange, SunYellow, SunGreen, SunIndigo, SunBlue, SunPurple]

// export const SunRoot = styled('div')`
//     position: relative;
    
// `

// export const SunElements = styled('div')`
//     display: flex;
//     justify-content: center;
//     align-items: center;
// `

const StaggeringRed = keyframes`
  from, 0% {
    left: 333px;
    background-color: ${SunYellow};
  }

  60% {
    left: 665px;
    background-color: ${SunRed};
    transform: scale(1);
    transform-origin: center;

  }

  80% {
    left: 333px;
    transform: scale(20);
    background-color: ${SunYellow};
    transform-origin: center;
  }

  100% {
    background-color: ${SunYellow};
    transform: scale(1);
    opacity: 1;
    top: 333px;
    left: 333px;
  }
`;

export const SunElement01 = styled('div')`
    position: absolute;
    top: 333px;
    width: 35px;
    height: 35px;
    border-radius: 17px;
    animation: ${StaggeringRed} ease 4s;
    animation-fill-mode: forwards;
`

const StaggeringYellow = keyframes`
  from, 0% {
    left: 333px;
    background-color: ${SunYellow};
  }

  60% {
    left: 554px;
    background-color: ${SunYellow};
    transform: scale(1);
    transform-origin: center;
  }

  80% {
    left: 333px;
    transform: scale(20);
    background-color: ${SunYellow};
    transform-origin: center;
  }

  100% {
    background-color: ${SunYellow};
    transform: scale(1);
    opacity: 1;
    top: 333px;
    left: 333px;
  }
`;

export const SunElement02 = styled('div')`
    position: absolute;
    top: 333px;
    width: 35px;
    height: 35px;
    border-radius: 17px;
    animation: ${StaggeringYellow} ease 4s;
    animation-fill-mode: forwards;
`

const StaggeringOrange = keyframes`
  from, 0% {
    left: 333px;
    background-color: ${SunYellow};
  }

  60% {
    left: 443px;
    background-color: ${SunOrange};
    transform: scale(1);
    transform-origin: center;
  }

  80% {
    left: 333px;
    transform: scale(20);
    background-color: ${SunYellow};
    transform-origin: center;
  }

  100% {
    background-color: ${SunYellow};
    transform: scale(1);
    opacity: 1;
    top: 333px;
    left: 333px;
  }
`;

export const SunElement03 = styled('div')`
    position: absolute;
    top: 333px;
    width: 35px;
    height: 35px;
    border-radius: 17px;
    animation: ${StaggeringOrange} ease 4s;
    animation-fill-mode: forwards;
`

const StaggeringGreen = keyframes`
  from, 0% {
    left: 333px;
    background-color: ${SunYellow};
  }

  60% {
    left: 332px;
    background-color: ${SunGreen};
    transform: scale(1);
    transform-origin: center;
  }

  80% {
    left: 333px;
    transform: scale(20);
    background-color: ${SunYellow};
    transform-origin: center;
  }

  100% {
    background-color: ${SunYellow};
    transform: scale(1);
    opacity: 1;
    top: 333px;
    left: 333px;
  }
`;

export const SunElement04 = styled('div')`
    position: absolute;
    top: 333px;
    width: 35px;
    height: 35px;
    border-radius: 17px;
    animation: ${StaggeringGreen} ease 4s;
    animation-fill-mode: forwards;
`

const StaggeringIndigo = keyframes`
  from, 0% {
    left: 333px;
    background-color: ${SunYellow};
  }

  60% {
    left: 221px;
    background-color: ${SunIndigo};
    transform: scale(1);
    transform-origin: center;
  }

  80% {
    left: 333px;
    transform: scale(20);
    background-color: ${SunYellow};
    transform-origin: center;
  }

  100% {
    background-color: ${SunYellow};
    transform: scale(1);
    opacity: 1;
    top: 333px;
    left: 333px;
  }
`;

export const SunElement05 = styled('div')`
    position: absolute;
    top: 333px;
    width: 35px;
    height: 35px;
    border-radius: 17px;
    animation: ${StaggeringIndigo} ease 4s;
    animation-fill-mode: forwards;
`

const StaggeringBlue = keyframes`
  from, 0% {
    left: 333px;
    background-color: ${SunYellow};
  }

  60% {
    left: 111px;
    background-color: ${SunBlue};
    transform: scale(1);
    transform-origin: center;
  }

  80% {
    left: 333px;
    transform: scale(20);
    background-color: ${SunYellow};
    transform-origin: center;
  }

  100% {
    background-color: ${SunYellow};
    transform: scale(1);
    opacity: 1;
    top: 333px;
    left: 333px;
  }
`;

export const SunElement06 = styled('div')`
    position: absolute;
    top: 333px;
    width: 35px;
    height: 35px;
    border-radius: 17px;
    animation: ${StaggeringBlue} ease 4s;
    animation-fill-mode: forwards;
`

const StaggeringPurple = keyframes`
  from, 0% {
    left: 333px;
    background-color: ${SunYellow};
  }

  60% {
    left: 0px;
    background-color: ${SunPurple};
    transform: scale(1);
    transform-origin: center;
  }

  80% {
    left: 333px;
    transform: scale(20);
    background-color: ${SunYellow};
    transform-origin: center;
  }

  100% {
    background-color: ${SunYellow};
    transform: scale(1);
    opacity: 1;
    top: 333px;
    left: 333px;
  }
`;

export const SunElement07 = styled('div')`
    position: absolute;
    top: 333px;
    width: 35px;
    height: 35px;
    border-radius: 17px;
    animation: ${StaggeringPurple} ease 4s;
    animation-fill-mode: forwards;
`

export const LegendItem = styled('div')`
    display: flex;
    width: 700px;
    justify-content: space-between;
`

const LegendWLItems = keyframes`
    from, 0% {
       opacity: 0;
    }

    80% {
        opacity: 1;
    }

    100% {
        opacity: 0;
    }
`

export const LegendLabelWL = styled('p')`
    font-size: 1em;
    line-height: 120%;
    color: ${LabelColor};
    animation: ${LegendWLItems} ease 3s;
    animation-fill-mode: forwards;
`

export const Legend = styled('div')`
    display: flex;
    width: 700px;
    justify-content: space-between;
    animation: ${LegendWLItems} ease 3s;
    animation-fill-mode: forwards;
`

const LegendSun = keyframes`
    from, 80% {
       opacity: 0;
    }

    100% {
        opacity: 1;
    }
`

export const LegendLabelSun = styled('p')`
    font-size: 1em;
    line-height: 120%;
    color: ${LabelColor};
    animation: ${LegendSun} ease 3s;
`

export class Sun extends React.Component {
    render() {
        return(
            <>
            <VizWrapper>
                {/* <SunRoot> */}
                    {/* <SunElements> */}
                    {/* {SunColors.map( SunColor =>
                    <SunElement style={{backgroundColor: SunColor.SunRed }}/>
                    )} */}

                {/* <SunElement style={{backgroundColor: SunPurple}}/>
                <SunElement style={{backgroundColor: SunBlue}}/> */}
                <SunElement01 />
                <SunElement02 />
                <SunElement03 />
                <SunElement04 />
                <SunElement05 />
                <SunElement06 />
                <SunElement07 />
                
               
                    {/* </SunElements> */}
                {/* </SunRoot> */}
            </VizWrapper>

             <LegendItem>
                <LegendLabelWL>short</LegendLabelWL>
                <LegendLabelSun>Sun</LegendLabelSun>
                <LegendLabelWL>long</LegendLabelWL>
            </LegendItem>
            </>
        );
    }
}

export class SunRays extends React.Component {
  render() {
    const sunElements = [];

    // how to push to scatterElements array to specific position (to object blueElement)?

    for (let i = 0; i < 45; i++) {
        sunElements.push({
            xPos: Math.round(((Math.random() * 700) + 1) / 40) * 40,
            yPos: Math.round(((Math.random() * 700) + 1) / 40) * 40,
        });
    }
    return(
      <>
       {sunElements.map( sunElement =>
                <ScatterElementSmall style={{left: sunElement.xPos, top: sunElement.yPos}}/>
                )}
      </>
    );
  }

}