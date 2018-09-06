import React from "react";

import PropTypes from "prop-types";
import { Icon } from "semantic-ui-react";

const divStyle = {
  display: "inline-block",
  width: "70px",
  position: "relative"
};

const LikeButton = ({ count, onClick }) => {
  return (
    <div style={divStyle}>
      <span className="like-button">
        <Icon name="heart" size="tiny" onClick={onClick}/>
        {count > 0 && <span className="like-count">{count}</span>}
      </span>
    </div>
  );
};

LikeButton.propTypes = {
  count: PropTypes.any,
  onClick: PropTypes.any
};

export default LikeButton;
