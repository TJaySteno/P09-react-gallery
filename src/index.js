import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
// only need Route if you need match in App.js
  // if you don't need Route in App.js, you can likely do BrowserRouter there as well

import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<BrowserRouter><Route component={App} /></BrowserRouter>,
  document.getElementById('root'));

registerServiceWorker();
