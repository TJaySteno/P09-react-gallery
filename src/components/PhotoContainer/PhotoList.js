import React from 'react';
import PropTypes from 'prop-types';

import Photo from './Photo';

const PhotoList = props =>
  <ul>
    {
      props.photos.map(photo => {
        const { farm, server, id, secret } = photo;
        const src = `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}.jpg`;

        return (
          <Photo key={id}
            src={src}
            alt={props.title} />
        );
      })
    }
  </ul>

PhotoList.propTypes = {
  photos: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired
}

export default PhotoList;
