import React from 'react';
import PropTypes from "prop-types";

import Photo from './Photo';
import NotFound from './NotFound';

// PhotoList stateless component
const PhotoList = props => {

  let photos;
  if (props.photos.length > 0) {
    photos = props.photos.map(photo => {
      const { farm, server, id, secret, title } = photo;
      const url = `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}.jpg`;
      return <Photo url={url} alt={title} key={id} />;
    });
  } else {
    photos = <NotFound />
  }

  return (
    <ul>
      {photos}
    </ul>
  );
}


PhotoList.propTypes = {
  photos: PropTypes.arrayOf(
    PropTypes.object.isRequired
  ).isRequired
}

export default PhotoList;
