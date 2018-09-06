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
import { likedMessage } from "../actions/messages";

const style = {
  list: {},
  container: {
    height: '70vh',
    padding: '.2em',
    overflowX: 'hidden',
    overflowY: 'scroll',
    background: '#F8F8F8'
  },
};
class MessageList extends Component {
  formatDate = date => Date.parse(date);
  componentDidMount() {
    this.props.fetchAllUsers();
  }
  render() {
    const messages = this.props.messages;
    messages.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    let tenMessageList = messages.slice(0, 10);
    let allMessageList = messages;
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
                      likes={message.likes.length}
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
                      likes={message.likes.length}
                      id={message.id}
                      message={message.text || ''}
                      createdDate={message.createdAt}
                      displayName={allMessagesDisplayName}
                      username={allMessagesUsername}
                      addLike={this.props.addLike}
                      token={this.props.token}
                      messagesToChange={this.props.messageList}
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
    token: state.loginUser.loggedInUser.token,
  };
};


const mapDispatchToProps = dispatch => {
  return {
    fetchAllUsers: () => dispatch(fetchAllUsersAsync()),
    fetchAllMessages: () => dispatch(fetchAllMessagesAsync()),
    addLike: (id, token, messagesToChange) => {
      dispatch(likedMessage(id, token, messagesToChange));
    }
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(MessageList)
);
