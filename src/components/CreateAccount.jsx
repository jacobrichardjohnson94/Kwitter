import React from 'react';
import { Header, Icon, Button, Form } from 'semantic-ui-react';

handleSubmit(event) {
  this.props.createUserRequest
}

const CreateAccount = () => (
  <Form>
    <Header as="h3">Create Account</Header>
    <Form.Input iconPosition="left" type="username" label="Enter Username" placeholder="Username">
      <Icon name="id badge" />
      <input />
    </Form.Input>

    <Form.Input iconPosition="left" type="" label="Enter Display Name" placeholder="Display Name">
      <Icon name="id card" />
      <input />
    </Form.Input>

    <Form.Input iconPosition="left" label="Enter Password" type="password" placeholder="Password">
      <Icon name="barcode" />
      <input />
    </Form.Input>

    <Button type="submit" animated="fade">
      <Button.Content visible>Submit</Button.Content>
      <Button.Content hidden>
        <Icon name="check" size="large" />
      </Button.Content>
    </Button>
  </Form>
);

export default CreateAccount;
