import * as React from 'react'
import styled from '@emotion/styled'
import { scaleLinear } from 'd3-scale';
import { interpolateRgb } from 'd3-interpolate';
import { ElementTitle, ElementSubtitle } from 'src/materials/materials';
import { GradientBar } from './Legends';

const colorCountries = scaleLinear()
    // .domain([min(detail => c.PM10) as number, max(countries => c.PM10) as number ])
    .domain([0, 292])
    .range(['#B2D5FF', "red"] as any)
    .interpolate(interpolateRgb as any) as any;
    console.log(colorCountries(24))

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

export type Country = {Country: string, City: string, PM10: number}

export interface Props {
    countries: Array<Country>
}

export class TwentyCountries extends React.Component <Props>{
    render() {
        return(
            <SquareWrapper>
                {this.props.countries.sort((b, a)  => a.PM10 - b.PM10) .map((country, i) => 
                <>
                <SquareElement key={i} style={{backgroundColor: colorCountries(country.PM10)}}>
                    <ElementTitle>{country.Country}</ElementTitle>
                    <ElementSubtitle>{country.City}</ElementSubtitle> 
                </SquareElement>
                </>
                )}
                <GradientBar />
            </SquareWrapper>
        );
    }
}