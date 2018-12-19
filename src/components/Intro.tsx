import * as React from 'react';
import styled from '@emotion/styled'
import { IntroHeading, Intro1, Intro2, AirRedDark, SunRed, AirBlueLight, MainRed, IntroParagraph } from 'src/materials/materials';
import { TextHighlighters } from 'src/Main';

export const IntroWrapper = styled('div')`
    width: 100vw;
    height: 100vh;
    position: relative;
`

export const BackgroundVideo = styled('video')`
    width: 100vw;
    height: 100vh;
    background-color: ${MainRed};
    object-fit: cover;
`


export const ColorSwatch = styled('div')`
    width: 100px;
    height: 100px;
    position: absolute;
`

export class Intro extends React.Component {
    render() {
        return(
            <IntroWrapper>
                <IntroHeading>
                {/* <IntroParagraph>
                    Air pollutants are not only main reasons for severe health issues such as asthma or cancer, but also the main cause for global warming. Most of the time, these dangerous molecules are invisible to us. But their chemical properties in combination with their size create color shades when scattering the sun light. This generates a deadly color space for living beings and raises an essential question:
                    What can colors in the sky tell us about air pollution?
                </IntroParagraph> */}
                    <ColorSwatch style={{top: "75vh", left: "40vw", backgroundColor: AirBlueLight}}/>
                    <ColorSwatch style={{top: "40vh", left: "10vw", backgroundColor: SunRed}}/>
                    <ColorSwatch style={{top: "10vh", right: "10vw", backgroundColor: AirRedDark}}/>
                    <Intro1>
                        From <TextHighlighters style={{backgroundColor: AirRedDark}}>Crimson</TextHighlighters>
                    </Intro1>
                    <Intro2>
                        To <TextHighlighters style={{backgroundColor: SunRed}}>Salmon</TextHighlighters><br></br>
                        In<br></br>
                        16 Years
                    </Intro2> 
                    
                </IntroHeading>
                <BackgroundVideo autoPlay loop>
                   <source src="/tctsity_bg_video.mp4"></source>
                </BackgroundVideo>
                
            </IntroWrapper>
        );
    }
}

export const IntroTextWrapper = styled('section')`
    display: flex;
    width: 50%;
    height: 75vh;
    justify-content: center;
    align-items: center;
`

export class IntroText extends React.Component {
    render() {
        return(
            <IntroTextWrapper>
            <IntroParagraph>
                Air pollutants are not only main reasons for severe health issues such as asthma or cancer, but also the main cause for global warming. Most of the time, these dangerous molecules are invisible to us. But their chemical properties in combination with their size create color shades when scattering the sun light. This generates a deadly color space for living beings and raises an essential question:<br />
                <br />
                What can colors in the sky tell us about air pollution?
            </IntroParagraph>
            </IntroTextWrapper>
        );
    }
}