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
import { getAllUserInfoAsync } from '../actions/user.js';

const style = {
  list: {},
  container: {
    height: '70vh',
    padding: '.2em',
    overflowX: 'hidden',
    overflowY: 'scroll',
    background: '#F8F8F8',
  },
};

const LoadingAnimation = () => {
  return (
    <Dimmer active>
      <Loader>Loading</Loader>
    </Dimmer>
  );
};

class MessageList extends Component {
  formatDate = date => Date.parse(date);
  componentDidMount() {
    this.props.fetchAllUsers();

    this.props.fetchAllUserInfo(this.props.loggedInUser.token, this.props.loggedInUser.id);
  }

  render() {
    let messages = this.props.messages;
    messages.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    !this.props.loggedIn ? (messages = messages.slice(0, 10)) : null;
    return (
      <React.Fragment>
        <div style={style.container}>
          {this.props.fetching ? <LoadingAnimation /> : null}
          <List style={style.list} divided verticalAlign="middle">
            {messages.map(message => {
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
                  likes={message.likes || []}
                  createdDate={this.formatDate(message.createdAt)}
                  displayName={displayName || ''}
                  username={username || ''}
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
    loggedInUser: state.loginUser.loggedInUser,
    userList: state.getAllUsers.userList,
    fetching: state.getAllUsers.fetching,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchAllUsers: () => dispatch(fetchAllUsersAsync()),
    fetchAllMessages: () => dispatch(fetchAllMessagesAsync()),
    fetchAllUserInfo: (token, id) => dispatch(getAllUserInfoAsync(token, id)),
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(MessageList)
);
