import * as React from 'react';
import './index.css';
import { Intro } from './components/Intro';
import { Air } from './components/Air';
import styled from '@emotion/styled-base';
import { ScatteringBlue, ScatteringRed, ScatteringPolluted } from './components/Scattering';
import { Country, TwentyCountries } from './components/Countries';
import { Initiatives } from './components/Initiatives';
import { Sun } from './components/Sun';
import { Zurich, ZurichGradient, Station } from './components/Zurich';
import { Paragraph, Heading } from './materials/materials';
import { ZurichLabels } from './components/Legends';
import { useRef, useState } from "react";
const { useIntersectionObserver } = require("react-hook-intersection-observer")
// import { useInView } from 'react-intersection-observer'


console.log({useRef})

interface Props {
  data: Array<Country>;
}

interface Props {
    detailMonthly: Array<Station>;
}

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
    width: 90%;
    justify-content: space-between;
    margin: 15vh 0 15vh 0;
    flex-wrap: wrap;
`

export const ParagraphArea = styled('div')`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 40%;
    height: 700px;
    max-height: 700px;
`;

export const VisualizationMain = styled('div')`
    display: flex;
    flex-wrap: no-wrap;
    justify-content: flex-start;

`

export const VisualizationArea = styled('div')`
    display: flex;
`

export const LegendArea = styled('div')`
    display: flex;
    width: 30%;
    height: 700px;
    max-height: 700px;
    max-width: 30%;
    position: relative;
    justify-content: flex-start;
