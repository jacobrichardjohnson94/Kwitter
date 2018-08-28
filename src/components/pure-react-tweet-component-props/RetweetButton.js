import React from 'react';
import FontAwesome from 'react-fontawesome';
import PropTypes from 'prop-types';

const divStyle = {
  display: 'inline-block',
  width: '70px',
}

function getRetweetCount(count) {
  if (count > 0) {
    return (
      <span className='retweet-count'>
        {count}
      </span>
    ) 
  } else {
    return null;
  }
}
const RetweetButton = ({ count }) => {
  return (
    <div style={divStyle}>
      <span className='retweet-button'>
        <FontAwesome name='' className='fa fa-retweet' />
        {getRetweetCount(count)}
      </span>
    </div>
  );
}

RetweetButton.propTypes = {
  count: PropTypes.number
};

export default RetweetButton;