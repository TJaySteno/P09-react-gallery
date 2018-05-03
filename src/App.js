import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

import APIKey from './config.js';
import SearchForm from './components/SearchForm';
import MainNav from './components/MainNav';
import PhotoContainer from './components/PhotoContainer';

// Routing, "when here, get this"
  // http://localhost:3000/beach - get beach pics
    // Make API call
      // https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key={APIKey}&tags={myTag}&per_page=12&format=json&nojsoncallback=1
      // While loading, display "loading..."
      // When returned
        // If length > 0, display pics
        // Else, redirect to /not-found
  // http://localhost:3000/not-found - load NotFound
    // Display NotFound in place of PhotoContainer
      // SearchForm, MainNav still displayed

class App extends Component {
  state = {}

  handleSubmit = e => {
    e.preventDefault();

    console.log(e.target.value);

    this.getPhotosOf();
  }

  getPhotosOf = (tag = 'cats') => {
    const url = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${APIKey}&tags=${tag}&per_page=12&format=json&nojsoncallback=1`;

    axios.get(url)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="container">
        <SearchForm
          handleSubmit={this.handleSubmit} />
        <MainNav />
        <PhotoContainer />
      </div>
    );
  }
}

export default App;
