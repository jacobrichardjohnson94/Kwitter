import React from 'react';

import { Card, Image } from 'semantic-ui-react';

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
  return (
    <Card>
      <Card.Content>
        <Image avatar floated="left" size="tiny" src={props.userIcon} />
        <Card.Header style={style.textAlignLeft}>
          {props.displayName}{' '}
          <span style={style.cardHeadGrey}>
            @{props.username} · {props.createdDate}
          </span>
        </Card.Header>
        <Card.Description style={style.textAlign}>{props.message}</Card.Description>
      </Card.Content>
      {/* <Card.Content extra>
      <a>
        <Icon name='user' />
        22 Friends
      </a>
    </Card.Content> */}
    </Card>
  );
}

export default SingleMessage;
