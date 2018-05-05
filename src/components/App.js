import React, { Component } from 'react';
import axios from 'axios';
import '../App.css';
import { Route, Redirect, Switch } from 'react-router-dom';

import APIKey from '../config.js';
import SearchForm from './SearchForm';
import MainNav from './MainNav';
import PhotoContainer from './PhotoContainer';

// Routing, "when here, get this"
  // http://localhost:3000/search/beach - get beach pics
    // Make API call
      // While loading, display "loading..."
      // When returned
        // If length > 0, display pics
        // Else, redirect to /not-found
  // http://localhost:3000/not-found - load NotFound
    // Display NotFound in place of PhotoContainer
      // SearchForm, MainNav still displayed

class App extends Component {

  constructor() {
    super();
    this.state = {
      photos: [],
      loading: true
    };
  }

  componentDidMount() {
    this.getPhotosOf()
  }

  getPhotosOf = (searchText = 'cats') => {
    this.setState({loading: true});
    const url = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${APIKey}&tags=${searchText}&per_page=12&format=json&nojsoncallback=1`;

    axios.get(url)
      .then(res => {
        this.setState({
          photos: res.data.photos.photo,
          loading: false
        });
      })
      .catch(err => { console.log(err); });
  }

  render() {
    console.log(this.state);
    return (
      <div className="container">
        <Route render={() => <SearchForm match={this.match} onSearch={this.getPhotosOf} />} />
        <MainNav />
        <div className="content">
          {
            (this.state.loading)
              ? <p>LoadingLoadingLoadingLoadingLoadingLoadingLoadingLoadingLoadingLoading LoadingLoadingLoadingLoadingLoadingLoadingLoadingLoadingLoadingLoadingLoading LoadingLoadingLoadingLoadingLoadingLoadingLoadingLoadingLoadingLoadingLoading LoadingLoadingLoadingLoadingLoadingLoadingLoadingLoadingLoadingLoadingLoading LoadingLoadingLoadingLoadingLoadingLoadingLoadingLoadingLoadingLoadingLoading LoadingLoadingLoadingLoadingLoadingLoadingLoadingLoadingLoadingLoadingLoading LoadingLoadingLoadingLoadingLoadingLoadingLoadingLoadingLoadingLoadingLoading LoadingLoadingLoadingLoadingLoadingLoadingLoadingLoadingLoadingLoadingLoading</p>
              : <PhotoContainer photos={this.state.photos} />
          }
        </div>
      </div>
    );
  }
}

export default App;
