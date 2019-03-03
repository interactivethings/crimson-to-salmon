import * as React from 'react';
import './index.css';
import { Intro, IntroText } from './components/Intro';
import { Air } from './components/Air';
import styled from '@emotion/styled-base';
import { ScatteringBlue, ScatteringPolluted, ScatteringRed } from './components/Scattering';
import { Country, TwentyCountries, HighlightSwitzerland } from './components/Countries';
import { Initiatives } from './components/Initiatives';
import { Sun } from './components/Sun';
import { Station, Switzerland, Zurich, Limits } from './components/Zurich';
import { Paragraph, Heading, AirBlue, SunRed, SunYellow, AirBlueLight, SunBlue, AirRedDark, MainRed, ParagraphAir, ParagraphTwo, ParagraphDaytime, ParagraphPolluted, ParagraphGlobal, ParagraphCheckpoints, ParagraphInitiatives, ParagraphInitiativesTwo, IntroHeading, Intro1 } from './materials/materials';
import { useRef } from "react";
import { Conclusion, FooterLink } from './components/Footer';
import { small, medium } from './materials/breakpoints';
const { useInView } = require("react-intersection-observer")


export const MainRoot = styled('div')`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
`

export const MainRootTop = styled('div')`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    background: rgb(255,85,85); /* Old browsers */
    background: -moz-linear-gradient(top, rgba(255,85,85,0.95) 0%, rgba(255,255,255,1) 100%); /* FF3.6-15 */
    background: -webkit-linear-gradient(top, rgba(255,85,85,0.95) 0%,rgba(255,255,255,1) 100%); /* Chrome10-25,Safari5.1-6 */
    background: linear-gradient(to bottom, rgba(255,85,85,0.95) 0%,rgba(255,255,255,1) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ff5555', endColorstr='#ffffff',GradientType=0 ); /* IE6-9 */
`

export const MainRootBottom = styled('div')`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    background-image: linear-gradient(to top, rgba(255,85,85,0.95), rgba(255,255,255,0));

    background: rgb(255,255,255); /* Old browsers */
    background: -moz-linear-gradient(top, rgba(255,255,255,1) 0%, rgba(255,85,85,1) 100%); /* FF3.6-15 */
    background: -webkit-linear-gradient(top, rgba(255,255,255,1) 0%,rgba(255,85,85,1) 100%); /* Chrome10-25,Safari5.1-6 */
    background: linear-gradient(to bottom, rgba(255,255,255,1) 0%,rgba(255,85,85,1) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffffff', endColorstr='#ff5555',GradientType=0 ); /* IE6-9 */
`

export const Chapter = styled('section')`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    
    @media (max-width: ${small}px)  {
        width: 100%; 
        justify-content: center;
        margin: 6vh 0 5vh 0;  
    };

    @media (min-width: ${small}px) and (max-width: ${medium}px) {
        justify-content: center;
        width: 90%;
        margin: 6vh 0 5vh 0;
    };

    @media (min-width: ${medium}px) {
        width: 70%;
        justify-content: space-between;
        align-items: flex-start;
        margin: 15vh 0 20vh 0;
   };
`

export const ParagraphArea = styled('div')`
    display: flex;
    flex-direction: column;

    @media (max-width: ${small}px)  {
        width: 85%; 
        justify-content: center;
        align-items: left; 
    };

    @media (min-width: ${small}px) and (max-width: ${medium}px) {
        justify-content: center;
        align-items: left; 
        max-width: 950px;
    };

    @media (min-width: ${medium}px) {
        justify-content: flex-start;
        width: 35%;
        margin: 0 10vh 15vh 0;
        max-height: 700px;
    };  
`;

export const ParagraphAreaAir = styled('div')`
    display: flex;
    flex-direction: column;

    @media (max-width: ${small}px)  {
        width: 85%; 
        justify-content: center;
        align-items: left; 
    };

    @media (min-width: ${small}px) and (max-width: ${medium}px) {
        justify-content: center;
        align-items: left; 
        max-width: 950px;
    };

    @media (min-width: ${medium}px) {
        justify-content: flex-start;
        width: 35%;
        margin: 0 10vh 15vh 0;
        max-height: 700px;
        min-height: 150vh;
    };  
`;

