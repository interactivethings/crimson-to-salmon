import * as React from 'react';
import styled from '@emotion/styled-base';
import { SunBlue, SunRed, SunYellow, LegendItem, AirBlue, AirRedDark, LegendLabelColor } from 'src/materials/materials';
import GradientSVG from '../zh_gradient.svg';

export const Legend = styled('div')`
    display: flex;
    width: 700px;
    justify-content: space-between;
    margin: 0.5em 0 0 0;
`

export const LegendScale = styled('div')`
    height: 20px;
    width: 700px; 
    margin: 2.5rem 0 0 0;
`



export class GradientBar extends React.Component {
    render() {
        return(
            <>
            <LegendScale style={{backgroundImage: "url(" + GradientSVG + ")"}}/>
                <Legend>
                    <LegendItem>0</LegendItem>
                    <LegendItem>→ Fine particle emission in 2016 (µg / m²)</LegendItem>
                    <LegendItem>292</LegendItem>
                </Legend>
            </>
        );
    }
}

export const StationLabels = styled('div')`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 700px;
    max-width: 20%;
`

export class ZurichLabels extends React.Component {
    render() {
        return(
            <>
                <LegendItem style={{position: "absolute", top: "-5vh"}}>↑ Checkpoint</LegendItem>
            <StationLabels>
                <LegendItem>Rosengartenstrasse</LegendItem>
                <LegendItem>Schimmelstrasse</LegendItem>
                <LegendItem>Stampfenbachstrasse</LegendItem>
            </StationLabels>
            </>
        );
    }
}

export const ScatteringLegendRoot = styled('div')`
        display: flex;
        flex-direction: row;
        margin: 5vh 0 0 0;
        justify-content: space-between;
`

export const LegendElement = styled('div')`
    display: flex;
    flex-direction: row;
    align-items: center;
`

export const DistanceLegendElement = styled('div')`
    position: absolute;
    left: -5vw;
    font-size: 1em;
    line-height: 120%;
    color: ${LegendLabelColor};
`

export const ScatterElement = styled('div')`
    height: 17.5px;
    border-radius: 8.75px;
    margin: 0 0.5rem 0 0;
`

export class ScatteringLegendBlue extends React.Component {
    render() {
        return (
            <ScatteringLegendRoot>
                <LegendElement>
                        <ScatterElement style={{width: 35 / 2, backgroundColor: SunYellow}}></ScatterElement>
                        <LegendItem>Ray of Sun</LegendItem>
                </LegendElement>

                <LegendElement>
                        <ScatterElement style={{width: 35 / 2, borderRadius: 0, backgroundColor: AirBlue}}></ScatterElement>
                        <LegendItem>Air molecule</LegendItem>
                </LegendElement>

                <LegendElement>
                        <ScatterElement style={{width: 35 / 2, backgroundColor: SunBlue}}></ScatterElement>
                        <LegendItem>short Wavelength</LegendItem>
                </LegendElement>

                <LegendElement>
                        <ScatterElement style={{width: 105 / 2, backgroundColor: SunRed}}></ScatterElement>
                        <LegendItem>long Wavelength</LegendItem>
                </LegendElement>
            </ScatteringLegendRoot>
        );
    }
}

export class ScatteringLegendRed extends React.Component {
    render() {
        return (
            <ScatteringLegendRoot>
            <LegendElement>
                    <ScatterElement style={{width: 35 / 2, backgroundColor: SunYellow}}></ScatterElement>
                    <LegendItem>Ray of Sun</LegendItem>
            </LegendElement>

            <LegendElement>
                    <ScatterElement style={{width: 35 / 2, borderRadius: 0, backgroundColor: AirBlue}}></ScatterElement>
                    <LegendItem>Air molecule</LegendItem>
            </LegendElement>

            <LegendElement>
                    <ScatterElement style={{width: 35 / 2, backgroundColor: SunBlue}}></ScatterElement>
                    <LegendItem>short Wavelength</LegendItem>
            </LegendElement>

            <LegendElement>
                    <ScatterElement style={{width: 105 / 2, backgroundColor: SunRed}}></ScatterElement>
                    <LegendItem>long Wavelength</LegendItem>
            </LegendElement>
        </ScatteringLegendRoot>
        );
    }
}

export class ScatteringLegendPolluted extends React.Component {
    render() {
        return (
            <ScatteringLegendRoot>
                <LegendElement>
                        <ScatterElement style={{width: 35 / 2, backgroundColor: SunYellow}}></ScatterElement>
                        <LegendItem>Ray of Sun</LegendItem>
                </LegendElement>

                <LegendElement>
                        <ScatterElement style={{width: 35 / 2, borderRadius: 0, backgroundColor: AirBlue}}></ScatterElement>
                        <LegendItem>Air molecule</LegendItem>
                </LegendElement>

                <LegendElement>
                        <ScatterElement style={{width: 105 / 2, backgroundColor: AirRedDark, borderRadius: 0}}></ScatterElement>
                        <LegendItem>Fine particle</LegendItem>
                </LegendElement>

                <LegendElement>
                        <ScatterElement style={{width: 35 / 2, backgroundColor: SunBlue}}></ScatterElement>
                        <LegendItem>short Wavelength</LegendItem>
                </LegendElement>

                <LegendElement>
                        <ScatterElement style={{width: 105 / 2, backgroundColor: SunRed}}></ScatterElement>
                        <LegendItem>long Wavelength</LegendItem>
                </LegendElement>
            </ScatteringLegendRoot>
        );
    }
}