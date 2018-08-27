import React, { Component } from "react";
import { List, Image } from "semantic-ui-react";
import SingleMessage from "./SingleMessage";
import {
  fetchTenMessagesAsync,
  fetchAllMessagesAsync
} from "../actions/messages";
import { fetchAllUsersAsync } from '../actions/fetch-all-users.js'
import { connectRouter } from "connected-react-router";
import {connect} from "react-redux"
import koalaIcon from '../resources/images/koalaIcon.svg';
import { Dimmer, Loader } from 'semantic-ui-react';



const style = {
  // list: {
  //   marginTop: "5em",
  // },
  container: {
    marginTop:'1em',
    height: "23em",
    overflowX: 'hidden',
    overflowY: 'scroll'

  }
};

class MessageList extends Component {


  // componentDidMount(){
  // fetch('https://kwitter-api.herokuapp.com/users')
  // .then(res=>res.json())
  // .then(data=>{
  //   this.setState({userList: data})
  //   // console.log(this.state)
  // })
  
  
  
  componentWillMount() {
      this.props.fetchAllUsers()
    
      if (this.props.loggedIn) {
        this.props.fetchAllMessagesList();
      } else {
        this.props.fetchTenMessagesList();
      }
    }
    
  render() {
    return (
      <div style={style.container}>
        {this.props.fetching ? (
          <Dimmer active>
            <Loader>Loading</Loader>
          </Dimmer>
        ) : null}
        <List style={style.list} divided verticalAlign="middle">
          {this.props.messageList.map(message => {
            let displayName
            let username
            this.props.userList.users.forEach(user => {
              if(message.userId===user.id){
                displayName = user.displayName
                username = user.userName
              }
            })
            return <SingleMessage
            key={message.id}
            message={message.text}
            createdDate={message.createdAt}
            displayName={displayName}
            username={username}
            />
          }
          )}
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
    fetching: state.getAllUsers.fetching
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchTenMessagesList: () => dispatch(fetchTenMessagesAsync()),
    fetchAllMessagesList: () => dispatch(fetchAllMessagesAsync()),
    fetchAllUsers: () => dispatch(fetchAllUsersAsync())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MessageList)
