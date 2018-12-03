import * as React from 'react';
import styled from '@emotion/styled';
import { AirColor } from 'src/materials/materials';

export const AirDef = styled('div')`
    background-color: ${AirColor};
    width: 700px;
    height: 700px;
    // filter: blur(1.5rem);
`

export const AirBlur = styled('div')`
    filter: blur(1.5rem);
`

export const AirCompounds = styled('div')`
    display: flex;
    flex-direction: row;
    width: 700px;
    height: 700px;
    justify-content: space-between;
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
    width: 29%;
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
    height: 29%;
    text-decoration: none;
`

export const AirCompoundsSuperSmall = styled('div')`
    flex-direction: row;
    background-color: ${AirColor};
    width: 30%;
    text-decoration: none;
`

export class AirDefined extends React.Component {
    render() {
        return (
            <AirDef />
        );
    }
}

export class AirUndefined extends React.Component {
    render() {
        return (
            <AirBlur>
                <AirDef></AirDef>
            </AirBlur>
        );
    }
}

export class AirComposition extends React.Component {
    render() {
        return (
            <div style={{position: "relative"}}>
            <AirCompounds> 
                <AirCompoundsLeft>N2</AirCompoundsLeft>
                <AirCompoundsRight>
                    <O2>O2</O2>
                    <AirCompoundsSmall>
                        <AirCompoundsSuperSmall>Ar</AirCompoundsSuperSmall>
                        <AirCompoundsSuperSmall>CO2</AirCompoundsSuperSmall>
                        <AirCompoundsSuperSmall>...</AirCompoundsSuperSmall>
                    </AirCompoundsSmall>
                </AirCompoundsRight>
            </AirCompounds>
            <AirUndefined />
            </div>
        );
    }
}