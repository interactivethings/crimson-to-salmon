import * as React from 'react';
import './index.css';
import { Intro } from './components/Intro';
import { Air } from './components/Air';
import styled from '@emotion/styled-base';
import { ScatteringBlue, ScatteringPolluted, ScatteringRed } from './components/Scattering';
import { Country, TwentyCountries } from './components/Countries';
import { Initiatives } from './components/Initiatives';
import { Sun } from './components/Sun';
import { Station, Switzerland, Zurich, Limits } from './components/Zurich';
import { Paragraph, Heading, AirBlue, SunRed, SunYellow, AirBlueLight, SunBlue, AirRedDark } from './materials/materials';
import { useRef } from "react";
const { useInView } = require("react-intersection-observer")


export const MainRoot = styled('div')`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
`

export const Chapter = styled('section')`
    display: flex;
    flex-direction: row;
    width: 70%;
    justify-content: space-between;
    align-items: flex-start;
    margin: 15vh 0 20vh 0;
    flex-wrap: wrap;
`

export const ParagraphArea = styled('div')`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 35%;
    margin: 0 0 15vh 0;
    max-height: 700px;
`;

export const VisualizationMain = styled('div')`
    display: flex;
    flex-wrap: no-wrap;
    justify-content: flex-start;
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
    padding: 0 2px 0 2px;
`

export class Main extends React.Component<{data: Country[], detailMonthly: Station[]}> {    
  public render() {
    return (
      <>
      <Intro/>
        <MainRoot>
            <Chapter1 />
            <Chapter2 />
            <Chapter3 />
            <Chapter4 />
            <Chapter5 />
            <Chapter6 data={this.props.data}/>
            <Chapter7 />
            <Chapter8 detailMonthly={this.props.detailMonthly}/>
            <Chapter9 detailMonthly={this.props.detailMonthly}/>
            <Chapter10 />
            <Chapter11 />
        </MainRoot>
      </>
    );
  }
}

export default Main;

// Air 

