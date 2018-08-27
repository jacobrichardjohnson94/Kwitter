import React, { Component } from "react";
import { List, Image } from "semantic-ui-react";
import SingleMessage from "./SingleMessage";
import {
  fetchTenMessagesAsync,
  fetchAllMessagesAsync
} from "../actions/messages";
import {connect} from "react-redux"

const style = {
  list: {
    marginTop: "5em"
  }
};

class MessageList extends Component {
  componentWillMount() {
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
    messageList: state.getMessages.messages
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchTenMessagesList: () => dispatch(fetchTenMessagesAsync()),
    fetchAllMessagesList: () => dispatch(fetchAllMessagesAsync())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MessageList)
