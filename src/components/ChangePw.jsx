import React from "react";
import { Component } from "react";
import { Icon, Button, Form, Message, Grid } from "semantic-ui-react";

import { connect } from "react-redux";
import { updateUserPasswordAsync } from "../actions/user";
import { Link, withRouter } from "react-router-dom";

const USER_API_URL = "https://kwitter-api.herokuapp.com/users";

const style = {
  container: {
    marginTop: "4rem"
    // width: '10rem'
  },
  paragraphText: {
    fontSize: "20px"
  },
  headerText: {
    fontSize: "25px"
  }
};

class ChangePw extends Component {
  state = {
    newPassword: "",
    confirmNewPassword: "",
    passwordChanged: false
  };

  handlePasswordChange = event =>
    this.setState({ newPassword: event.target.value });
  handleConfirmPasswordChange = event =>
    this.setState({ confirmNewPassword: event.target.value });

  handleSubmit = event => {
    const body = {
      password: this.state.confirmNewPassword
    };
    event.preventDefault();
    if (this.state.newPassword === this.state.confirmNewPassword) {
      fetch(USER_API_URL, {
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${this.props.loggedInUserAuthKey}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
      })
        .then(res => res.json())
        .then(data => {
          if (data.errors) {
            console.log(data.errors);
          } else {
            console.log(data.user);
            this.setState({ passwordChanged: true });
          }
        });
      this.setState({ newPassword: "", confirmNewPassword: "" });
    }
  };
  render() {
    return !this.state.passwordChanged ? (
      <Grid centered style={style.container}>
        <Grid.Column width={4}>
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
        </Grid.Column>
      </Grid>
    ) : (
      <Grid  centered style={style.container}>
      <Grid.Column textAlign='center' width={9}>
        <Message>
          <Message.Header style={style.headerText}>
            Password Successfully Changed
          </Message.Header>
          <p style={style.paragraphText}>
            You have successfully changed your password, click{" "}
            <Link to="/account">here</Link> to go back to the account management
            page.
          </p>
        </Message>
        </Grid.Column>
      </Grid>
    );
  }
}

const mapStateToProps = state => {
  return {
    loggedInUserAuthKey: state.loginUser.loggedInUser.token
  };
};
const mapDispatchToProps = dispatch => {
  return {
    patchUserPassword: newPassword =>
      dispatch(updateUserPasswordAsync(newPassword))
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(ChangePw)
);
