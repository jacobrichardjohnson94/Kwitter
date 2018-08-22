import React from 'react';
import {Component} from 'react'
import { Header, Icon, Button, Form } from 'semantic-ui-react';


class CreateAccount extends Component{
  state = {
    username: '',
    displayName: '',
    password: ''
  }

  
  handleUsernameChange = (event) => this.setState({ username: event.target.value })

  handleDisplayNameChange = (event) => this.setState({displayName: event.target.value})

  handlePasswordChange = (event) => this.setState({password: event.target.value})

  handleSubmit = (event) => {
    event.preventDefault()
    console.log('this is the state: ', this.state)
    // this.props.createUserRequest
  }
  
  render(){
    console.log(this.state)
    return(
<Form>
    <Header as="h3">Create Account</Header>
    <Form.Input onChange={this.handleUsernameChange} iconPosition="left" type="username" label="Enter Username" placeholder="Username">
      <Icon name="id badge" />
      <input />
    </Form.Input>

    <Form.Input onChange={this.handleDisplayNameChange} iconPosition="left" type="" label="Enter Display Name" placeholder="Display Name">
      <Icon name="id card" />
      <input />
    </Form.Input>

    <Form.Input onChange={this.handlePasswordChange} iconPosition="left" label="Enter Password" type="password" placeholder="Password">
      <Icon name="barcode" />
      <input />
    </Form.Input>

    <Button type="submit" onClick={this.handleSubmit}animated="fade">
      <Button.Content visible>Submit</Button.Content>
      <Button.Content hidden>
        <Icon name="check" size="large" />
      </Button.Content>
    </Button>
  </Form>
    )
  }
  
  

}

export default CreateAccount;
