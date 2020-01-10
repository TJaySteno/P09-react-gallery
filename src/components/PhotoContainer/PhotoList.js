'use strict';

import React from 'react';
import PropTypes from 'prop-types';

import Photo from './Photo';
import NotFound from './NotFound';

const PhotoList = props => {
  let { photos } = props;
  let photoList;

  if (photos.length > 0) {
    // If photos exist, create a component for each Photo
    photoList = photos.map(photo => {
      const { farm, server, id, secret, title } = photo;
      const url = `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}.jpg`;
      return (
        <Photo url={url} alt={title} key={id} />
      );
    });
  } else {
    // Otherwise, notify user pics that were NotFound
    photoList = <NotFound />
  }

  return (
    <ul>
      {photoList}
    </ul>
  );
};

PhotoList.propTypes = {
  photos: PropTypes.arrayOf(
    PropTypes.object.isRequired
  ).isRequired,
};

export default PhotoList;
