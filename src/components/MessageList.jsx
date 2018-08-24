import React from 'react';
import { List, Image } from 'semantic-ui-react';
import SingleMessage from './SingleMessage';

const messages = [
  {
    username: 'JakeyJ',
    displayName: 'Jake J',
    message: 'Hey dood, lokin sharp',
    img: 'https://react.semantic-ui.com/images/avatar/large/jenny.jpg',
    createdDate: 'Aug 20',
  },
  {
    username: 'TBone',
    displayName: 'Taylor G',
    message: 'I suck at coding',
    img: 'https://react.semantic-ui.com/images/avatar/small/mark.png',
    createdDate: 'Aug 23',
  },
  {
    username: 'BMoneyBigDollas',
    displayName: 'Brian S',
    message: "Yo guys I'm a cool guy.",
    img: 'https://react.semantic-ui.com/images/avatar/small/mark.png',
    createdDate: 'Aug 24',
  },
];

const style = {
  list: {
    marginTop: '5em',
  },
};

const MessageList = () => (
  <List style={style.list} divided verticalAlign="middle">
    {messages.map(a => (
      <SingleMessage
        username={a.username}
        displayName={a.displayName}
        message={a.message}
        img={a.img}
        createdDate={a.createdDate}
      />
    ))}
  </List>
);

export default MessageList;
