import * as React from 'react'
import styled from '@emotion/styled'
import { scaleLinear } from 'd3-scale';
import { interpolateRgb } from 'd3-interpolate';
import { ElementTitle, ElementSubtitle, TextColor } from 'src/materials/materials';
import { GradientBar } from './Legends';
import { keyframes } from '@emotion/core';

const colorCountries = scaleLinear()
    // .domain([min(detail => c.PM10) as number, max(countries => c.PM10) as number ])
    .domain([0, 292])
    .range(['#B2D5FF', '#9B0000'] as any)
    .interpolate(interpolateRgb as any) as any;
    console.log(colorCountries(0))

export const SquareWrapper = styled('div')`
    flex-wrap: wrap;
    display: flex;
    max-width: 700px;
`


// const ValueRangeBars =  => keyframes`
//     from, 0% {
//         width: 0;
//     }

//     100% {
//         width: ${width}px;
//     }
// `

// export const ValueRangeDetail= styled('div')`
//     position: absolute;
//     animation: ${(props: { bars: number }) => ValueRangeBars(props.bars)} 2s ease;
//     `

export const SquareElement = styled('div')`
    flex-basis: 20%;
    height: 175px;
    
`
// border: ${(props: {border: number}) => SwissHighlight(props.border)}px;

// const SwissHighlight = (border: number) => keyframes`
//     from, 70% {
//         border: 0;
//     }

//     100% {
//         border: ${border};
//     }
// `;

const SwissHighlight = keyframes`
    from, 0% {
        opacity: 0;
    }

    20% {
        opacity: 1;
    }

    100% {
        opacity: 1;
    }
`;

export const SquareElementHighlight = styled('div')`
    border: solid 2px ${TextColor};
    position: absolute;
    top: 525px;
    left: 420px;
    width: 136px;
    height: 171px;
    animation-name: ${SwissHighlight};
    animation-duration: 8s;
    animation-iteration-count: infinite;
`

export type Country = {Country: string, City: string, PM10: number}

export class TwentyCountries extends React.Component <{ countries: Array<Country> }>{
    render() {
        return(
            <SquareWrapper >
                {this.props.countries.sort((b, a)  => a.PM10 - b.PM10) .map((country, i) =>
                <SquareElement key={i} style={{backgroundColor: colorCountries(country.PM10)}}>
                    <ElementTitle>{country.Country}</ElementTitle>
                    <ElementSubtitle>{country.City}</ElementSubtitle>
                    <ElementSubtitle>{(country.PM10).toFixed(1)}</ElementSubtitle> 
                </SquareElement>
                )}
                <GradientBar />
            </SquareWrapper>
        );
    }
}

export class HighlightSwitzerland extends React.Component<{ runAnimation: boolean }> {
    render(){
        return(
            <>
            <SquareElementHighlight style={{animationPlayState: this.props.runAnimation ? 'running' : 'paused'}}/>
            </>
        );
    }
}