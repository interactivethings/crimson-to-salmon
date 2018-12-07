import * as React from 'react'
import styled from '@emotion/styled'
import { scaleLinear } from 'd3-scale';
import { interpolateHcl } from 'd3-interpolate';
import { ElementTitle, ElementSubtitle } from 'src/materials/materials';
// import { countries } from 'src';
// import { min, max } from 'd3-array';

const color = scaleLinear()
    // .domain([min(countries => c.PM10) as number, max(countries => c.PM10) as number ])
    .domain([16, 292])
    .range(["white", "red"] as any)
    .interpolate(interpolateHcl as any) as any;

export const SquareWrapper = styled('div')`
    flex-wrap: wrap;
    display: flex;
    max-width: 700px;

`

export const SquareElement = styled('div')`
    flex-basis: 20%;
    height: 175px;
    background-color: yellow;
`
// more elegant way of doing it?

// export const LegendScale = styled('div')`
//     height: 10px;
//     width: 700px; 
//     background-color: ${color()};
// `

export type Country = {Country: string, City: string, PM10: number}

interface Props {
    countries: Array<Country>
}

export class TwentyCountries extends React.Component <Props>{
    render() {
        return(
            <SquareWrapper>
                {this.props.countries.sort((b, a)  => a.PM10 - b.PM10) .map(country => 
                <>
                <SquareElement style={{backgroundColor: color(country.PM10)}}>
                    <ElementTitle>{country.Country}</ElementTitle>
                    <ElementSubtitle>{country.City}</ElementSubtitle> 
                </SquareElement>
                </>
                )}
                {/* <LegendScale></LegendScale> */}
            </SquareWrapper>
        );
    }
}