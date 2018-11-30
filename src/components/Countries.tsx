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

 interface Countries {  
     name: string;
     city: string;
     PM10: number;
  }

const Countries = [{name: 'Switzerland', city: 'Zürich', PM10: 292}, {name: 'Mexico', city: 'Mexico City', PM10: 16}, {name: 'Korea', city: 'Seoul', PM10: 23}, {name: 'France', city: 'Paris', PM10: 86},  {name: 'France', city: 'Paris', PM10: 45},  {name: 'France', city: 'Paris', PM10: 38}];




export class TwentyCountries extends React.Component{
    render() {
        return(
            <SquareWrapper>
                {Countries.sort((b, a)  => a.PM10 - b.PM10) .map(country => 
                <>
                <SquareElement style={{backgroundColor: color(country.PM10)}}>
                    <ElementTitle>{country.name}</ElementTitle>
                    <ElementSubtitle>{country.city}</ElementSubtitle> 
                </SquareElement>
                </>
                )}
                {/* <LegendScale></LegendScale> */}
            </SquareWrapper>
        );
    }
}