const Chapter1 = () => {
    const target = useRef(null);  // We need a ref to our "target" or our child-to-watch,
    const isThingIntersecting = useInView(target);
    // const inView = useInView(target, {
    //     /* Optional options */
    //     threshold: 0.5,
    //   })

    console.log(target, isThingIntersecting);
  
    return (
        <>
        <Heading>The essential gas mixture</Heading>
        <Chapter>
        <ParagraphArea style={{ minHeight: "150vh"}}>
            <Paragraph>
            Air is made up of only five gases: Nitrogen (N₂), Oxygen (O₂),  Argon (Ar), and Carbon Dioxide (CO₂). Several other compounds, such as natural Ozone (O₃), are also present.
            </Paragraph>
            <Paragraph style={{marginTop: "102vh"}}>
            Scientists also refer to this pure and natural gas mixture as <TextHighlighters style={{backgroundColor: AirBlue}}>«dry air».</TextHighlighters> 
            </Paragraph>
        </ParagraphArea>
        <VisualizationMain style={{position: "sticky", top: 150}}>
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
                <TextHighlighters style={{backgroundColor: SunYellow}}>Sunlight</TextHighlighters>, on the contrary, is composed of a spectrum of colors, ranging from <TextHighlighters style={{backgroundColor: SunBlue}}>short</TextHighlighters> wavelengths (~300 nm) which are perceived as purplish-blue, to <TextHighlighters style={{backgroundColor: SunRed}}>longer</TextHighlighters>  wavelengths (~700 nm), perceived as red.
                </Paragraph>
                <Paragraph style={{marginTop: "1.2rem"}}>
                    All colors together are perceived as a yellowish white.
                </Paragraph>
            </ParagraphArea>
            <VisualizationMain style={{position: "sticky", top: 150}}>
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
            <Heading>The evolvement of our daytime sky</Heading>
            <Chapter >
                <ParagraphArea style={{minHeight: "182vh"}}>
                    <Paragraph>
                    Selective scattering, also «Rayleigh scattering», describes scattering that varies with the wavelength of the incident light. This works best with very small particles compared to the wavelength of the light.
                    </Paragraph> 
                    <Paragraph style={{marginTop: "102vh"}}>
                    <TextHighlighters style={{backgroundColor: AirBlueLight}}>Air molecules</TextHighlighters> are closer in size to <TextHighlighters style={{backgroundColor: SunBlue}}>short</TextHighlighters> wavelengths of violet and blue light. 
                    Therefore, pure air scatters blue light three times more effectively than it does <TextHighlighters style={{backgroundColor: SunRed}}>red light</TextHighlighters>. This results in the blue of the daytime sky.
                    </Paragraph> 
                </ParagraphArea>
                <VisualizationMain style={{position: "sticky", top: 150}}>
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
        <Heading>Shifting to the evening sky</Heading>
        <Chapter>
                <ParagraphArea style={{minHeight: "182vh"}}>
                    <Paragraph>
                    At sunset, <TextHighlighters style={{backgroundColor: SunYellow}}>sunlight</TextHighlighters> takes a much longer path through the atmosphere. This results in more encounters with <TextHighlighters style={{backgroundColor: AirBlueLight}}>air molecules</TextHighlighters> and thus, more scattering events of the <TextHighlighters style={{backgroundColor: SunBlue}}>blue</TextHighlighters> light. It literally gets «scattered out». 
                    </Paragraph> 
                     <Paragraph style={{marginTop: "102vh"}}>
                    Due to that, evening light that reaches an observer is noticeably reddened. This process is also known as «multiple scattering». 
                    </Paragraph>
                </ParagraphArea>
                <VisualizationMain style={{position: "sticky", top: 150}}>
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
                <ParagraphArea style={{minHeight: "182vh"}}>
                    <Paragraph>
                    The compounds of air vary due constantly burning fossils by human kind. This leads to an increased emission of particularly <TextHighlighters style={{backgroundColor: AirRedDark}}>fine particles</TextHighlighters> (PM10) in very small sizes (~10 µm = 0.01 mm) into the air. 
                    </Paragraph>
                    <Paragraph style={{marginTop: "102vh"}}>
                    Due to their size, the various compounds of PM10 scatter the same way as natural <TextHighlighters style={{backgroundColor: AirBlue}}>Nitrogen</TextHighlighters> and <TextHighlighters style={{backgroundColor: AirBlue}}>Oxygen</TextHighlighters> would do — they scatter more red light. This leads to an increased red evening sky. 
                    </Paragraph>
                </ParagraphArea>
                <VisualizationMain style={{position: "sticky", top: 150}}>
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
  
    return (
        <>
        <Heading>Global evening skies</Heading>
        <Chapter>
                <ParagraphArea style={{minHeight: "158vh"}}>
                    <Paragraph>
                    Globally seen, the color swatch for these 20 countries looks like this. It is composed of the mean value of <TextHighlighters style={{backgroundColor: AirRedDark}}>PM10</TextHighlighters> measured in their large economic areas in 2016.
                    </Paragraph>
                    <Paragraph style={{marginTop: "102vh"}}>
                    Seems like Switzerland is doing pretty good, right?
                    </Paragraph>
                </ParagraphArea>
                <VisualizationMain style={{position: "sticky", top: 150}}>
                    <VisualizationArea  ref={target}>
                        <TwentyCountries countries={props.data}/>
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
        <Heading>Looking out of my own window</Heading>
        <Chapter>
                <ParagraphArea>
                    <Paragraph>
                    More in detail, the minimum and maximum amounts of <TextHighlighters style={{backgroundColor: AirRedDark}}>fine particles</TextHighlighters> measured all over the country create this pollution gradient for the sundown sky for Switzerland for the year 2016.
                    </Paragraph>
                </ParagraphArea>
                <VisualizationMain>
                    <VisualizationArea ref={target}>
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
    const isThingIntersecting = useInView(target);

    console.log(target, isThingIntersecting)
  
    return (
        <>
        <Heading>Zurich’s three checkpoints …</Heading>
        <Chapter>
                <ParagraphArea>
                    <Paragraph>
                    By splitting this swatch into the three main measuring stations of <TextHighlighters style={{backgroundColor: AirRedDark}}>fine particles</TextHighlighters> of the city of Zurich, these amounts are quickly exceeded.
                    </Paragraph>
                </ParagraphArea>
                <VisualizationMain>
                    <VisualizationArea ref={target}>
                        {isThingIntersecting && <Zurich Animation={isThingIntersecting} stations={props.detailMonthly} />}
                    </VisualizationArea>
                </VisualizationMain>
            </Chapter>
            </>
    );
  };


// Limit Values

const Chapter9 = (props: {detailMonthly: Array<Station>; }) => {
    const target = useRef(null);  // We need a ref to our "target" or our child-to-watch,
    const isThingIntersecting = useInView(target);

    console.log(target, isThingIntersecting)
  
    return (
        <>
        <Heading>… call to action!</Heading>
        <Chapter>
                <ParagraphArea>
                    <Paragraph>
                    The limit value for  <TextHighlighters style={{backgroundColor: AirRedDark}}>fine particles</TextHighlighters> (PM10) being 20 µg / m3 per year, Switzerland is more <TextHighlighters style={{backgroundColor: AirRedDark}}>crimson</TextHighlighters> than average data shows.
                    </Paragraph>
                    {/* <Paragraph  style={{marginTop: "1.2rem"}}>
                    It has to still reduce their emissions to reach the regulatory limit values defined by the WHO. Nevertheless, this does not mean we are off the responsibility as this value by no means states no emission at all.
                    </Paragraph> */}
                </ParagraphArea>
                <VisualizationMain>
                    <VisualizationArea ref={target}>
                        {isThingIntersecting && <Limits Animation={isThingIntersecting} stations={props.detailMonthly} />}
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
        <Heading>World’s improvement initiatives</Heading>
        <Chapter>
                <ParagraphArea style={{minHeight: "120vh"}}>
                    <Paragraph>
                    This reduction is essential for all of us, as 2050 marks the point of no return for our climate. This means there is no way of reversing or stopping the effects of climate change which brings direct existencial threats to every living being.
                    </Paragraph>
                    <Paragraph style={{marginTop: "68vh"}}>
                    These are the top three initiatives I stumbled upon my research for this project which are adressing climate change very straightforward.
                    </Paragraph>
                </ParagraphArea>
                <VisualizationMain style={{position: "sticky", top: 150}}>
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
        <Chapter ref={target}>
                    <Paragraph>
                    Sources / Methodology
                    This reduction is essential for all of us, as 2050 marks the point of no return for our climate. This means there is no way of reversing or stopping the effects of climate change which brings direct existencial threats to every living being.
                    </Paragraph>
                    <Paragraph >
                    These are the top three initiatives I stumbled upon my research for this project which are adressing climate change very straightforward.
                    </Paragraph>
            </Chapter>
            </>
    );
  };