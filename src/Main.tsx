import * as React from 'react';
import './index.css';
import { Intro } from './components/Intro';
import { Air } from './components/Air';
import styled from '@emotion/styled-base';
import { ScatteringBlue, ScatteringPolluted, ScatteringRed } from './components/Scattering';
import { Country, TwentyCountries } from './components/Countries';
import { Initiatives } from './components/Initiatives';
import { Sun } from './components/Sun';
import { Station, Switzerland, Zurich, Limits, LimitValues } from './components/Zurich';
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
    margin: 0 10vh 15vh 0;
    max-height: 700px;
`;

export const VisualizationMain = styled('div')`
    display: flex;
    flex-wrap: no-wrap;
    justify-content: flex-start;
    position: sticky;
    top: 20vh;
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
            {/* <Chapter9 detailMonthly={this.props.detailMonthly}/> */}
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
        <Heading>Composition of our air</Heading>
        <Chapter>
        <ParagraphArea style={{ minHeight: "150vh"}}>
            <Paragraph>
            Air is made up of only five gases: Nitrogen (N₂), Oxygen (O₂),  Argon (Ar), and Carbon Dioxide (CO₂). Several other compounds, such as natural Ozone (O₃), are also present.
            </Paragraph>
            <Paragraph style={{marginTop: "102vh"}}>
            Scientists also refer to this pure and natural gas mixture as <TextHighlighters style={{backgroundColor: AirBlue}}>«dry air».</TextHighlighters> 
            </Paragraph>
        </ParagraphArea>
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
                <TextHighlighters style={{backgroundColor: SunYellow}}>Sunlight</TextHighlighters>, on the contrary, is composed of a spectrum of colors, ranging from <TextHighlighters style={{backgroundColor: SunBlue}}>short</TextHighlighters> wavelengths (~300 nm) which are perceived as purplish-blue, to <TextHighlighters style={{backgroundColor: SunRed}}>longer</TextHighlighters>  wavelengths (~700 nm), perceived as red.
                </Paragraph>
                <Paragraph style={{marginTop: "1.2rem"}}>
                    All colors together are perceived as a yellowish white.
                </Paragraph>
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
                <ParagraphArea style={{minHeight: "182vh"}}>
                    <Paragraph>
                    «Rayleigh scattering» describes the behaviour of moleclues in the atmosphere when interacting with  incident light. This works better for smaller particles compared to the wavelength of the light, as <TextHighlighters style={{backgroundColor: SunBlue}}>shorter</TextHighlighters> wavelengths scatter more effectively than <TextHighlighters style={{backgroundColor: SunRed}}>longer</TextHighlighters> wavelengths.
                    </Paragraph> 
                    <Paragraph style={{marginTop: "102vh"}}>
                    <TextHighlighters style={{backgroundColor: AirBlueLight}}>Air molecules</TextHighlighters> are closer in size to <TextHighlighters style={{backgroundColor: SunBlue}}>short</TextHighlighters> wavelengths of violet and blue light. Therefore, pure air scatters them three times more effectively than it does <TextHighlighters style={{backgroundColor: SunRed}}>red light</TextHighlighters>. This results in the <TextHighlighters style={{backgroundColor: AirBlue}}>blue</TextHighlighters> of the daytime sky.
                    </Paragraph> 
                </ParagraphArea>
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
                <ParagraphArea style={{minHeight: "182vh"}}>
                    <Paragraph>
                    At sunset, <TextHighlighters style={{backgroundColor: SunYellow}}>sunlight</TextHighlighters> takes a much longer path through the atmosphere. This results in more encounters with <TextHighlighters style={{backgroundColor: AirBlueLight}}>air molecules</TextHighlighters> and thus, more scattering events of the <TextHighlighters style={{backgroundColor: SunBlue}}>blue</TextHighlighters> light. It literally gets «scattered out». 
                    </Paragraph> 
                     <Paragraph style={{marginTop: "102vh"}}>
                     Although red light scatters poorly, this long distance leads to its scattering. Due to that, evening light that reaches an observer is noticeably <TextHighlighters style={{backgroundColor: SunRed}}>salmon</TextHighlighters>.
                    </Paragraph>
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
                <ParagraphArea style={{minHeight: "182vh"}}>
                    <Paragraph>
                    The compounds of air vary due to the constant burning of fossils by human kind. This leads to an increased emission of <TextHighlighters style={{backgroundColor: AirRedDark}}>fine particles</TextHighlighters> (PM10) in very small sizes (~10 µm = 0.01 mm) into the air. 
                    </Paragraph>
                    <Paragraph style={{marginTop: "102vh"}}>
                    Due to their size an composition, fine particles scatter the same way as natural <TextHighlighters style={{backgroundColor: AirBlue}}>Nitrogen</TextHighlighters> and <TextHighlighters style={{backgroundColor: AirBlue}}>Oxygen</TextHighlighters> would do — they scatter more red light. This leads to an intense <TextHighlighters style={{backgroundColor: AirRedDark}}>crimson</TextHighlighters> evening sky. 
                    </Paragraph>
                </ParagraphArea>
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
  
    return (
        <>
        <Heading>Global evening skies</Heading>
        <Chapter>
                <ParagraphArea style={{minHeight: "158vh"}}>
                    <Paragraph>
                    Worldwide, the color of the evening sky can look quite different. Here you can see an approximation of that color for 20 different countries around the world. The color is based on the average value of <TextHighlighters style={{backgroundColor: AirRedDark}}>PM10</TextHighlighters> measured in their large economic areas in 2016.
                    </Paragraph>
                    <Paragraph style={{marginTop: "102vh"}}>
                    Seems like Switzerland is doing pretty good, right?
                    </Paragraph>
                </ParagraphArea>
                <VisualizationMain>
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
        <Heading>Looking at Switzerland</Heading>
        <Chapter>
                <ParagraphArea>
                    <Paragraph>
                    More in detail, the minimum and maximum amounts of <TextHighlighters style={{backgroundColor: AirRedDark}}>fine particles</TextHighlighters> measured all across Switzerland creates a gradient of the different colored evening skies for the year 2016.
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
                <ParagraphArea style={{minHeight: "158vh"}}>
                    <Paragraph>
                    When applying this gradient to the monthly values of the three main measuring stations for <TextHighlighters style={{backgroundColor: AirRedDark}}>fine particles</TextHighlighters> of the city of Zurich, the official limit values are quickly exceeded.
                    </Paragraph>
                    <Paragraph style={{marginTop: "118vh"}} ref={target}>
                    With the limit value for <TextHighlighters style={{backgroundColor: AirRedDark}}>fine particles</TextHighlighters> (PM10) being 20 µg / m3 per year, this plot of the monthly values show, that Zurich’s evening skies can actually be more <TextHighlighters style={{backgroundColor: AirRedDark}}>«crimson»</TextHighlighters> than average data might suggest.
                    </Paragraph>
                </ParagraphArea>
                <VisualizationMain>
                    <VisualizationArea ref={target}>
                        {isThingIntersecting && <Zurich Animation={isThingIntersecting} stations={props.detailMonthly} />}
                        <Limits triggerAnimation={isThingIntersecting} stations={props.detailMonthly} />
                    </VisualizationArea>
                </VisualizationMain>
            </Chapter>
            </>
    );
  };


