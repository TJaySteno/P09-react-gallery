import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Route, Redirect, Switch } from 'react-router-dom';

import '../App.css';
import Header from './Header';
import PhotoContainer from './PhotoContainer';
import Error from './Error';

const App = () =>
  <BrowserRouter>
    <div className="container">
      <Header />
      <Switch>
        <Redirect exact from="/" to="/search/waterfall"/>
        <Route path='/search/:tag' render={ props =>
          <PhotoContainer searchTag={props.match.params.tag} />} />
        <Route component={Error} />
      </Switch>
    </div>
  </BrowserRouter>

export default App;