export const ParagraphAreaDaytime = styled('div')`
    display: flex;
    flex-direction: column;

    @media (max-width: ${small}px)  {
        width: 85%; 
        justify-content: center;
        align-items: left; 
    };

    @media (min-width: ${small}px) and (max-width: ${medium}px) {
        justify-content: center;
        align-items: left; 
        max-width: 950px;
    };

    @media (min-width: ${medium}px) {
        justify-content: flex-start;
        width: 35%;
        margin: 0 10vh 15vh 0;
        max-height: 700px;
        min-height: 186vh;
    };  
`;

export const ParagraphAreaPolluted = styled('div')`
    display: flex;
    flex-direction: column;

    @media (max-width: ${small}px)  {
        width: 85%; 
        justify-content: center;
        align-items: left; 
    };

    @media (min-width: ${small}px) and (max-width: ${medium}px) {
        justify-content: center;
        align-items: left; 
        max-width: 950px;
    };

    @media (min-width: ${medium}px) {
        justify-content: flex-start;
        width: 35%;
        margin: 0 10vh 15vh 0;
        max-height: 700px;
        min-height: 182vh;
    };  
`;

export const ParagraphAreaGlobal = styled('div')`
    display: flex;
    flex-direction: column;

    @media (max-width: ${small}px)  {
        width: 85%; 
        justify-content: center;
        align-items: left; 
    };

    @media (min-width: ${small}px) and (max-width: ${medium}px) {
        justify-content: center;
        align-items: left; 
        max-width: 950px;
    };

    @media (min-width: ${medium}px) {
        justify-content: flex-start;
        width: 35%;
        margin: 0 10vh 15vh 0;
        max-height: 700px;
        min-height: 182vh;
    };  
`;

export const ParagraphAreaCheckpoints = styled('div')`
    display: flex;
    flex-direction: column;

    @media (max-width: ${small}px)  {
        width: 85%; 
        justify-content: center;
        align-items: left; 
    };

    @media (min-width: ${small}px) and (max-width: ${medium}px) {
        justify-content: center;
        align-items: left; 
        max-width: 950px;
    };

    @media (min-width: ${medium}px) {
        justify-content: flex-start;
        width: 35%;
        margin: 0 10vh 15vh 0;
        max-height: 700px;
        min-height: 158vh;
    };  
`;


export const ParagraphAreaInitiatives = styled('div')`
    display: flex;
    flex-direction: column;

    @media (max-width: ${small}px)  {
        width: 85%; 
        justify-content: center;
        align-items: left; 
    };

    @media (min-width: ${small}px) and (max-width: ${medium}px) {
        justify-content: center;
        align-items: left; 
        max-width: 950px;
    };

    @media (min-width: ${medium}px) {
        justify-content: flex-start;
        width: 35%;
        margin: 0 10vh 15vh 0;
        max-height: 700px;
        min-height: 180vh;
    };  
`;

export const VisualizationMain = styled('div')`
    display: flex;
    flex-wrap: no-wrap;
    justify-content: flex-start;
    

    @media (max-width: ${small}px)  {
        
    };

    @media (min-width: ${small}px) and (max-width: ${medium}px) {
        
    };

    @media (min-width: ${medium}px) {
        position: sticky;
        top: 10%;
    };
`

export const VisualizationArea = styled('div')`
    display: flex;
    width: 700px;
    max-width: 700px;
`

export const LegendArea = styled('div')`
    display: flex;
    width: 20%;
    height: 700px;
    max-height: 700px;
    max-width: 20%;
    position: relative;
    justify-content: flex-start;
`

export const TextHighlighters = styled('span')`
    border-radius: 5px;
    padding: 0 5px 0 5px;
`

// use conditional rendering for this snippet. render component Main based on screen size. if smaller than medium, then render this, nothing else.

export const MobileView = styled('div')`
    @media (max-width: ${small}px)  {
        position: fixed;
        top: 0;
        left: 0;
        background: rgba(255, 85, 85, 0.95);
        width: 100vw;
        height: 100vh;
        font-family: 'IBM Plex Sans';
        font-weight: 700;
        font-size: 2.8em;
        line-height: 120%;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        z-index: 99;
    };

    @media (min-width: ${small}px) and (max-width: ${medium}px) {
        display: none;
    };

    @media (min-width: ${medium}px) {
        display: none;
    };
`

export const MobileFallback = styled('p')`
    max-width: 75%;
`

