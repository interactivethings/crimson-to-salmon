import * as React from 'react';
import { VizWrapper, ElementTitle, ElementSubtitle, MainRed } from 'src/materials/materials';
import { Country } from 'src/components/Countries';
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

