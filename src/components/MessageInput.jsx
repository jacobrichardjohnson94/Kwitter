import React, { Component } from "react";
import { Icon, Input } from "semantic-ui-react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { fetchAllMessagesAsync } from "../actions/messages.js";

const firstDivStyle = {
  width: "25em"
};

class MessageInput extends Component {
  state={
    message: ''
  }

  handleMessageChange = event => this.setState({message: event.target.value})

  submitMessageOnClick = event => {
    event.preventDefault()
    const body = {
      'text': this.state.message
    }
    fetch("https://kwitter-api.herokuapp.com/messages", {
      method: "POST",
      headers: {
        'Authorization': `Bearer ${this.props.loggedInUserAuthKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
      
      })
      .then(res=> res.json()).then(data=>{

        this.props.fetchAllMessages()
        
      }
      )
    this.setState({message: ''})
  };

  submitMessageOnEnter = event => {
    if(event.key === 'Enter'){
    const body = {
      'text': this.state.message
    }
    fetch("https://kwitter-api.herokuapp.com/messages", {
      method: "POST",
      headers: {
        'Authorization': `Bearer ${this.props.loggedInUserAuthKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
      
      })
      .then(res=> res.json()).then(data=>{

        this.props.fetchAllMessages()
      }
    )
    this.setState({message: ''})
    event.target.value=''
  }};

  render() {
    return (
      <div style={firstDivStyle}>
        <Input
          onChange={this.handleMessageChange}
          value={this.state.message}
          onKeyPress={this.submitMessageOnEnter}
          fluid
          size="large"
          icon={<Icon name="edit" link onClick={this.submitMessageOnClick}  />}
          placeholder="Post a message to the timeline..."
        />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchAllMessages: () => dispatch(fetchAllMessagesAsync())
  };
};

const mapStateToProps = state => {
  return {
    loggedInUserAuthKey: state.loginUser.loggedInUser.token,
    messageList: state.getMessages.messages,
    userList: state.getAllUsers.userList,
    fetching: state.getAllUsers.fetching
  };
};
export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(MessageInput)
);
