import * as React from 'react';
import './index.css';
import { Intro } from './components/Intro';
import { TwentyCountries } from './components/Countries';
import { Initiatives } from './components/Initiatives';
import { AirUndefined, AirDefined, AirComposition } from './components/Air';
import {Country} from "../src/components/Countries"
interface Props {
  data: Array<Country>;
}
export class Main extends React.Component<Props> {
  public render() {
    return (
      <>
        <Intro/>

        <AirDefined />
        <AirComposition />
        <AirUndefined />


        <TwentyCountries countries={this.props.data}/>
        <Initiatives />
      </>
    );
  }
}

export default Main;
