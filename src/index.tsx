import { Main } from './Main';
import './index.css';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

export const countries = require('./data/countries.csv');
// const sortedData = countries
//   .sort((a: any, b: any) => b.PM10 - a.PM10)
// 	.map((d: any) => ({
//   }));
  
ReactDOM.render(
  <Main />,
  document.getElementById('root') as HTMLElement
);

registerServiceWorker();
