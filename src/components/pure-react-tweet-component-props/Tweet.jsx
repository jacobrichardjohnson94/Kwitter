import React, { Component } from "react";
import ReactDOM from "react-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import FontAwesome from "react-fontawesome";
import Avatar from "./Avatar";
import Message from "./Message";
import NameWithHandle from "./NameWithHandle";
import MoreOptionsButton from "./MoreOptionsButton";
import Time from "./Time";
import ReplyButton from "./ReplyButton";
import RetweetButton from "./RetweetButton";
import LikeButton from "./LikeButton";
import { likedMessage } from "../../actions/messages";
import { testTweet } from "./testTweet";
import "./style.css";

function Tweet({ tweet }) {
  return (
    <div style={{ background: "white" }} className="tweet">
      <Avatar hash={tweet.gravatar} />
      <div className="content">
        <NameWithHandle author={tweet.author} />
        <Time time={tweet.timestamp} />
        <Message text={tweet.message} />
        <div className="buttons">
          <LikeButton
            count={tweet.likes}
            onClick={() => {
              tweet.addLike(tweet.id, tweet.token, tweet.messagesToChange);
            }}
          />
          <ReplyButton />
          <RetweetButton count={tweet.retweets} />

          <MoreOptionsButton />
        </div>
      </div>
    </div>
  );
}

Tweet.propTypes = {
  tweet: PropTypes.shape({
    id: PropTypes.number,
    message: PropTypes.string.isRequired,
    gravatar: PropTypes.string,
    likes: PropTypes.any,
    retweets: PropTypes.number,
    timestamp: PropTypes.any,
    addLike: PropTypes.any,
    token: PropTypes.any,
    messagesToChange: PropTypes.any
  })
};

const mapStateToProps = state => {
  return {
    token: state.loginUser.loggedInUser.token
  };
};


export default connect(
  mapStateToProps
)(Tweet);