`

// TODO: 
// implementation of intersection observer
// highlight text areas with span to make ref to viz clear
// read color from color function for <Zurich />'s background color
// check unicode arrows to be the same for x and y axes
// read data dynamically for min and max values of Countries color scale



// this is the hook. configuration takes place here. See https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API for further information on how to configure it.
// Is it necessary to update the react version since we are using hooks which are only available in higher react versions?  

// const Observer = () => {
//   const ref = useRef()
//   const inView = useInView(ref, {
//     /* Optional options */
//     threshold: 0,
//   })

export class Main extends React.Component<Props> {
    state = { visibility: true}

    toggleAnimation = ()=> {
        this.setState({visibility: !this.state.visibility})
    }
  public render() {
    return (
      <>
      <Intro/>
        <MainRoot>
            <Chapter1 />
                
            <Chapter>      
                {/* Sun */}
                <ParagraphArea>
                    <Heading>The role of sunlight</Heading>    
                    <Paragraph>
                    Sunlight, on the contrary, is composed of a whole spectrum of colors, ranging from long wavelengths (~700 nm) which are perceived as red, to shorter wavelengths (~300 nm), perceived as purplish-blue.
                    </Paragraph>
                    {/* <Paragraph style={{marginTop: "1.2rem"}}>
                        All colors together are perceived as a yellowish white.
                    </Paragraph> */}
                </ParagraphArea>
                <VisualizationMain>
                    <LegendArea>

                    </LegendArea>
                    <VisualizationArea>
                        <Sun/>
                    </VisualizationArea>
                </VisualizationMain>
            </Chapter>  
                
            <Chapter>
                {/* Daytime Sky */}
                <ParagraphArea>
                    <Heading>The evolvement of our daytime sky</Heading>
                    <Paragraph>
                    «Selective scattering», also known as «Rayleigh scattering», is used to describe scattering that varies with the wavelength of the incident light. Particles are good Rayleigh scatterers when they are very small compared to the wavelength of the light.
                    </Paragraph> 
                    {/* <Paragraph style={{marginTop: "1.2rem"}}>
                    Air molecules are slightly closer in size to shorter wavelength of violet and blue light than to that of red light. 
                    Due to that, pure air scatters this blue light three to four times more effectively than it does the longer wavelengths. 
                    </Paragraph> 
                    <Paragraph style={{marginTop: "1.2rem"}}>
                    This results in the familiar blue of the daytime sky. The other colors exist but scatter less. Most of them are most likely to just pass through the atmosphere. Therefore, they are rarely visible due to the enormous scattering of blue light.
                    </Paragraph> */}
                </ParagraphArea>
                    {/* <button onClick={this.toggleAnimation}>click me!</button> */}
                <VisualizationMain>
                    <LegendArea>
                        {/* <ScatteringLegend /> */}
                    </LegendArea>
                    <VisualizationArea>
                        <ScatteringBlue visibility={this.state.visibility}/>
                    </VisualizationArea>
                </VisualizationMain>
            </Chapter>

            <Chapter>
                {/* Evening Sky */}
                <ParagraphArea>
                    <Heading>Shifting to the evening sky</Heading>
                    <Paragraph>
                    At sunrise or sunset, sunlight takes a much longer path through the atmosphere than during the middle part of the day. This lengthened path results in more encounters with air molecules and thus, more scattering events of the blue light which literally gets «scattered out». 
                    </Paragraph> 
                     <Paragraph style={{marginTop: "1.2rem"}}>
                    Although red light scatters poorly, the long distance leads to a greater scattering. Therefore, light that reaches an observer early or late in the day is noticeably reddened. This process is also known as «multiple scattering». 
                    </Paragraph>

                    {/* Polluted Evening Sky */}
                    {/* <Heading>Toxical color enhancement</Heading>
                    <Paragraph>
                    The compounds of air vary due to emissions of human kind. As we are constantly burning fossils, this leads to an emission of particularly fine particles (PM10) in very small sizes (~10 µm = 0.01 mm) into the air. 
                    </Paragraph>
                    <Paragraph style={{marginTop: "1.2rem"}}>
                    Due to their small molecular size, these various compounds of PM10 scatter the same way as natural Nitrogen and Oxygen would do — they scatter more red light. This leads to an increase of the red shares. 
                    </Paragraph> */}
                </ParagraphArea>
                <VisualizationMain>
                    <LegendArea>
                    </LegendArea>
                    <VisualizationArea>
                        <ScatteringRed />
                    </VisualizationArea>
                </VisualizationMain>
            </Chapter>

             <Chapter>
                {/* Polluted Sky */}
                <ParagraphArea>
                    <Heading>Toxical color enhancement</Heading>
                    <Paragraph>
                    The compounds of air vary due to emissions of human kind. As we are constantly burning fossils, this leads to an emission of particularly fine particles (PM10) in very small sizes (~10 µm = 0.01 mm) into the air. 
                    </Paragraph>
                    <Paragraph style={{marginTop: "1.2rem"}}>
                    Due to their small molecular size, these various compounds of PM10 scatter the same way as natural Nitrogen and Oxygen would do — they scatter more red light. This leads to an increase of the red shares. 
                    </Paragraph>
                </ParagraphArea>
                <VisualizationMain>
                    <LegendArea>
                    </LegendArea>
                    <VisualizationArea>
                        <ScatteringPolluted />
                    </VisualizationArea>
                </VisualizationMain>
            </Chapter>

            <Chapter>
                {/* Twenty Countries */}
                <ParagraphArea>
                    <Heading>Global evening skies</Heading>
                    <Paragraph>
                    Let’s see how the global color swatch with these 20 countries looks like. It is composed of the mean value of PM10 measured in their large economic areas in 2016.
                    </Paragraph>
                    <Paragraph style={{marginTop: "1.2rem"}}>
                    Seems like Switzerland is doing pretty good, right?
                    </Paragraph>
                </ParagraphArea>
                <VisualizationMain>
                    <LegendArea>

                    </LegendArea>
                    <VisualizationArea>
                        <TwentyCountries countries={this.props.data}/>
                    </VisualizationArea>
                </VisualizationMain>
            </Chapter>

            <Chapter>
                {/* Zurich */}
                <ParagraphArea>
                    <Heading>Looking out of my own window</Heading>
                    <Paragraph>
                    The minimum and maximum amounts of fine particles led to the creation of this color swatch for the sundown sky of Switzerland for the year 2016.
                    </Paragraph>
                </ParagraphArea>
                <VisualizationMain>
                    <LegendArea></LegendArea>
                    <VisualizationArea>
                        <Zurich />
                    </VisualizationArea>
                </VisualizationMain>
            </Chapter>
            
            <Chapter>
                <ParagraphArea>
                    <Heading>Zurich’s three checkpoints …</Heading>
                    <Paragraph>
                    By splitting this swatch into the three main measuring stations of PM10 of the Zurich, the composition the different shares are visible.
                    </Paragraph>
                    <Paragraph style={{marginTop: "1.2rem"}}>
                    All of this deep red does look pretty unsettling, right?
                    </Paragraph>

                    {/* Limit Values */}
                    {/* <Heading>… call to action!</Heading>
                    <Paragraph>
                    Considering that the limit value for fine particles (PM10) is 20 µg / m3 per year, it looks even more unsettling.
                    </Paragraph>
                    <Paragraph>
                    Switzerland has to still reduce their emissions to reach the regulatory limit values as defined by the WHO. Reaching this value, nevertheless, does not mean we are off the responsibility. As it defines a limit of exposure, it by no means states no emission at all.
                    </Paragraph> */}
                </ParagraphArea>
                <VisualizationMain>
                    <LegendArea>
                        <ZurichLabels />
                    </LegendArea>
                    <VisualizationArea>
                        <ZurichGradient stations={this.props.detailMonthly} />
                    </VisualizationArea>
                </VisualizationMain>
            </Chapter>
            
            <Chapter>
                {/* Initiatives */}
                <ParagraphArea>
                    <Heading>World’s improvement initiatives</Heading>
                    <Paragraph>
                    This reduction is essential for all of us, as 2050 marks the point of no return for our climate. This means there is no way of reversing or stopping the effects of climate change which brings direct existencial threats to every living being.
                    </Paragraph>
                    <Paragraph style={{marginTop: "1.2rem"}}>
                    These are the top three initiatives I stumbled upon my research for this project which are adressing climate change very straightforward.
                    </Paragraph>
                </ParagraphArea>
                <VisualizationMain>
                    <LegendArea>
                    </LegendArea>
                    <VisualizationArea>
                        <Initiatives />
                    </VisualizationArea>
                </VisualizationMain>
            </Chapter>
      </MainRoot>
      </>
    );
  }
}

export default Main;

const Chapter1 = () => {
    const target = useRef(null);  // We need a ref to our "target" or our child-to-watch,
  
    // Let's use a bit of state.
    const [isThingIntersecting, setThingIntersecting] = useState(false);
  
    // Here's our hook! Let's give it some configuration...
    useIntersectionObserver({
      root: { current: null },
      target,
  
      // What do we do when it intersects?
      // The signature of this callback is (collectionOfIntersections, observerElement).
      onIntersect: ([{ isIntersecting }]: any) => setThingIntersecting(isIntersecting)
    });

    console.log({ target, isThingIntersecting })
  
    return (
        <div ref={target}>
        <Chapter>
        {/* Air */}
        <ParagraphArea>
            <Heading>The essential gas mixture</Heading>    
            <Paragraph>
            First of all, let us have a closer look on air.
            </Paragraph>
            <Paragraph style={{marginTop: "1.2rem"}}>
            It is made up of only five gases: Nitrogen (N₂), Oxygen (O₂),  Argon (Ar), and Carbon Dioxide (CO₂). Several other compounds, such as natural Ozone (O₃), are also present.
            </Paragraph>
            <Paragraph style={{marginTop: "1.2rem"}}>
            Scientists also refer to this pure and natural gas mixture as «dry air».
            </Paragraph>
        </ParagraphArea>
        <VisualizationMain>
            <LegendArea>

            </LegendArea>
            <VisualizationArea>
                <Air runAnimation={isThingIntersecting} /> 
            </VisualizationArea>
        </VisualizationMain>
    </Chapter></div>
    );
  };
