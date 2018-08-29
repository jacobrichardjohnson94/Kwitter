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


const style = {
  list: {
    marginTop: "5em"
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
      <React.Fragment>
        <List style={style.list} divided verticalAlign="middle">
          {this.props.messageList.map(message => (
            <SingleMessage
            key={message.id}
            message={message.text}
            createdDate={message.createdAt}
            displayName='still working'
            username='unsure'
            userIcon={koalaIcon}
            />
          ))}
        </List>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    loggedIn: state.loginUser.loggedIn,
    messageList: state.getMessages.messages,
    userList: state.getAllUsers.userList
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
