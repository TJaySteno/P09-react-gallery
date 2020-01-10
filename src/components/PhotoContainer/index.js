import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import APIKey from '../../config';

import PhotoList from './PhotoList';
import Loading from './Loading';

// PhotoContainer class component
export default class PhotoContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      searchTag: props.searchTag,
      photos: [],
      isLoading: true,
    };
    this.getPhotosOf(this.state.searchTag);
  }

  // On new props, compare new tag to the last to determine if new photos need to be fetched
  componentWillReceiveProps(nextProps) {
    const searchTag = nextProps.searchTag;
    const oldTag = this.props.searchTag;
    if (searchTag !== oldTag) {
      this.setState({
        isLoading: true,
        searchTag,
      });
      this.getPhotosOf(searchTag);
    }
  }

  // Fetch photos from Flickr API
  getPhotosOf = searchTag => {
    const url = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${APIKey}&tags=${searchTag}&per_page=12&format=json&nojsoncallback=1`;
    axios.get(url, { async: true })
      .then(response => {
        this.setState({
          photos: response.data.photos.photo,
          isLoading: false,
        });
      })
      .catch(error => { console.log(error); });
  };

  render() {
    const { isLoading, photos } = this.state;

    return (
      <div className='photo-container'>
        <h2>{this.state.searchTag}</h2>
        { // While loading notify user, then load the PhotoList
          (isLoading)
          ? <Loading />
          : <PhotoList photos={photos} />
        }
      </div>
    );
  }
}

PhotoContainer.propTypes = {
  searchTag: PropTypes.string.isRequired,
};
