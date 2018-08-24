import React from 'react';
import { Component } from 'react';
import { Header, Icon, Button, Form, Dimmer, Loader } from 'semantic-ui-react';

import { connect } from 'react-redux';
import { loginUserAsync } from '../actions/user';
class LoginForm extends Component {
  state = {
    username: '',
    password: '',
  };

  handleUsernameChange = event => this.setState({ username: event.target.value });
  handlePasswordChange = event => this.setState({ password: event.target.value });

  handleSubmit = event => {
    event.preventDefault();
    // console.log('this is the state: ', this.state)
    const userInfo = {
      username: this.state.username,
      password: this.state.password,
    };
    console.log('props', this.props);
    this.props.fetchLoginUser(userInfo);
  };

  render() {
    return (
      <Form>
        {this.props.fetching ? (
          <Dimmer active>
            <Loader>Loading</Loader>
          </Dimmer>
        ) : null}
        <Header as="h3">Create Account</Header>
        <Form.Input
          onChange={this.handleUsernameChange}
          iconPosition="left"
          type="username"
          label="Enter Username"
          placeholder="Username"
        >
          <Icon name="id badge" />
          <input />
        </Form.Input>

        <Form.Input
          onChange={this.handlePasswordChange}
          iconPosition="left"
          label="Enter Password"
          type="password"
          placeholder="Password"
        >
          <Icon name="barcode" />
          <input />
        </Form.Input>

        <Button type="submit" onClick={this.handleSubmit} animated="fade">
          <Button.Content visible>Submit</Button.Content>
          <Button.Content hidden>
            <Icon name="check" size="large" />
          </Button.Content>
        </Button>
      </Form>
    );
  }
}
const mapStateToProps = state => {
  return {
    loggedInUser: state.loginUser.loggedInUser,
    fetching: state.loginUser.fetching,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    fetchLoginUser: userInfo => dispatch(loginUserAsync(userInfo)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm);
