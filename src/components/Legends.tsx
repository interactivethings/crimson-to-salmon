import * as React from 'react';
import styled from '@emotion/styled-base';
import { LabelColor, SunBlue, SunRed, SunYellow, AirBlueLight, AirRedDark } from 'src/materials/materials';
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

export const LegendItem = styled('p')`
    font-size: 1em;
    line-height: 120%;
    color: ${LabelColor};
`

export class GradientBar extends React.Component {
    render() {
        return(
            <>
            <LegendScale style={{backgroundImage: "url(" + GradientSVG + ")"}}/>
                <Legend>
                    <LegendItem>0</LegendItem>
                    <LegendItem>⟶ PM 10 per Year (µg / m²)</LegendItem>
                    <LegendItem>292</LegendItem>
                </Legend>
            </>
        );
    }
}

// wrapper 900px, viz centred, columns with the legends 
// check unicode arrows to be the same for x and y axiss


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
        flex-direction: column;
        margin: 5vh 0 0 0;
`

export const LegendElement = styled('div')`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 0.5vh 0 0.5vh 0;
`

export const LegendLabelWrapper = styled('div')`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
`
export const LegendItemWrapper = styled('div')`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    width: 18%;
`

export const ScatterElement = styled('div')`
    height: 35px;
    border-radius: 17.5px;
`

export class ScatteringLegend extends React.Component {
    render() {
        return (
            <ScatteringLegendRoot>
                <LegendElement>
                    <LegendItemWrapper>
                        <ScatterElement style={{width: 35, backgroundColor: SunYellow}}></ScatterElement>
                    </LegendItemWrapper>

                    <LegendLabelWrapper>
                        <LegendItem>Ray of Sun</LegendItem>
                    </LegendLabelWrapper>
                </LegendElement>

                <LegendElement>
                    <LegendItemWrapper>
                        <ScatterElement style={{width: 35, borderRadius: 0, backgroundColor: AirBlueLight}}></ScatterElement>
                    </LegendItemWrapper>

                    <LegendLabelWrapper>
                        <LegendItem>Air molecule</LegendItem>
                    </LegendLabelWrapper>
                </LegendElement>

                <LegendElement>
                    <LegendItemWrapper>
                        <ScatterElement style={{width: 35, backgroundColor: SunBlue}}></ScatterElement>
                    </LegendItemWrapper>

                    <LegendLabelWrapper>
                        <LegendItem>short Wavelength</LegendItem>
                    </LegendLabelWrapper>
                </LegendElement>

                <LegendElement>
                    <LegendItemWrapper>
                        <ScatterElement style={{width: 105, backgroundColor: SunRed}}></ScatterElement>
                    </LegendItemWrapper>

                    <LegendLabelWrapper>
                        <LegendItem>long Wavelength</LegendItem>
                    </LegendLabelWrapper>
                </LegendElement>

                <LegendElement>
                    <LegendItemWrapper>
                        <ScatterElement style={{width: 105, borderRadius: 0, backgroundColor: AirRedDark}}></ScatterElement>
                    </LegendItemWrapper>

                    <LegendLabelWrapper>
                        <LegendItem>Pollution molecule</LegendItem>
                    </LegendLabelWrapper>
                </LegendElement>
            </ScatteringLegendRoot>

        );
    }
}