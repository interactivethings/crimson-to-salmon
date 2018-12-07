import * as React from 'react';
import './index.css';
import { Intro } from './components/Intro';
import { TwentyCountries } from './components/Countries';
import { Initiatives } from './components/Initiatives';
import { Air } from './components/Air';
import {Country} from "../src/components/Countries"
import styled from '@emotion/styled-base';
import { ParagraphStory } from './materials/materials';
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
          This reduction is essential for every country, as 2050 marks the point of no return for our climate. This means there is no way of reversing or stopping the effects of climate change which brings direct existencial threats to every living being.<br></br>
          <br></br>
          These are the top three initiatives to adress climate change I stumbled upon my research for this project.
        </ParagraphStory>
        <Air/> 

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
