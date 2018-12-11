import * as React from 'react';
import styled from '@emotion/styled'
import { IntroHeading, Intro1, Intro2, MainRed } from 'src/materials/materials';
import { small, medium } from 'src/materials/breakpoints';
// import VideoStill from '../public/tctsity_bg_video.mp4';

export const IntroWrapper = styled('div')`
    width: 100vw;
    height: 100vh;
    background-color: ${MainRed};
    position: relative;
`

export const BackgroundVideo = styled('img')`
    width: 100vw;
    height: 100vh;
`

export const IntroGradient = styled('div')`
    position: absolute;
    top: 20vh;
    width: 10px;
    height: 20vh;
    background-color: black;

    @media (max-width: ${small}px)  {
        left: 30vw;   
    };
        
    @media (min-width: ${small}px) and (max-width: ${medium}px) {
        left: 50vw;
    };

    @media (min-width: ${medium}px) {
        left: 60vh;
    };
`

export class Intro extends React.Component {
    render() {
        return(
            <IntroWrapper>
                <IntroHeading>
                    <Intro1>
                        From Crimson
                    </Intro1>
                    <IntroGradient />

                    <Intro2>
                        To Salmon<br></br>
                        In<br></br>
                        30 Years
                    </Intro2> 
                    {/* <Intro3>
                        In
                    </Intro3>
                    <Intro4>
                        30 Years
                    </Intro4> */}
                </IntroHeading>
                {/* <BackgroundVideo src={VideoStill}> 
                </BackgroundVideo> */}
            </IntroWrapper>
        );
    }
}