// Limit Values

// const Chapter9 = (props: {detailMonthly: Array<Station>; }) => {
//     const target = useRef(null);  // We need a ref to our "target" or our child-to-watch,
//     const isThingIntersecting = useInView(target);

//     console.log(target, isThingIntersecting)
  
//     return (
//         <>
//         <Heading>… call to action!</Heading>
//         <Chapter>
//                 <ParagraphArea>
//                     <Paragraph>
//                     With the limit value for <TextHighlighters style={{backgroundColor: AirRedDark}}>fine particles</TextHighlighters> (PM10) being 20 µg / m3 per year, this plot of the monthly values show, that Zurich’s evening skies can actually be more <TextHighlighters style={{backgroundColor: AirRedDark}}>«crimson»</TextHighlighters> than average data might suggest.
//                     </Paragraph>
//                 </ParagraphArea>
//                 <VisualizationMain>
//                     <VisualizationArea ref={target}>
//                     </VisualizationArea>
//                 </VisualizationMain>
//             </Chapter>
//             </>
//     );
//   };

  // Initiatives

  const Chapter10 = () => {
    const target = useRef(null);  // We need a ref to our "target" or our child-to-watch,
  
    return (
        <>
        <Heading>Improvement initiatives</Heading>
        <Chapter>
                <ParagraphArea style={{minHeight: "180vh"}}>
                    <Paragraph>
                    The reduction of fine particle emissions is essential for all of us, as the year 2050 marks a point of no return for our climate. This means there is no way of reversing or stopping the effects of climate change, which will bring direct existential threats to every living being.
                    </Paragraph>
                    <Paragraph style={{marginTop: "90vh"}}>
                    But not all hope is lost…
                    </Paragraph>
                    <Paragraph style={{marginTop: "50vh"}}>
                    These are three promising initiatives that are addressing the issue of air pollution and climate change in a straightforward way to reduce air pollution from <TextHighlighters style={{backgroundColor: AirRedDark}}>crimson</TextHighlighters> to <TextHighlighters style={{backgroundColor: SunRed}}>salmon</TextHighlighters> in 30 years.
                    </Paragraph>
                </ParagraphArea>
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