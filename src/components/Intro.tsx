import * as React from 'react';
import styled from '@emotion/styled'

export const IntroContainer = styled('div')`
    width: 100vw;
    height: 100vh;
    background-color: crimson;
`

export class Intro extends React.Component {
    render() {
        return(
            <IntroContainer>
                From Crimson To Salmon In 30 Years
            </IntroContainer>
        );
    }
}