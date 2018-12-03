import * as React from 'react';
import styled from '@emotion/styled';
import { AirColor, ElementTitle } from 'src/materials/materials';

// wrapping all into overall div

export const AirWrapper = styled('div')`
    position: relative;
`

// image 1: blurry air molecules

export const AirBlur = styled('div')`
    filter: blur(1.5rem);
`

export class AirUndef extends React.Component {
    render() {
        return (
            <AirBlur>
                <AirDefined />
            </AirBlur>
        );
    }
}

export const AirUndefined = styled('div')`
    position: absolute;
    top: 0;
    left: 0;
`

// image 2: air compounds

export const AirCompounds = styled('div')`
    display: flex;
    flex-direction: row;
    width: 700px;
    height: 700px;
    justify-content: space-between;
    position: absolute;
    top: 0;
    left: 0;
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

export const AirDefined = styled('div')`
    background-color: ${AirColor};
    width: 700px;
    height: 700px;
    
`

export class Air extends React.Component {
    render() {
        return (
            <AirWrapper>
                {/* image 3 */}
                <AirDefined />

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

                {/* image 1 */}
                <AirUndefined>
                    <AirUndef />
                </AirUndefined>
            </AirWrapper>
        );
    }
}