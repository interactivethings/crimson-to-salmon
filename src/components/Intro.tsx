import * as React from 'react';
import styled from '@emotion/styled'
import { IntroHeading, Intro1, Intro2, AirRedDark, SunRed, AirBlueLight, MainRed, IntroParagraph } from 'src/materials/materials';
import { TextHighlighters } from 'src/Main';
import { small, medium } from 'src/materials/breakpoints';

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


export const ColorSwatch1 = styled('div')`
    top: 75%;
    left: 40%;
    position: absolute;
    background-color: ${AirBlueLight};

    @media (max-width: ${small}px)  {
        width: 50px;
        height: 50px;
    };

    @media (min-width: ${small}px) and (max-width: ${medium}px) {
        width: 70px;
        height: 70px;
    };

    @media (min-width: ${medium}px) {
        width: 100px;
        height: 100px;
    };
`

export const ColorSwatch2 = styled('div')`
    top: 40%;
    position: absolute;
    background-color: ${SunRed};

    @media (max-width: ${small}px)  {
        left: 5%;
        width: 50px;
        height: 50px;
    };

    @media (min-width: ${small}px) and (max-width: ${medium}px) {
        width: 70px;
        height: 70px;
        left: 5%;  
    };

    @media (min-width: ${medium}px) {
        width: 100px;
        height: 100px;
        left: 10%;  
    };
`

export const ColorSwatch3 = styled('div')`
    top: 10%;
    position: absolute;
    background-color: ${AirRedDark};

    @media (max-width: ${small}px)  {
        right: 5%;
        width: 50px;
        height: 50px;
    };

    @media (min-width: ${small}px) and (max-width: ${medium}px) {
        width: 70px;
        height: 70px;
        right: 5%;
    };

    @media (min-width: ${medium}px) {
        width: 100px;
        height: 100px;
        right: 10%;
    };
`

export class Intro extends React.Component {
    render() {
        return(
            <IntroWrapper>
                <IntroHeading>
                    <ColorSwatch1 />
                    <ColorSwatch2 />
                    <ColorSwatch3 />
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
    justify-content: center;
    align-items: center;

    @media (max-width: ${small}px)  {
        width: 80%;
        height: 70vh;
    };

     @media (min-width: ${small}px) and (max-width: ${medium}px) {
        height: 90vh;
        width: 75%;
    };

      @media (min-width: ${medium}px) {
        width: 50%;
        height: 75vh;   
    };
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