import * as React from 'react';
import styled from '@emotion/styled'

export const IntroContainer = styled('div')`
    width: 300px;
    height: 300px;
    background-color: crimson;
`

export class Intro extends React.Component {
    render() {
        return(
            <IntroContainer>
                text
            </IntroContainer>
        );
    }
}