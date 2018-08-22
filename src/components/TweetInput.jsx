import React from 'react';
import { Icon, Input } from 'semantic-ui-react';

const TweetInput = () => (
  <Input icon={<Icon name="edit" link />} placeholder="Tweet Something..." />
);

export default TweetInput;
