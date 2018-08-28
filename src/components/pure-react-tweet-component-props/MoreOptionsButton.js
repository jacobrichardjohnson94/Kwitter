import React from 'react';
import FontAwesome from 'react-fontawesome';

const divStyle = {
  display: 'inline-block',
  width: '70px',
}

const MoreOptionsButton = () => {
  return (
    <div style={divStyle}>
      <FontAwesome name='' className='fa fa-ellipsis-h more-options-button' />
    </div>
  )
}

export default MoreOptionsButton;