import React from 'react';
import { Card, Image } from 'semantic-ui-react';
import koalaIcon from '../resources/images/koalaUser.jpg';
import Tweet from './pure-react-tweet-component-props/Tweet.js';

const style = {
  textAlignRight: {
    textAlign: 'right',
  },
  textAlignLeft: {
    textAlign: 'Left',
    fontSize: '1.1rem',
  },
  cardHeadGrey: {
    textAlign: 'right',
    color: 'lightgrey',
    fontSize: '1rem',
    fontWeight: 'normal',
    verticalAlign: 'top',
  },
};
const getLength = arr => {
  return arr.length;
};
function SingleMessage(props) {
  let tweetInfo = {
    message: props.message,
    gravatar: koalaIcon,
    author: {
      handle: props.username,
      name: props.displayName,
    },
    likes: getLength(props.likes),
    retweets: null,
    timestamp: props.createdDate,
  };
  return <Tweet tweet={tweetInfo} />;
}

export default SingleMessage;
