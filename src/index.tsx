import { Main } from './Main';
import './index.css';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

const data = require('./data/countries.json')
const detailMonthly = require('./data/monthlyValues.json')
  console.log(detailMonthly)
  
ReactDOM.render(
  <Main data={data} detailMonthly={detailMonthly}/>,
  document.getElementById('root') as HTMLElement
);

registerServiceWorker();
