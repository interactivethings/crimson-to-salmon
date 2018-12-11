import * as React from 'react';
import { VizWrapper, ElementTitle, ElementSubtitle, MainRed, AirBlueLight } from 'src/materials/materials';
import { Country, SquareWrapper } from 'src/components/Countries';
import ZurichGradientSVG  from '../zh_gradient.svg';
import { Legend, LegendItem } from './Legends';
import styled from '@emotion/styled-base';
import { scaleLinear } from 'd3-scale';
import { keyframes } from '@emotion/core';


export type Detail = {PM10: number}

export interface Props {
    details: Array<Detail>
}

export interface Props {
    countries: Array<Country>
}

export const ZHSquare = styled('div')`
`

// const ZHSquare = styled('div')(
// 	{
// 	borderRadius: 20,
// 	},
// 	(props: { backgroundColor: string }) => ({
// 		backgroundColor: props.color
//   }),
//   (props: { width: number }) => ({
// 		height: props.width
//   })
// );

// export class Zurich extends React.Component<Props> {
//     render() {
//         return (
//             <VizWrapper>
//                 {this.props.countries.map(country => 
//                 <ZHSquare style={{backgroundColor: color(country[0][16])}}>
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
                        <LimitValues />
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

const LimitIndex = keyframes`
  from, 0% {
    left: 700px;
    opacity: 0;
  }

  30% {
    left: 333px;
    opacity: 1;
  }
`;

export const LimitIndicator = styled('div')`
    position: absolute;
    height: 700px;
    width: 5px;
    background-color: black;
    animation: ${LimitIndex} 10s;
    `

const LimitAreas = keyframes`
    from, 80% {
      opacity: 0;
    }
  
    100% {
      opacity: 0.3;
    }
  `;
    

export const LimitAreaLeft = styled('div')`
    position: absolute;
    height: 700px;
    top: 0;
    left: 0;
    background-color: ${AirBlueLight};
    opacity: 0.3;
    animation: ${LimitAreas} 10s ease;
`

export const LimitAreaRight = styled('div')`
    position: absolute;
    height: 700px;
    top: 0;
    left: 0;
    background-color: ${MainRed};
    opacity: 0.3;
    animation: ${LimitAreas} 10s ease;
`

export class LimitValues extends React.Component {
    render() {
        return(
            <>
            <LimitAreaLeft style={{width: size(20)}}/>
            <LimitAreaRight style={{left: size(20), width: size(80)}}/>
            <LimitIndicator style={{left: size(20)}}/>
            </>
        );
    }
}

