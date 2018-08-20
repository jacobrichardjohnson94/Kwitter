import React from 'react';
import { Header, Segment, Icon } from 'semantic-ui-react';

const PageHeader = () => (
  <Segment clearing>
    <Header as="h2" floated="left">
      Kwitter
    </Header>

    <Header as="h3" floated="right">
      <Icon name="user" />
    </Header>
    <Header as="h3" floated="right">
      Sign In
    </Header>
  </Segment>
);

export default PageHeader;
