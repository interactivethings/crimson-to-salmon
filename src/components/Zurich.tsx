import * as React from 'react';
import { VizWrapper, ElementTitle, ElementSubtitle, MainRed } from 'src/materials/materials';
import { Country } from 'src/components/Countries';
import ZurichGradientSVG  from '../zh_gradient.svg';
import { GradientBar, GradientLabels } from './Legends';
import styled from '@emotion/styled-base';
// import { color } from 'd3-color';
// import styled from '@emotion/styled-base';
// import { color } from 'd3-color';

export interface Props {
    countries: Array<Country>
}

// export class Zurich extends React.Component<Props> {
//     render() {
//         return (
//             <VizWrapper>
//                 {this.props.countries.map(country => 
//                 // <ZHSquare style={{backgroundColor: color(country.PM10[19])}}>
//                 <ZHSquare>
//                     <ElementTitle>{country.Country[19]}</ElementTitle>
//                     <ElementSubtitle>{country.City[19]}</ElementSubtitle> 
//                 </ZHSquare>
//                 )}
//             </VizWrapper>
//         );
//     }
// }

// how to access array to get index 19 for zurich to use for background color and labels?

export class Zurich extends React.Component {
    render() {
        return (
            <VizWrapper style={{backgroundColor: MainRed}}>
                    <ElementTitle>Switzerland</ElementTitle>
                    <ElementSubtitle>Zurich</ElementSubtitle> 
            </VizWrapper>
        );
    }
}

export const ZurichGradientRoot = styled('div')`
    display: flex;
    flex-direction: row;
`

export class ZurichGradient extends React.Component {
    render() {
        return (
            <ZurichGradientRoot>
                <GradientLabels />

                <VizWrapper style={{backgroundImage: "url(" + ZurichGradientSVG + ")"}}>
                    <ElementTitle>Switzerland</ElementTitle>
                    <ElementSubtitle>Zurich</ElementSubtitle> 
                </VizWrapper>
                <GradientBar />
            </ZurichGradientRoot>
        );
    }
}

