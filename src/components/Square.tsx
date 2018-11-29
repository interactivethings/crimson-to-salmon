import * as React from 'react'
import styled from '@emotion/styled'
import { scaleLinear } from 'd3-scale';
import { interpolateHcl } from 'd3-interpolate';

export const SquareWrapper = styled('div')`
    background-color: green;
    flex-wrap: wrap;
    align-items: flex-start;
    display: flex;
    max-width: 700px;
`

export const SquareElement = styled('div')`
    flex-basis: 20%;
    height: 175px;
    background-color: yellow;
`

export const SquareTitle = styled('p')`
`

 interface Countries {  
     name: string;
     city: string;
     PM10: number;
  }

const Countries = [{name: 'Switzerland', city: 'Zürich', PM10: 2}, {name: 'Mexico', city: 'Mexico City', PM10: 9}, {name: 'Korea', city: 'Seoul', PM10: 16}, {name: 'France', city: 'Paris', PM10: 7},  {name: 'France', city: 'Paris', PM10: 16},  {name: 'France', city: 'Paris', PM10: 16}];

const color = scaleLinear()
    .domain([1, 20])
    .range(["white", "red"] as any)
    .interpolate(interpolateHcl as any) as any;
export class Square extends React.Component{
    render() {
        return(
            <SquareWrapper>
                {Countries.sort((b, a) => a.PM10 - b.PM10).map(country => 
                <>
                <SquareElement style={{backgroundColor: color(country.PM10)}}>
                    <div>
                        {/* padding for name and so on */}
                    {country.name}
                    </div>
                    <div> 
                    {country.city}
                    </div> 
                </SquareElement>
                </>
                )}
            </SquareWrapper>
        );
    }
}