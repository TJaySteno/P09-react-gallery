import React from 'react';
import PropTypes from 'prop-types';

import NotFound from './NotFound';

// Refactor into Photo.js
  // Here: {props.photos.map(() => ... )}
const PhotoList = props =>
  <ul>
    <li>
      <img src="https://farm5.staticflickr.com/4334/37032996241_4c16a9b530.jpg" alt="" />
    </li>
  </ul>

export default PhotoList;

// <NotFound />
