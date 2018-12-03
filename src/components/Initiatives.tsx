import * as React from 'react';
import styled from '@emotion/styled-base';
import { InitiativesTitle, MainRed } from 'src/materials/materials';

export const InitiativesElement = styled('div')`
    display: flex;
    flex-direction: row;
    width: 700px;
    height: 700px;
    justify-content: space-between;
`

export const InitiativesElementLeft = styled('a')`
    background-color: ${MainRed};
    width: 49.6%;
    justify-content: space-between;
    display: flex;
    flex-direction: column;
    text-decoration: none;
    transition: 0.5s;

    // & :hover {
    //      background-color: white;
    //     }
`

export const InitiativesElementRight = styled('div')`
    width: 49.6%;
    justify-content: space-between;
    display: flex;
    flex-direction: column;
`

export const InitiativesElementSmall = styled('a')`
    display: flex;
    flex-direction: column;
    background-color: ${MainRed};
    height: 49.6%;
    text-decoration: none;
`

export class Initiatives extends React.Component {
    render() {
        return (
                <InitiativesElement>
                    <InitiativesElementLeft href="https://the-hundert.com/startups/green-city-solutions/">
                        <InitiativesTitle>01<br></br>Concrete Tree</InitiativesTitle>
                    </InitiativesElementLeft>

                    <InitiativesElementRight>
                        <InitiativesElementSmall href="https://www.bloomberg.org/program/environment/climatechallenge/">
                            <InitiativesTitle>02<br></br>American Cities Climate Challenge</InitiativesTitle>
                        </InitiativesElementSmall>
                        <InitiativesElementSmall href="https://exoplanets.interactivethings.io/">
                            <InitiativesTitle>03<br></br>Local Initiative By The Citizen of Zurich</InitiativesTitle>
                        </InitiativesElementSmall>
                    </InitiativesElementRight>
                </InitiativesElement>
        );
    }
}