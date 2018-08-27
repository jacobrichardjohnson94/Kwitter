import React, { Component } from 'react';
import { Message } from 'semantic-ui-react';

class LoginSuccess extends Component {
  render() {
    return (
      <Message
        success
        header="Your user registration was successful"
        content="You may now log-in with the username you have chosen"
      />
    );
  }
}

export default LoginSuccess;
