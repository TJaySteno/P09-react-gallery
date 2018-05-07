import React from 'react';
import PropTypes from "prop-types";

// Photo stateless component
const Photo = props =>
  <li className="photo">
    <img src={props.url} alt={props.alt} />
  </li>

Photo.propTypes = {
  url: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired
}

export default Photo;
