import React from 'react';
import FontAwesome from 'react-fontawesome';
import PropTypes from 'prop-types';

const divStyle = {
  display: 'inline-block',
  width: '70px',
};

const LikeButton = ({ count }) => {
  return (
    <div style={divStyle}>
      <span className="like-button">
        <FontAwesome name="" className="fa fa-heart" />
        {count > 0 && <span className="like-count">{count}</span>}
      </span>
    </div>
  );
};

LikeButton.propTypes = {
  count: PropTypes.number,
};

export default LikeButton
