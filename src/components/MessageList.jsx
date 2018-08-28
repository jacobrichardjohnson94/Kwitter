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

const style = {
  list: {
    marginTop: "em",
  },
  container: {
    marginTop: '1em',
    height: '23em',
    overflowX: 'hidden',
    overflowY: 'scroll',
  },
};

class MessageList extends Component {
  // componentDidMount(){
  // fetch('https://kwitter-api.herokuapp.com/users')
  // .then(res=>res.json())
  // .then(data=>{
  //   this.setState({userList: data})
  //   // console.log(this.state)
  // })

  convertDate(date) {
    let newDate = new Date(date);
    let formatter = new Intl.DateTimeFormat('en-us', { month: 'short' });
    let month = formatter.format(newDate);
    let dt = newDate.getDate();
    if (dt < 10) {
      dt = '0' + dt;
    }
    return month + '/' + dt;
  }

  componentDidMount() {
    this.props.fetchAllUsers();
  }

  render() {
    const tenMessageList = this.props.messageList.slice(0, 10)
    return (
      <div style={style.container}>
        {this.props.fetching ? (
          <Dimmer active>
            <Loader>Loading</Loader>
          </Dimmer>
        ) : null}
        <List style={style.list} divided verticalAlign="middle">
          {!this.props.loggedIn ? tenMessageList.map(message => {
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
                message={message.text}
                createdDate={this.convertDate(message.createdAt)}
                displayName={displayName}
                username={username}
              />
            );
          }): this.props.messageList.map(message => {
            let ALL_MESSAGES_displayName
            let ALL_MESSAGES_username
            this.props.userList.users.forEach(user => {
              if(message.userId === user.id) {
                ALL_MESSAGES_displayName = user.displayName
                ALL_MESSAGES_username = user.username
              }
            })
            return (
              <SingleMessage
                key={message.id}
                message={message.text}
                createdDate={message.createdAt}
                displayName={ALL_MESSAGES_displayName}
                username={ALL_MESSAGES_username}
              />
            )
          })}
        </List>
      </div>
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
    // fetchTenMessagesList: () => dispatch(fetchTenMessagesAsync()),
    // fetchAllMessagesList: () => dispatch(fetchAllMessagesAsync()),
    fetchAllUsers: () => dispatch(fetchAllUsersAsync()),
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(MessageList)
);
