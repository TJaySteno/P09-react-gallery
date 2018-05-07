import React from "react";
import PropTypes from "prop-types";

import Photo from './Photo';
import NotFound from './NotFound';

// PhotoContainer stateless component
  // If photos exist, render Photo component for each photo present
  // Else, render NotFound component
const PhotoContainer = props => {

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

  return(
    <ul>
      {photos}
    </ul>
  );
}

PhotoContainer.propTypes = {
  photos: PropTypes.arrayOf(
    PropTypes.object.isRequired
  ).isRequired
}

export default PhotoContainer;
