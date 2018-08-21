import React from 'react';
import { Header, Segment, Icon, Container } from 'semantic-ui-react';
const bgColor = '#f9f9f9';

const style = {
  header: {
    backgroundColor: bgColor,
  },
};
const PageHeader = () => (
  <React.Fragment>
    <Segment style={style.header} clearing>
      <Header as="h1" floated="left">
        Kwitter
      </Header>

      <Header as="h3" floated="right">
        <Icon name="user" />
      </Header>
      <Header as="h3" floated="right">
        Sign In
      </Header>
    </Segment>
  </React.Fragment>
);

export default PageHeader;
