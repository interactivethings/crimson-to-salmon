import * as React from 'react';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/core';
import { AirBlueLight, ElementTitle, AirBlue, VizWrapper } from 'src/materials/materials';

// wrapping all into overall div

export const AirWrapper = styled('div')`
    position: relative;  
`

// image 1: blurry air molecules

const AirImage1 = keyframes`
    from, 25% {
        opacity: 1;
    }

    50% {
        opacity: 0;

    51% {
        opacity: 1;

    100% {
        opacity: 1;
`;

export const AirUndefined = styled('div')`
    width: 700px;
    height: 700px;
    background-color: ${AirBlueLight};
    filter: blur(1.5rem);
    position: absolute;
    top: 0;
    left: 0;
    // animation: ${AirImage1} 8s ease infinite;
    animation-fill-mode: forwards;
`

// image 2: air compounds

const AirImage2 = keyframes`
  from, 0% {
    opacity: 0;
  }

    50% {
      opacity: 1
  }

  85% {
    opacity: 0;
  }

  100% {
    opacity: 0;
  }
`;

export const AirCompounds = styled('div')`
    display: flex;
    flex-direction: row;
    width: 700px;
    height: 700px;
    justify-content: space-between;
    position: absolute; 
    top: 0;
    left: 0;
    animation: ${AirImage2} 8s infinite;
`

export const AirCompoundsLeft = styled('div')`
    width: 70%;
    justify-content: space-between;
    display: flex;
    flex-direction: column;
    background-color: ${AirBlue};
`

export const AirCompoundsRight = styled('div')`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 29.2%;
`

export const O2 = styled('div')`
    display: flex;
    background-color: ${AirBlue};
    height: 70%;
`

export const AirCompoundsSmall = styled('div')`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: 29.2%;
    text-decoration: none;
`

export const AirCompoundsSuperSmall = styled('div')`
    flex-direction: row;
    background-color: ${AirBlue};
    width: 31.2%;
    text-decoration: none;
`

// image 3: final air square

const AirImage3 = keyframes`
  from, 38% {
    opacity: 0;
  }

  75% {
    opacity: 1;
  }

  85% {
    opacity: 0;
  }

  100% {
    opacity: 0;
  }
`;

export const AirDefined = styled('div')`
    position: absolute;
    background-color: ${AirBlue};
    width: 700px;
    height: 700px;
    animation: ${AirImage3} 8s ease infinite;    
`

export class Air extends React.Component<{ runAnimation: boolean }> {
    render() {
        return (
            <VizWrapper>
                {/* image 1 */}
                <AirUndefined style={{ animationPlayState: this.props.runAnimation ? 'running' : 'paused'}}/>
            
                {/* image 2 */}
                <AirCompounds style={{ animationPlayState: this.props.runAnimation ? 'running' : 'paused'}}>
                    <AirCompoundsLeft>
                        <ElementTitle>N₂</ElementTitle>
                    </AirCompoundsLeft>
                    <AirCompoundsRight>
                        <O2>
                            <ElementTitle>
                            O₂
                            </ElementTitle>  
                        </O2>
                        <AirCompoundsSmall>
                            <AirCompoundsSuperSmall>
                                <ElementTitle>Ar</ElementTitle>
                            </AirCompoundsSuperSmall>
                            <AirCompoundsSuperSmall>
                                <ElementTitle>CO₂</ElementTitle>
                            </AirCompoundsSuperSmall>
                            <AirCompoundsSuperSmall>
                                <ElementTitle>...</ElementTitle>
                            </AirCompoundsSuperSmall>
                        </AirCompoundsSmall>
                    </AirCompoundsRight>
                </AirCompounds>
                {/* image 3 */}
                <AirDefined style={{ animationPlayState: this.props.runAnimation ? 'running' : 'paused'}}/>
            </VizWrapper>
        );
    }
}

export const AirElement = styled('div')`
    width: 35px; 
    height: 35px;
    border-radius: 0px;
    background-color: ${AirBlueLight};
    position: absolute;
`

