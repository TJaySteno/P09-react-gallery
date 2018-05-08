import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

// Initialize React Router and use Route to track its match, location, and history props
ReactDOM.render(<BrowserRouter><Route component={App} /></BrowserRouter>,
  document.getElementById('root'));

registerServiceWorker();
