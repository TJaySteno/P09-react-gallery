import React from 'react';
import PropTypes from 'prop-types';

const Photo = props =>
  <li>
    <img src={props.src} alt={props.alt} />
  </li>

Photo.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string
}

export default Photo;
