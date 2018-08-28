import React from 'react';
import PropTypes from 'prop-types';

const NameWithHandle = ({ author }) => {
  const { name, handle } = author;
  return (
    <span className='name-with-handle'>
      <span className='name'>{name}</span>
      <span className='handle'>@{handle}</span>
    </span>
  );
}

NameWithHandle.propTypes = {
  author: PropTypes.shape({
    name: PropTypes.string.isRequired,
    handle: PropTypes.string.isRequired
  }).isRequired
};

export default NameWithHandle;