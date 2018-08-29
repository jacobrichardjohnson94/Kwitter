import React from 'react';
import { Component } from 'react';
import { Icon, Button, Form } from 'semantic-ui-react';

import { connect } from 'react-redux';
import { updateUserPasswordAsync } from '../actions/user';
import { withRouter } from 'react-router-dom';

class ChangePw extends Component {
  state = {
    newPassword: '',
    confirmNewPassword: '',
  };
  handlePasswordChange = event => this.setState({ newPassword: event.target.value });
  handleConfirmPasswordChange = event => this.setState({ confirmNewPassword: event.target.value });

  handleSubmit = event => {
    event.preventDefault();
    console.log(this.props.loggedInUser.token);
    if (this.state.newPassword === this.state.confirmNewPassword) {
      console.log(this.state.newPassword);
      const newPassword = { password: this.props.newPassword };
      this.props.patchUserPassword(newPassword, this.props.loggedInUser.token);
    }
  };
  render() {
    return (
      <Form>
        <Form.Input
          onChange={this.handlePasswordChange}
          iconPosition="left"
          label="Enter New Password"
          type="password"
          placeholder="New Password"
        >
          <Icon name="barcode" />
          <input />
        </Form.Input>

        <Form.Input
          onChange={this.handleConfirmPasswordChange}
          iconPosition="left"
          label="Confirm New Password"
          type="password"
          placeholder="Confirm Password"
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
  };
};
const mapDispatchToProps = dispatch => {
  return {
    patchUserPassword: newPassword => dispatch(updateUserPasswordAsync(newPassword)),
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(ChangePw)
);
