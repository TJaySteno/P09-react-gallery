import React, { Component } from 'react';
import axios from 'axios';

import '../App.css';
import APIKey from '../config';
import Header from './Header';
import Loading from './Loading';
import PhotoContainer from './PhotoContainer';

// App class component
class App extends Component {

  // Initialize state
  constructor() {
    super();
    this.state = {
      searchTag: '',
      photos: [],
      loading: true
    }
  }

  // Start with waterfall pics
  componentDidMount() {
    this.props.history.push('/search/waterfall');
    this.getPhotosOf('waterfall');
  }

  // Compare new path to the last to determine if new photos need to be fetched
  componentWillReceiveProps(nextProps) {
    const nextPath = nextProps.location.pathname;
    const oldPath = this.props.location.pathname;
    if (nextPath !== oldPath) {
      const searchTag = nextPath.split('/search/')[1];
      this.setState({
        loading: true,
        searchTag
      })
      this.getPhotosOf(searchTag);
    }
  }

  // Fetch photos from Flickr API
  getPhotosOf = searchTag => {
    const url = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${APIKey}&tags=${searchTag}&per_page=12&format=json&nojsoncallback=1`;
    axios.get(url)
      .then(response => {
        this.setState({
          photos: response.data.photos.photo,
          loading: false
        });
      })
      .catch(error => { console.log(error); });
  }

  // Render App
    // Use 'loading' state as switch between Loading and PhotoContainer components
  render() {
    return (
      <div className="container">
        <Header />
        <div className="photo-container">
          <h2>{this.state.searchTag}</h2>
          {
            (this.state.loading)
              ? <Loading />
              : <PhotoContainer photos={this.state.photos} />
          }
        </div>
      </div>
    );
  }
}

export default App;
