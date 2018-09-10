import React from 'react';
import PropTypes from 'prop-types';

const Avatar = ({ hash }) => {
  let url = hash;
  return <img src={url} className="avatar" alt="avatar" />;
};

Avatar.propTypes = {
  hash: PropTypes.string,
};

export default Avatar;
