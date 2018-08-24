import React from 'react';
import { Icon, Input } from 'semantic-ui-react';

const MessageInput = () => (
  <Input icon={<Icon name="edit" link />} placeholder="Tweet Something..." />
);

export default MessageInput;
