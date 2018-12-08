import * as React from 'react';
import styled from '@emotion/styled-base';
import { LabelColor } from 'src/materials/materials';
import GradientSVG from '../zh_gradient.svg';

export const Legend = styled('div')`
    display: flex;
    width: 700px;
    justify-content: space-between;
`

export const LegendScale = styled('div')`
    height: 20px;
    width: 700px; 
    margin: 0 0 0.5em 0;
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
                    <LegendItem>100</LegendItem>
                </Legend>
            </>
        );
    }
}

export const LabelRoot = styled('div')`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 700px;
`

export class GradientLabels extends React.Component {
    render() {
        return(
            <LabelRoot>
                <LegendItem>Stampfenbachstrasse</LegendItem>
                <LegendItem>Rosengartenstrasse</LegendItem>
                <LegendItem>Heubeeribüel</LegendItem>
                <LegendItem>Schimmelstrasse</LegendItem>
            </LabelRoot>
        );
    }
}