import { Main } from './Main';
import './index.css';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

const data = require('./data/countries.json')
console.log(data)
  
ReactDOM.render(
  <Main data={data}/>,
  document.getElementById('root') as HTMLElement
);

registerServiceWorker();
