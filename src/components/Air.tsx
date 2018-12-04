import * as React from 'react';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/core';
import { AirColor, ElementTitle, ParagraphStory, Chapter } from 'src/materials/materials';

// wrapping all into overall div

export const AirWrapper = styled('div')`
    position: relative;

    width: 40%;
`

// image 1: blurry air molecules

// export const AirBlur = styled('div')`
//     filter: blur(1.5rem);
// `

const AirImage1 = keyframes`
  from, 0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`;

export const AirUndefined = styled('div')`
    width: 700px;
    height: 700px;
    background-color: ${AirColor};
    filter: blur(1.5rem);
    position: absolute;
    top: 0;
    left: 0;
    // animation: ${AirImage1} 4s ease;
`

// image 2: air compounds

const AirImage2 = keyframes`
  from, 0% {
    opacity: 0;
  }

  90% {
      opactiy: 0;
  }

  100% {
    opacity: 1;
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
    animation: ${AirImage2} 2s ease;
`

export const AirCompoundsLeft = styled('div')`
    width: 70%;
    justify-content: space-between;
    display: flex;
    flex-direction: column;
    background-color: ${AirColor};
`

export const AirCompoundsRight = styled('div')`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 29.2%;
`

export const O2 = styled('div')`
    display: flex;
    background-color: ${AirColor};
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
    background-color: ${AirColor};
    width: 31.2%;
    text-decoration: none;
`

// image 3: final air square

const AirImage3 = keyframes`
  from, 0% {
    opacity: 0;
  }

  90% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`;

export const AirDefined = styled('div')`
    position: absolute;
    background-color: ${AirColor};
    width: 700px;
    height: 700px;
    animation: ${AirImage3} 4s ease;    
`

export class Air extends React.Component {
    render() {
        return (
            
            <Chapter>
            <AirWrapper>
                {/* image 1 */}
                <AirUndefined />
            
                {/* image 2 */}
                <AirCompounds> 
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
                <AirDefined />
            </AirWrapper>
            

                <ParagraphStory>
                It is made up of only five gases: Nitrogen (N₂), Oxygen (O₂),  Argon (Ar), and Carbon Dioxide (CO₂). Several other compounds, such as natural Ozone (O₃), are also present.
                </ParagraphStory>
            </Chapter>
        );
    }
}