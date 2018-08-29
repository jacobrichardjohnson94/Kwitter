import React from 'react';
import FontAwesome from 'react-fontawesome';

const divStyle = {
  display: 'inline-block',
  width: '70px',
};

const ReplyButton = () => {
  return (
    <div style={divStyle}>
      <FontAwesome name="" className="fa fa-reply reply-button" />
    </div>
  );
};

export default ReplyButton;
