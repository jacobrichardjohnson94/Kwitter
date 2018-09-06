import React from 'react';
import { Card, Image } from 'semantic-ui-react';
import koalaIcon from '../resources/images/koalaUser.jpg';
import Tweet from './pure-react-tweet-component-props/Tweet.jsx';

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

function SingleMessage(props) {
  let tweetInfo = {
    id: props.id,
    message: props.message,
    messagesToChange: props.messagesToChange,
    gravatar: koalaIcon,
    author: {
      handle: props.username,
      name: props.displayName,
    },
    likes: props.likes,
    retweets: null,
    timestamp: props.createdDate,
    addLike: props.addLike,
    token: props.token
  };
return <Tweet tweet={tweetInfo} />;
}



export default SingleMessage;
