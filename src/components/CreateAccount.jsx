<<<<<<< HEAD
import React from 'react';
import { Component } from 'react';
import { Header, Icon, Button, Form, Dimmer, Loader, List } from 'semantic-ui-react';
import { createUserAsync } from '../actions/user.js';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
=======
import React from "react";
import { Component } from "react";
import { Header, Icon, Button, Form, Dimmer, Loader, List } from "semantic-ui-react";
import { createUserAsync } from "../actions/user.js";
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom'
>>>>>>> origin

const style = {
  color: '#B03060',
};
class CreateAccount extends Component {
  state = {
    username: '',
    displayName: '',
    password: '',
  };
  handleUsernameChange = event => {
    this.setState({
      username: event.target.value,
    });
  };
  handleDisplayNameChange = event => {
    this.setState({
      displayName: event.target.value,
    });
  };
  handlePasswordChange = event => {
    this.setState({
      password: event.target.value,
    });
  };

  checkUsername = errorsArr => {
    if (this.state.username.length < 5) {
      errorsArr.push('Username must be between 5-15 characters');
    } else if (this.state.username.length > 15) {
      errorsArr.push('Username must be between 5-15 characters');
    }
  };

  checkDisplayName = errorsArr => {
    if (this.state.displayName.length < 5) {
      errorsArr.push('Display name must be between 5-15 characters');
    } else if (this.state.displayName.length > 15) {
      errorsArr.push('Display name must be between 5-15 characters');
    }
  };

  checkPassword = errorsArr => {
    if (this.state.password.length < 5) {
      errorsArr.push('Password must be at least 5 characters');
    }
  };

  handleSubmit = event => {
    console.log(event);
    const errorsArr = [];
    const newUser = {
      username: this.state.username,
      displayName: this.state.displayName,
      password: this.state.password,
    };
    event.preventDefault();
    this.checkUsername(errorsArr);
    this.checkDisplayName(errorsArr);
    this.checkPassword(errorsArr);
    if (errorsArr.length === 0) {
      this.props.fetchCreateUser(newUser);
    } else {
      console.log(errorsArr);
      this.setState({
        errors: errorsArr,
      });
    }
  };

  render() {
    return (
      <React.Fragment>
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
            onChange={this.handleDisplayNameChange}
            iconPosition="left"
            type=""
            label="Enter Display Name"
            placeholder="Display Name"
          >
            <Icon name="id card" />
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
        <List name="ui list">
          {this.state.errors
            ? this.state.errors.map(errorMsg => {
                return (
                  <List.Item style={style} key={errorMsg}>
                    {' '}
                    {errorMsg}{' '}
                  </List.Item>
                );
              })
            : null}
        </List>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    fetching: state.createUser.fetching,
    loggedIn: state.loginUser.loggedIn,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchCreateUser: newUser => dispatch(createUserAsync(newUser)),
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(CreateAccount)
);
