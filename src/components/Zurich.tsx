import * as React from 'react';
import { VizWrapper, ElementTitle, ElementSubtitle, MainRed } from 'src/materials/materials';
import { Country, SquareWrapper } from 'src/components/Countries';
import ZurichGradientSVG  from '../zh_gradient.svg';
import { Legend, LegendItem } from './Legends';
import styled from '@emotion/styled-base';
import { scaleLinear } from 'd3-scale';
// import { color } from 'd3-color';

// import { color } from 'd3-color';
// import styled from '@emotion/styled-base';
// import { color } from 'd3-color';

export type Detail = {PM10: number}

export interface Props {
    details: Array<Detail>
}

export interface Props {
    countries: Array<Country>
}

export const ZHSquare = styled('div')`
`

// export class Zurich extends React.Component<Props> {
//     render() {
//         return (
//             <VizWrapper>
//                 {this.props.countries.map(country => 
//                 <ZHSquare style={{backgroundColor: color(country.Switzerland.PM10}}>
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

export const ValueRange = styled('div')`
    position: absolute;
    height: 230px;
    opacity: 0.8;
`

// another comp or const which has already masked the four divs (whose l + r values are determined by data) with the GradientBar. position absolute to overlay?
// map the color range / PM10 range to the width. so if the element would start at ie 48 which would be around 350px etc. how to close it then to make it a     container? when absolute positioned set left and with with this! push the values into an array
// heubeeribüel: no PM10 data on hand.
// add annotation that there are days when no data was recorded (NaN).
// smallest and largest values can be hardcoded but having data on hand calls for using it. attention: current design macht, dass man glaubt, dass die station generell über dem limitwert ist. dabei sind es im falle der stampfenbachstrasse gerade mal 25 tage in 2016. irgendwo vermerken?


// use max value of countries data set from 2016. here hardcoded with value 292...
// on hover show the two values? or number of days how high and low values within 2016? 
const size = scaleLinear()
    .domain([0, 100])
    .rangeRound([1, 700] as any)

console.log(size(3))

export class ZurichGradient extends React.Component {
    render() {
        return (
                <SquareWrapper>
                    {/* {this.props.details.map(detail =>  */}
                    <VizWrapper style={{mask: "url(" + ZurichGradientSVG + ")"}}>
                        {/* <ElementTitle>Switzerland</ElementTitle>
                        <ElementSubtitle>Zurich</ElementSubtitle>  */}
                        
                        {/* Rosengartenstrasse */}
                        <ValueRange style={{backgroundImage: "url(" + ZurichGradientSVG + ")", top: 0, left: size(3.56), width: size(81.99 - 3.56)}}/>

                        {/* Schimmelstrasse */}
                        <ValueRange style={{backgroundImage: "url(" + ZurichGradientSVG + ")", top: 235, left: size(1.94), width: size(66.27 - 1.94)}}/>

                        {/* Stampfenbachstrasse */}
                        <ValueRange style={{backgroundImage: "url(" + ZurichGradientSVG + ")", top: 470, left: size(3.38), width: size(56 - 3.38)}}/>
                    </VizWrapper>
                    {/* )} */}

                    <Legend>
                        <LegendItem>0</LegendItem>
                        <LegendItem>⟶ PM 10 per Year (µg / m²)</LegendItem>
                        <LegendItem>292</LegendItem>
                    </Legend>                
                </SquareWrapper>
        );
    }
}

export class LimitValues extends React.Component {
    render() {
        return(
            <>
            </>
        );
    }
}

