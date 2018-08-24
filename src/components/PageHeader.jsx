import React from 'react';
import { Component } from 'react';
import { Header, Segment, Icon, Container } from 'semantic-ui-react';

import { connect } from 'react-redux';
const bgColor = '#f9f9f9';

const style = {
  header: {
    backgroundColor: bgColor,
  },
};
class PageHeader extends Component {
  render() {
    return (
      <React.Fragment>
        <Segment style={style.header} clearing>
          <Header as="h1" floated="left">
            Kwitter
          </Header>

          <Header as="h3" floated="right">
            <Icon name="user" />
          </Header>
          <Header as="h3" floated="right">
            {console.log(this.props)}
            {this.props.loggedIn ? <p>Logout </p> : <p>Login </p>}
          </Header>
        </Segment>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    loggedIn: state.loginUser.loggedIn,
  };
};
export default connect(
  mapStateToProps,
  null
)(PageHeader);
