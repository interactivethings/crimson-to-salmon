import * as React from 'react';
import './index.css';
import { Intro } from './components/Intro';
import { Square } from './components/Square';

export class Main extends React.Component {
  public render() {
    return (
      <>
        <Intro/>
        <Square/>
      </>
    );
  }
}

export default Main;
