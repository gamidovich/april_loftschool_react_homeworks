import React from 'react';
import PropTypes from 'prop-types'

const showPageImage = ({ name = '', image = {} }) => (
  <div>
    <p>{name}</p>
    {image && <img src={image.medium} alt={name} />}
  </div>
);

showPageImage.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.object
}

export default showPageImage;
