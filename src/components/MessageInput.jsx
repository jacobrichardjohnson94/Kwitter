
import React, { Component } from 'react';
import { Icon, Input, Card, TextArea } from 'semantic-ui-react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchAllMessagesAsync } from '../actions/messages.js';

const cardStyle = {
  width: '23em',
  height: '11em',

};
const inputStyle = {};

class MessageInput extends Component {
  state = {
    message: '',
  };

  handleMessageChange = event => this.setState({ message: event.target.value });

  submitMessageOnEvent = event => {
    if (event.key === 'Enter' || event.type === 'click') {
      const body = {
        text: this.state.message,
      };
      fetch('https://stark-brook-53416.herokuapp.com/messages', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${this.props.loggedInUserAuthKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      })
        .then(res => res.json())
        .then(() => {
          this.props.fetchAllMessages();
        });
      this.setState({ message: '' });
      event.target.value = '';
    }
  };

  render() {
    return (
      <Card style={cardStyle}>

        <Card.Content
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          <Card.Header style={{ marginBottom: '.5em' }}>
            <h4>Say Something...</h4>
          </Card.Header>


          <Input
            style={inputStyle}
            onChange={this.handleMessageChange}
            value={this.state.message}
            onKeyPress={this.submitMessageOnEvent}
            // style={{width: '100%', borderRadius: '5%'}}
            fluid
            size="large"
            icon={<Icon name="edit" link onClick={this.submitMessageOnEvent} />}
            placeholder="Post a message to the timeline..."
          />
        </Card.Content>
      </Card>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchAllMessages: () => dispatch(fetchAllMessagesAsync()),
  };
};

const mapStateToProps = state => {
  return {
    loggedInUserAuthKey: state.loginUser.loggedInUser.token,
    messageList: state.getMessages.messages,
    userList: state.getAllUsers.userList,
    fetching: state.getAllUsers.fetching,
  };
};
export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(MessageInput)
);
