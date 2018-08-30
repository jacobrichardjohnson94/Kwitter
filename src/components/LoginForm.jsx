import React from "react";
import { Component } from "react";
import {
  Header,
  Icon,
  Button,
  Form,
  Dimmer,
  Loader,
  List
} from "semantic-ui-react";

import { connect } from "react-redux";
import { loginUserAsync, getAllUserInfoAsync } from "../actions/user";
import { withRouter } from "react-router-dom";

const style = {
  color: "#B03060"
};

class LoginForm extends Component {
  state = {
    username: "",
    password: ""
  };

  handleUsernameChange = event =>
    this.setState({ username: event.target.value });
  handlePasswordChange = event =>
    this.setState({ password: event.target.value });

  handleSubmit = event => {
    event.preventDefault();
    // console.log('this is the state: ', this.state)
    const userInfo = {
      username: this.state.username,
      password: this.state.password
    };
    this.props.fetchLoginUser(userInfo);
  };

  render() {
    console.log("props", this.props.loggedInUser);
    return (
      <React.Fragment>
        <Form>
          {this.props.fetching ? (
            <Dimmer active>
              <Loader>Loading</Loader>
            </Dimmer>
          ) : null}
          <Header as="h3">Login</Header>
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
              {this.props.loginErrors ? (
                <Icon name="dont" size="large" />
              ) : (
                <Icon name="check" size="large" />
              )}
            </Button.Content>
          </Button>
        </Form>
        <List style={style} key={this.props.loginErrors}>
          {this.props.loginErrors}
        </List>
      </React.Fragment>
    );
  }
}
const mapStateToProps = state => {
  return {
    loggedInUser: state.loginUser.loggedInUser,
    userInfo: state.loginUser.userInfo,
    fetching: state.loginUser.fetching,
    loginErrors: state.loginUser.loginError
  };
};
const mapDispatchToProps = dispatch => {
  return {
    fetchLoginUser: userInfo => dispatch(loginUserAsync(userInfo)),
    fetchAllUserInfo: token => dispatch(getAllUserInfoAsync(token))
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(LoginForm)
);
