import React from 'react';
import PropTypes from 'prop-types';

import PhotoList from './PhotoList';

const PhotoContainer = props =>
  <div className="photo-container">
    <h2>Results</h2>
    <PhotoList
      photos={props.photos} />
  </div>

export default PhotoContainer;