export class Main extends React.Component<{data: Country[], detailMonthly: Station[]}> {    
  public render() {
    return (
      <>
        <MobileView>
                <MobileFallback>
                    Please view From Crimson To Salmon on a bigger screen for the best experience.  
                </MobileFallback>
        </MobileView>
      <Intro/>
        <MainRootTop>
            <IntroText />
            <Chapter1 />
            <Chapter2 />
        </MainRootTop>
        <MainRoot>
            <Chapter3 />
        </MainRoot>
        <MainRoot>
            <Chapter4 />
        </MainRoot>
        <MainRoot>
            <Chapter5 />
        </MainRoot>
        <MainRoot>
            <Chapter6 data={this.props.data}/>
        </MainRoot>
        <MainRoot>
            <Chapter7 />
        </MainRoot>
        <MainRoot>
            <Chapter8 detailMonthly={this.props.detailMonthly}/>
        </MainRoot>
        <MainRoot>
        </MainRoot>
        <MainRoot>
            <Chapter10 />
        </MainRoot>
        <MainRootBottom>
            <Chapter11 />
        </MainRootBottom>
      </>
    );
    } 
}

export default Main;

// Air 

const Chapter1 = () => {
    const target = useRef(null);  // We need a ref to our "target" or our child-to-watch,
    const isThingIntersecting = useInView(target);
  
    return (
        <>
        <Heading>Composition of our air</Heading>
        <Chapter>
        <ParagraphAreaAir>
            <Paragraph>
            Air is made up of only five main gases: Nitrogen (N₂), Oxygen (O₂), Argon (Ar), and Carbon Dioxide (CO₂). Several other compounds, such as natural Ozone (O₃), are also present. Additionally, air contains a huge amount of water vapor. 
            </Paragraph>
            <ParagraphAir>
            Scientists also refer to this pure and natural gas mixture as <TextHighlighters style={{backgroundColor: AirBlue}}>«dry air».</TextHighlighters> 
            </ParagraphAir>
        </ParagraphAreaAir>
        <VisualizationMain>
            <VisualizationArea ref={target}>
            {isThingIntersecting && <Air runAnimation={isThingIntersecting}/> }
            </VisualizationArea>
        </VisualizationMain>
    </Chapter>
    </>
    );
  };


  // Sun

  const Chapter2 = () => {
    const target = useRef(null);  // We need a ref to our "target" or our child-to-watch,
    const isThingIntersecting = useInView(target);

    
    return (
        <>
        <Heading>The role of sunlight</Heading>    
        <Chapter>      
            <ParagraphArea>
                <Paragraph>
                <TextHighlighters style={{backgroundColor: SunYellow}}>Sunlight</TextHighlighters>, in contrast, is composed of a spectrum of colors, ranging from <TextHighlighters style={{backgroundColor: SunBlue}}>short</TextHighlighters> wavelengths (~300 nm) which are perceived as purplish-blue, to <TextHighlighters style={{backgroundColor: SunRed}}>longer</TextHighlighters>  wavelengths (~700 nm), perceived as red.
                </Paragraph>
                <ParagraphTwo>
                    All colors together are perceived as a yellowish white.
                </ParagraphTwo>
            </ParagraphArea>
            <VisualizationMain>
                <VisualizationArea ref={target}>
                    {isThingIntersecting && <Sun runAnimation={isThingIntersecting}/>}
                </VisualizationArea>
            </VisualizationMain>
        </Chapter>
        </>
    );
  };

    // Blue Scattering, Daytime Sky

    const Chapter3 = () => {
        const target = useRef(null);  // We need a ref to our "target" or our child-to-watch,
        const isThingIntersecting = useInView(target);

        return (
            <>
            <Heading>Color of our daytime sky</Heading>
            <Chapter >
                <ParagraphAreaDaytime>
                    <Paragraph>
                    «Rayleigh scattering» describes the behaviour of moleclues in the atmosphere when interacting with  incident light. This works better for smaller particles compared to the wavelength of the light, as <TextHighlighters style={{backgroundColor: SunBlue}}>shorter</TextHighlighters> wavelengths scatter more effectively than <TextHighlighters style={{backgroundColor: SunRed}}>longer</TextHighlighters> wavelengths.
                    </Paragraph> 
                    <ParagraphDaytime>
                    <TextHighlighters style={{backgroundColor: AirBlueLight}}>Air molecules</TextHighlighters> are closer in size to <TextHighlighters style={{backgroundColor: SunBlue}}>short</TextHighlighters> wavelengths of violet and blue light. As a result, pure air scatters blue light three times more effectively than it does <TextHighlighters style={{backgroundColor: SunRed}}>red light</TextHighlighters> — thereby yielding the <TextHighlighters style={{backgroundColor: AirBlue}}>blue</TextHighlighters> of the daytime sky.
                    </ParagraphDaytime> 
                </ParagraphAreaDaytime>
                <VisualizationMain>
                    <VisualizationArea ref={target}>
                        {isThingIntersecting && <ScatteringBlue Animation={isThingIntersecting}/>}
                    </VisualizationArea>
                </VisualizationMain>
            </Chapter>
            </>
        );
      };

