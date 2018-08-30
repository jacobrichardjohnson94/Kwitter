import React, { Component } from 'react';
import { List, Image } from 'semantic-ui-react';
import SingleMessage from './SingleMessage';
import { fetchTenMessagesAsync, fetchAllMessagesAsync } from '../actions/messages';
import { fetchAllUsersAsync } from '../actions/fetch-all-users.js';
import { connectRouter } from 'connected-react-router';
import { connect } from 'react-redux';
import koalaIcon from '../resources/images/koalaIcon.svg';
import { Dimmer, Loader } from 'semantic-ui-react';
import { withRouter } from 'react-router-dom';
import MessageInput from './MessageInput.jsx';

const style = {
  list: {},
  container: {
    height: '70vh',
    padding: '.2em',
    overflowX: 'hidden',
    overflowY: 'scroll',
  },
};

class MessageList extends Component {
  formatDate = date => Date.parse(date);
  messages = this.props.messages;
  componentDidMount() {
    this.props.fetchAllUsers();
  }

  render() {
    this.messages.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

    let tenMessageList = this.messages.slice(0, 10);
    let allMessageList = this.messages;
    return (
      <React.Fragment>
        <div style={style.container}>
          {this.props.fetching ? (
            <Dimmer active>
              <Loader>Loading</Loader>
            </Dimmer>
          ) : null}
          <List style={style.list} divided verticalAlign="middle">
            {!this.props.loggedIn
              ? tenMessageList.map(message => {
                  let displayName;
                  let username;
                  this.props.userList.users.forEach(user => {
                    if (message.userId === user.id) {
                      displayName = user.displayName;
                      username = user.username;
                    }
                  });
                  return (
                    <SingleMessage
                      key={message.id}
                      id={message.id}
                      message={message.text || ''}
                      createdDate={this.formatDate(message.createdAt)}
                      displayName={displayName}
                      username={username}
                    />
                  );
                })
              : allMessageList.map(message => {
                  let allMessagesDisplayName;
                  let allMessagesUsername;
                  this.props.userList.users.forEach(user => {
                    if (message.userId === user.id) {
                      allMessagesDisplayName = user.displayName;
                      allMessagesUsername = user.username;
                    }
                  });
                  return (
                    <SingleMessage
                      key={message.id}
                      id={message.id}
                      message={message.text || ''}
                      createdDate={message.createdAt}
                      displayName={allMessagesDisplayName}
                      username={allMessagesUsername}
                    />
                  );
                })}
          </List>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    loggedIn: state.loginUser.loggedIn,
    messageList: state.getMessages.messages,
    userList: state.getAllUsers.userList,
    fetching: state.getAllUsers.fetching,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchAllUsers: () => dispatch(fetchAllUsersAsync()),
    fetchAllMessages: () => dispatch(fetchAllMessagesAsync()),
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(MessageList)
);
