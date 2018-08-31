import React from 'react';

import PropTypes from 'prop-types';
import { Icon } from 'semantic-ui-react';

const divStyle = {
  display: 'inline-block',
  width: '70px',
  position: 'relative',
};

const LikeButton = ({ count }) => {
  return (
    <div style={divStyle}>
      <span className="like-button">
        <Icon name="heart" size="tiny" />
        {count > 0 && <span className="like-count">{count}</span>}
      </span>
    </div>
  );
};

LikeButton.propTypes = {
  count: PropTypes.number,
};

export default LikeButton
