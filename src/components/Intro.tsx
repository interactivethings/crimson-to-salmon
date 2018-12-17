import * as React from 'react';
import styled from '@emotion/styled'
import { IntroHeading, Intro1, Intro2, AirRedDark, SunRed, AirBlueLight } from 'src/materials/materials';
import { TextHighlighters } from 'src/Main';

export const IntroWrapper = styled('div')`
    width: 100vw;
    height: 100vh;
    position: relative;
`

export const BackgroundVideo = styled('video')`
    width: 100vw;
    height: 100vh;
    object-fit: cover;
    overflow-x: hidden;
`

export const ColorSwatch = styled('div')`
    width: 5vw;
    height: 5vh;
    position: absolute;
`

export class Intro extends React.Component {
    render() {
        return(
            <IntroWrapper>
                <IntroHeading>
                    <ColorSwatch style={{top: "50vh", left: "50vw", backgroundColor: AirBlueLight}}/>
                    <ColorSwatch style={{top: "30vh", left: "10vw", backgroundColor: SunRed}}/>
                    <ColorSwatch style={{top: "25vh", left: "70vw", backgroundColor: AirRedDark}}/>
                    <Intro1>
                        From <TextHighlighters style={{backgroundColor: AirRedDark}}>Crimson</TextHighlighters>
                    </Intro1>

                    <Intro2>
                        To <TextHighlighters style={{backgroundColor: SunRed}}>Salmon</TextHighlighters><br></br>
                        In<br></br>
                        30 Years
                    </Intro2> 
                </IntroHeading>
                <BackgroundVideo autoPlay loop>
                   <source src="/tctsity_bg_video.mp4"></source>
                </BackgroundVideo>
            </IntroWrapper>
        );
    }
}