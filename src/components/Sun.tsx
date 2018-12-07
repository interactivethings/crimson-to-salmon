import * as React from 'react';
import { VizWrapper, SunRed, SunOrange, SunYellow, SunGreen, SunIndigo, SunBlue, SunPurple } from 'src/materials/materials';
import styled from '@emotion/styled-base';
import { keyframes } from '@emotion/core';

export const SunColors = [SunRed, SunOrange, SunYellow, SunGreen, SunIndigo, SunBlue, SunPurple]

// export const SunRoot = styled('div')`
//     position: relative;
    
// `

// export const SunElements = styled('div')`
//     display: flex;
//     justify-content: center;
//     align-items: center;
// `

const StaggeringPurple = keyframes`
  from, 0% {
    opacity: 0;
    left: 350px;
    background-color: ${SunYellow};
  }

  33% {
    opacity: 1;
    left: 665px;
    background-color: ${SunPurple};
    transform: scale(1);
    transform-origin: center;

  }

  60% {
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
    animation: ${StaggeringPurple} ease 3s;
    animation-fill-mode: forwards;
`

const StaggeringBlue = keyframes`
  from, 0% {
    opacity: 0;
    left: 350px;
    background-color: ${SunYellow};
  }

  33% {
    opacity: 1;
    left: 554px;
    background-color: ${SunBlue};
    transform: scale(1);
    transform-origin: center;
  }

  60% {
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
    background-color: ${SunBlue};
    animation: ${StaggeringBlue} ease 3s;
    animation-fill-mode: forwards;
`

const StaggeringIndigo = keyframes`
  from, 0% {
    opacity: 0;
    left: 350px;
    background-color: ${SunYellow};
  }

  33% {
    opacity: 1;
    left: 443px;
    background-color: ${SunIndigo};
    transform: scale(1);
    transform-origin: center;
  }

  60% {
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
    background-color: ${SunIndigo};
    animation: ${StaggeringIndigo} ease 3s;
    animation-fill-mode: forwards;
`

const StaggeringGreen = keyframes`
  from, 0% {
    opacity: 0;
    left: 350px;
    background-color: ${SunYellow};
  }

  33% {
    opacity: 1;
    left: 332px;
    background-color: ${SunGreen};
    transform: scale(1);
    transform-origin: center;
  }

  60% {
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
    background-color: ${SunGreen};
    animation: ${StaggeringGreen} ease 3s;
    animation-fill-mode: forwards;
`

const StaggeringYellow = keyframes`
  from, 0% {
    opacity: 0;
    left: 350px;
    background-color: ${SunYellow};
  }

  33% {
    opacity: 1;
    left: 221px;
    background-color: ${SunYellow};
    transform: scale(1);
    transform-origin: center;
  }

  60% {
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
    background-color: ${SunYellow};
    animation: ${StaggeringYellow} ease 3s;
    animation-fill-mode: forwards;
`

const StaggeringOrange = keyframes`
  from, 0% {
    opacity: 0;
    left: 350px;
    background-color: ${SunYellow};
  }

  33% {
    opacity: 1;
    left: 111px;
    background-color: ${SunOrange};
    transform: scale(1);
    transform-origin: center;
  }

  60% {
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
    background-color: ${SunOrange};
    animation: ${StaggeringOrange} ease 3s;
    animation-fill-mode: forwards;
`

const StaggeringRed = keyframes`
  from, 0% {
    opacity: 0;
    left: 350px;
    background-color: ${SunYellow};
  }

  33% {
    opacity: 1;
    left: 0px;
    background-color: ${SunRed};
    transform: scale(1);
    transform-origin: center;
  }

  60% {
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
    background-color: ${SunRed};
    animation: ${StaggeringRed} ease 3s;
    animation-fill-mode: forwards;
`

export class Sun extends React.Component {
    render() {
        return(
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
        );
    }
}