import React from 'react';
import { Card, Image } from 'semantic-ui-react';
import taylorLMAO from '../resources/images/TbonesGoofyAssFace.png';
import Tweet from './pure-react-tweet-component-props/Tweet.js';

function SingleMessage(props) {
  {
    /* <Card>
      <Card.Content>
        <Image size="mini" style={style.avatar} floated="left" src={taylorLMAO} />
        <Card.Header style={style.textAlignLeft}>
          {props.displayName}{' '}
          <span style={style.cardHeadGrey}>
            @{props.username} · {props.createdDate}
          </span>
        </Card.Header>
        <Card.Description style={style.textAlign}>{props.message}</Card.Description>
      </Card.Content>
    </Card> */
  }

  let tweetInfo = {
    message: props.message,
    gravatar: taylorLMAO,
    author: {
      handle: props.username,
      name: props.displayName,
    },
    likes: 0,
    retweets: null,
    timestamp: props.createdDate,
  };
  return <Tweet tweet={tweetInfo} />;
}

export default SingleMessage;
