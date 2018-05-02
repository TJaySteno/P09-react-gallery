import React from 'react';
import PropTypes from 'prop-types';

import PhotoList from './PhotoList';

const PhotoContainer = () =>
  <div className="photo-container">
    <h2>Results</h2>
    <PhotoList />
  </div>

export default PhotoContainer;
