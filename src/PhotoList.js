import React from 'react';
import PropTypes from 'prop-types';

import NotFound from './NotFound';

// Refactor into Photo.js
  // Here: {props.photos.map(() => ... )}
const PhotoList = props =>
  <ul>
    {props.photos.map(photo =>
      (
        <li>
          <img
            src={photo.src}
            alt={photo.alt} />
        </li>
      )
    )}
  </ul>

export default PhotoList;

// <NotFound />