// Red Scattering, Evening Sky

const Chapter4 = () => {
    const target = useRef(null);  // We need a ref to our "target" or our child-to-watch,
    const isThingIntersecting = useInView(target);
  
    return (
        <>
        <Heading>Color shift of the evening sky</Heading>
        <Chapter>
                <ParagraphArea>
                    <Paragraph>
                    At sunset, <TextHighlighters style={{backgroundColor: SunYellow}}>sunlight</TextHighlighters> takes a much longer path through the atmosphere. This results in more encounters with <TextHighlighters style={{backgroundColor: AirBlueLight}}>air molecules</TextHighlighters> and thus, more scattering events of the <TextHighlighters style={{backgroundColor: SunBlue}}>blue</TextHighlighters> light. It literally gets «scattered out». 
                    </Paragraph> 
                     <ParagraphTwo>
                     Although red light scatters comparatively poorly, this long distance leads to increased scattering. Due to that, evening light that reaches an observer is noticeably <TextHighlighters style={{backgroundColor: SunRed}}>salmon.</TextHighlighters>
                    </ParagraphTwo>
                </ParagraphArea>
                <VisualizationMain>
                    <VisualizationArea ref={target}>
                        {isThingIntersecting && <ScatteringRed Animation={isThingIntersecting}/>}
                    </VisualizationArea>
                </VisualizationMain>
            </Chapter>
            </>
    );
  };

  // Polluted Scattering, Polluted Sky

  const Chapter5 = () => {
    const target = useRef(null);  // We need a ref to our "target" or our child-to-watch,
    const isThingIntersecting = useInView(target);
  
    return (
        <>
        <Heading>Toxical color enhancement</Heading>
        <Chapter>
                <ParagraphAreaPolluted>
                    <Paragraph>
                    The particulate load of the atmosphere varies from place to place due to variations in local pollution sources. While natural sources of particles do exist, human-generated emissions locally can increase the amount of <TextHighlighters style={{backgroundColor: AirRedDark, color: "white"}}>fine particles</TextHighlighters> or «particulate matter» (PM10) of very small sizes (~10 µm = 0.01 mm) in the air. 
                    </Paragraph>
                    <ParagraphPolluted>
                    Due to their size an composition, the fine particles increase the scattering and absorption of light in the atmosphere. This weakens the sunlight, imparting a more <TextHighlighters style={{backgroundColor: AirRedDark, color: "white"}}>crimson</TextHighlighters> color to the evening sky. 
                    </ParagraphPolluted>
                </ParagraphAreaPolluted>
                <VisualizationMain>
                    <VisualizationArea ref={target}>
                        {isThingIntersecting && <ScatteringPolluted Animation={isThingIntersecting}/>}
                    </VisualizationArea>
                </VisualizationMain>
            </Chapter>
            </>
    );
  };

  // Twenty Countries

  const Chapter6 = (props: {data: Array<Country>; }) => {
    const target = useRef(null);  // We need a ref to our "target" or our child-to-watch,
    const isThingIntersecting = useInView(target);

    console.log(target, isThingIntersecting)

  
    return (
        <>
        <Heading>Global evening skies</Heading>
        <Chapter>
                <ParagraphAreaGlobal>
                    <Paragraph>
                    Worldwide, the color of the evening sky can look quite different. Here you can see an approximation of that color for 20 different countries around the world. The color is based on the average value of <TextHighlighters style={{backgroundColor: AirRedDark, color: "white"}}>PM10</TextHighlighters> measured in their large economic areas in 2016.
                    </Paragraph>
                    <ParagraphGlobal ref={target}>
                    Seems like Switzerland is doing pretty good, right?
                    </ParagraphGlobal>
                </ParagraphAreaGlobal>
                <VisualizationMain>
                    <VisualizationArea >
                        <TwentyCountries countries={props.data}/>
                        {isThingIntersecting && <HighlightSwitzerland runAnimation={isThingIntersecting} />}
                    </VisualizationArea>
                </VisualizationMain>
            </Chapter>
            </>
    );
  };

  // Switzerland

  const Chapter7 = () => {
    const target = useRef(null);  // We need a ref to our "target" or our child-to-watch,
  
    return (
        <>
        <Heading>Looking at Switzerland</Heading>
        <Chapter>
                <ParagraphArea>
                    <ParagraphTwo>
                More in detail, the minimum and maximum amounts of <TextHighlighters style={{backgroundColor: AirRedDark, color: "white"}}>fine particles</TextHighlighters> measured all across Switzerland create a gradient of the different colored evening skies for the year 2016.
                    </ParagraphTwo>
                </ParagraphArea>
                <VisualizationMain>
                    <VisualizationArea>
                        <Switzerland />
                    </VisualizationArea>
                </VisualizationMain>
            </Chapter>
        </>
    );
  };


  // Zurich

  const Chapter8 = (props: {detailMonthly: Array<Station>; }) => {
    const target = useRef(null);  // We need a ref to our "target" or our child-to-watch,
    const limitTarget = useRef(null);  // We need a ref to our "target" or our child-to-watch,
    const isThingIntersecting = useInView(target);
    const limitThingIntersecting = useInView(limitTarget);

  
    return (
        <>
        <Heading>Zurich’s three checkpoints …</Heading>
        <Chapter>
                <ParagraphAreaCheckpoints>
                    <Paragraph>
                    When applying this gradient to the range of daily values measured over the month at the three main measuring stations for <TextHighlighters style={{backgroundColor: AirRedDark, color: "white"}}>fine particles</TextHighlighters> of the city of Zurich, the official daily limit values are quickly exceeded.
                    </Paragraph>
                    <ParagraphCheckpoints ref={limitTarget}>
                    The daily limit value for <TextHighlighters style={{backgroundColor: AirRedDark, color: "white"}}>fine particles</TextHighlighters> (PM10) being 50 µg / m3 per year, this plot of the distribution over the months shows that Zurich’s evening skies can actually be more <TextHighlighters style={{backgroundColor: AirRedDark, color: "white"}}>«crimson»</TextHighlighters> than average data might suggest.
                    </ParagraphCheckpoints>
                </ParagraphAreaCheckpoints>
                <VisualizationMain>
                    <VisualizationArea ref={target}>
                        {isThingIntersecting && <Zurich Animation={isThingIntersecting} stations={props.detailMonthly} />}
                        {limitThingIntersecting && <Limits triggerAnimation={limitThingIntersecting} stations={props.detailMonthly} />}
                    </VisualizationArea>
                </VisualizationMain>
            </Chapter>
            </>
    );
  };

  // Initiatives

  const Chapter10 = () => {
    const target = useRef(null);  // We need a ref to our "target" or our child-to-watch,
  
    return (
        <>
        <Heading>Improvement initiatives</Heading>
        <Chapter>
                <ParagraphAreaInitiatives>
                    <Paragraph>
                    The awareness of fine particle emissions is essential for all of us, as many of the processes emitting fine particles also cause greenhouse gases. This contributes to the causes of climate change, whose effects bring direct existential threats to every living being.
                    </Paragraph>
                    <ParagraphInitiatives>
                    But all hope is not lost.
                    </ParagraphInitiatives>
                    <ParagraphInitiativesTwo>
                    These are three promising initiatives that are addressing the issue of air pollution and climate change in a straightforward way to reduce air pollution from <TextHighlighters style={{backgroundColor: AirRedDark, color: "white"}}>crimson</TextHighlighters> to <TextHighlighters style={{backgroundColor: SunRed}}>salmon</TextHighlighters> in the coming years.
                    </ParagraphInitiativesTwo>
                </ParagraphAreaInitiatives>
                <VisualizationMain >
                    <VisualizationArea ref={target}>
                        <Initiatives />
                    </VisualizationArea>
                </VisualizationMain>
            </Chapter>
            </>
    );
  };

  const Chapter11 = () => {
    const target = useRef(null);  // We need a ref to our "target" or our child-to-watch,
  
    return (
        <>  
            <Heading>Methodology</Heading>
            <Conclusion ref={target}/>
        </>
    );
  };