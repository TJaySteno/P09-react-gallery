import React, { Component } from 'react';
import './App.css';

import SearchForm from './SearchForm';
import MainNav from './MainNav';
import PhotoContainer from './PhotoContainer';

class App extends Component {
  render() {
    return (
      <div className="container">
        <SearchForm />
        <MainNav />
        <PhotoContainer />
      </div>
    );
  }
}

export default App;
