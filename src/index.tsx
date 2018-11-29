import { Main } from './Main';
import './index.css';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Main />,
  document.getElementById('root') as HTMLElement
);

registerServiceWorker();
