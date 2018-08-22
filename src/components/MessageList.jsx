import React from 'react';
import { List, Image } from 'semantic-ui-react';

const messages = [
  {
    name: 'Jake J',
    message: 'Hey dood, lokin sharp',
    img: 'https://react.semantic-ui.com/images/avatar/large/jenny.jpg',
  },
  {
    name: 'Taylor G.',
    message: 'I suck at coding',
    img: 'https://react.semantic-ui.com/images/avatar/small/mark.png',
  },
  {
    name: 'Taylor G',
    message: "Sorry I'm so lame",
    img: 'https://react.semantic-ui.com/images/avatar/small/mark.png',
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
      <List.Item>
        <Image avatar src={a.img} />
        <List.Content>
          <List.Header as="a">{a.name}</List.Header>
          <List.Description>{a.message}</List.Description>
        </List.Content>
      </List.Item>
    ))}
  </List>
);

export default MessageList;
