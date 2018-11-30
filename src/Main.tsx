import * as React from 'react';
import './index.css';
import { Intro } from './components/Intro';
import { TwentyCountries } from './components/Countries';
import { Initiatives } from './components/Initiatives';

export class Main extends React.Component {
  public render() {
    return (
      <>
        <Intro/>
        <TwentyCountries/>
        <Initiatives />
      </>
    );
  }
}

export default Main;
