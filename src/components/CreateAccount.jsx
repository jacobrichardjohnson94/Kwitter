import React from 'react';
import { Component } from 'react';
import { Header, Icon, Button, Form, Dimmer, Loader} from 'semantic-ui-react';
import { createUserAsync } from '../actions/user.js';
import {usernameTooShort, usernameTooLong, 
  usernameForgotten, 
  displayNameTooShort, 
  displayNameTooLong, 
  displayNameForgotten, 
  passwordForgotten, 
  passwordTooShort,
  validForm} from '../actions/create-user-errors.js'
import { connect } from 'react-redux';

const validFormResult = []

class CreateAccount extends Component {
  state = {
    username: '',
    displayName: '',
    password: '',
  };

  handleUsernameChange = event => {
    this.setState({ 
      username: event.target.value, 
      })};
  handleDisplayNameChange = event => {
    this.setState({ 
      displayName: event.target.value,
     })};
  handlePasswordChange = event => {
    this.setState({
      password: event.target.value,
     })};
  
  handleUsernameValidation = () => {
    if (this.state.username.length <= 5) {
      return(
        this.props.displayNameTS()
      )
    } else if (this.state.username.length >= 15) {
      return(
        this.props.displayNameTL()
      )
    } else if (this.state.username === '') {
      return(
        this.props.displayNameF()
      )
    } 
  }

  handleDisplayNameValidation = () => {
    if (this.state.displayName.length <= 5) {
      return(
        this.props.displayNameTS()
      )
    } else if (this.state.displayName.length >= 15) {
      return(
        this.props.displayNameTL()
      )
    } else if (this.state.displayName === '') {
      return(
        this.props.displayNameF()
      )
    }
  }

  handlePasswordValidation = () => {
    if (this.state.password === '') {
      return (
        this.props.passwordF()
      )
    } else if (this.state.password.length <= 5) {
      return (
        this.props.passwordTS()
      )
    }
  }

  validFormTest = () => {
    if (this.props.usernameErrMsg !== '') {
      return (
        console.log(this.props.usernameErrMsg),
        validFormResult.push(this.props.usernameErrMsg)
      )
    } else if (this.props.displayNameErrMsg !== '') {
      return (
        console.log(this.props.displayNameErrMsg),
        validFormResult.push(this.props.displayNameErrMsg)
      )
    } else if (this.props.passwordErrMsg !== '') {
      return (
        console.log(this.props.passwordErrMsg),
        validFormResult.push(this.props.usernameErrMsg)
      )
    } else (
      this.props.validF()
    )
  }

  handleSubmit = event => {
    event.preventDefault();
    
    const newUser = {
      username: this.state.username,
      displayName: this.state.displayName,
      password: this.state.password,
    };

    this.handleUsernameValidation()
    this.handleDisplayNameValidation()
    this.handlePasswordValidation()
    this.validFormTest()
    this.props.validForm ? (this.props.fetchCreateUser(newUser)) : (console.log("Invalid Form" + validFormResult))
    
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
        

    );
  }
}

const mapStateToProps = state => {
  return {
    fetching: state.createUser.fetching,
    loggedIn: state.loginUser.loggedIn,
    usernameTooShort: state.createUserErrors.usernameTooShort,
    usernameTooLong: state.createUserErrors.usernameTooLong,
    usernameForgotten: state.createUserErrors.usernameForgotten,
    usernameErrMsg: state.createUserErrors.usernameErrMsg,
    displayNameTooShort: state.createUserErrors.displayNameTooShort,
    displayNameTooLong: state.createUserErrors.displayNameTooLong,
    displayNameForgotten: state.createUserErrors.displayNameForgotten,
    displayNameErrMsg: state.createUserErrors.displayNameErrMsg,
    passwordForgotten: state.createUserErrors.passwordForgotten,
    passwordTooShort: state.createUserErrors.passwordTooShort,
    passwordErrMsg: state.createUserErrors.passwordErrMsg,
    validForm: state.createUserErrors.validForm
  };
};

const mapDispatchToProps = dispatch => {
  return {
    usernameTS: () => dispatch(usernameTooShort()),
    usernameTL: () => dispatch(usernameTooLong()),
    usernameF: () => dispatch(usernameForgotten()),
    displayNameTS: () => dispatch(displayNameTooShort()),
    displayNameTL: () => dispatch(displayNameTooLong()),
    displayNameF: () => dispatch(displayNameForgotten()),
    passwordF: () => dispatch(passwordForgotten()),
    passwordTS: () => dispatch(passwordTooShort()),
    validF: () => dispatch(validForm()),
    fetchCreateUser: newUser => dispatch(createUserAsync(newUser)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateAccount);
