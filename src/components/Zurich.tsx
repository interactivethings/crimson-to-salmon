import * as React from 'react';
import { VizWrapper, ElementTitle, ElementSubtitle, MainRed, MaskColor } from 'src/materials/materials';
import { Country } from 'src/components/Countries';
import ZurichGradientSVG  from '../zh_gradient.svg';
import { GradientLabels, Legend, LegendItem } from './Legends';
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

export const Visualization = styled('div')`
    display: flex;
    flex-direction: column;
`

export const ValueRange = styled('div')`
    position: absolute;
    height: 175px;
    background-color: ${MaskColor};
    opacity: 0.8;
`

// another comp or const which has already masked the four divs (whose l + r values are determined by data) with the GradientBar. position absolute to overlay?
// map the color range / PM10 range to the width. so if the element would start at ie 48 which would be around 350px etc. how to close it then to make it a     container? when absolute positioned set left and with with this! push the values into an array
// heubeeribüel: no PM10 data on hand.
// add annotation that there are days when no data was recorded (NaN).
// smallest and largest values can be hardcoded but having data on hand calls for using it. attention: current design macht, dass man glaubt, dass die station generell über dem limitwert ist. dabei sind es im falle der stampfenbachstrasse gerade mal 25 tage in 2016. irgendwo vermerken?

export class ZurichGradient extends React.Component {
    render() {
        return (
            <ZurichGradientRoot>
                <GradientLabels />
                <Visualization>
                    <VizWrapper style={{backgroundImage: "url(" + ZurichGradientSVG + ")"}}>
                        {/* <ElementTitle>Switzerland</ElementTitle>
                        <ElementSubtitle>Zurich</ElementSubtitle>  */}
                        <ValueRange style={{width: 300, top: 0, left: 73}}/>
                        <ValueRange style={{width: 34, top: 175, left: 305}}/>
                        <ValueRange style={{width: 543, top: 350, left: 92}}/>
                        <ValueRange style={{width: 145, top: 525, left: 123}}/>
                    </VizWrapper>
                    <Legend>
                        <LegendItem>0</LegendItem>
                        <LegendItem>⟶ PM 10 per Year (µg / m²)</LegendItem>
                        <LegendItem>292</LegendItem>
                    </Legend>                
                </Visualization>
            </ZurichGradientRoot>
        );
    }
}

export class ZurichDetail extends React.Component {
    render() {
        return(
            <>
            </>
        );
    }
}

