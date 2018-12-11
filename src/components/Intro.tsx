import * as React from 'react';
import styled from '@emotion/styled'
import { IntroHeading, Intro1, Intro2, Intro3, Intro4, MainRed } from 'src/materials/materials';

export const IntroWrapper = styled('div')`
    width: 100vw;
    height: 100vh;
    background-color: ${MainRed};
    position: relative;
`

export const BackgroundVideo = styled('video')`
    width: 100vw;
    height: 100vh;
`

export class Intro extends React.Component {
    render() {
        return(
            <IntroWrapper>
                <IntroHeading>
                    <Intro1>
                        From Crimson
                    </Intro1>
                    <Intro2>
                        To Salmon
                    </Intro2> 
                    <Intro3>
                        In
                    </Intro3>
                    <Intro4>
                        30 Years
                    </Intro4>
                </IntroHeading>
                <BackgroundVideo loop autoPlay muted> 
                    <video src="http://www.w3schools.com/html/movie.mp4" controls />
                </BackgroundVideo>
            </IntroWrapper>
        );
    }
}