import * as React from 'react';
import './index.css';
import { Intro } from './components/Intro';
// import { TwentyCountries } from './components/Countries';
// import { Initiatives } from './components/Initiatives';
import { Air } from './components/Air';
// import {Country} from "../src/components/Countries"
import styled from '@emotion/styled-base';
// import { ParagraphStory } from './materials/materials';
import { BlueScattering, RedScattering, RedPollutedScattering } from './components/Scattering';
import { Country, TwentyCountries } from './components/Countries';
import { ParagraphStory } from './materials/materials';
import { Initiatives } from './components/Initiatives';

interface Props {
  data: Array<Country>;
}

export const MainRoot = styled('div')`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
`

export class Main extends React.Component<Props> {
  public render() {
    return (
      <>
      <Intro/>
        <MainRoot>
        {/* Air */}
        <ParagraphStory>
            First of all, let us have a closer look on air.<br></br>
            <br></br>
            It is made up of only five gases: Nitrogen (N₂), Oxygen (O₂),  Argon (Ar), and Carbon Dioxide (CO₂). Several other compounds, such as natural Ozone (O₃), are also present.
            <br></br>
            <br></br>
            Scientists also refer to this pure and natural gas mixture as «dry air».
        </ParagraphStory>
        <Air/> 

        {/* Scattering */}
        <ParagraphStory>
            Air molecules are slightly closer in size to shorter wavelength of violet and blue light than to the long ones of red light.
            <br></br> 
            <br></br>
            Due to that, pure air scatters this blue light three to four times more effectively than it does the longer wavelengths.
        </ParagraphStory>
        <BlueScattering />

        <ParagraphStory>
            At sunrise or sunset, sunlight takes a much longer path through the atmosphere than during the middle part of the day. This lengthened path results in more encounters with air molecules and thus, more scattering events of the blue light which literally gets «scattered out». 
        </ParagraphStory>
        <RedScattering /> 

        <ParagraphStory>
            The compounds of air vary due to emissions of human kind. As we are constantly burning fossils, this leads to an emission of particularly fine particles (PM10) in very small sizes (~10 µm = 0.01 mm) into the air.
        </ParagraphStory>
        <RedPollutedScattering />          

        {/* Twenty Countries */}
        <ParagraphStory>
            This reduction is essential for every country, as 2050 marks the point of no return for our climate. This means there is no way of reversing or stopping the effects of climate change which brings direct existencial threats to every living being.<br></br>
            <br></br>
            These are the top three initiatives to adress climate change I stumbled upon my research for this project.
          </ParagraphStory>
        <TwentyCountries countries={this.props.data}/>

        {/* Initiatives */}
        <ParagraphStory>
            This reduction is essential for every country, as 2050 marks the point of no return for our climate. This means there is no way of reversing or stopping the effects of climate change which brings direct existencial threats to every living being.<br></br>
            <br></br>
            These are the top three initiatives to adress climate change I stumbled upon my research for this project.
          </ParagraphStory>
          <Initiatives />
        
        
        

        
        
      </MainRoot>
      </>
    );
  }
}

export default Main;
