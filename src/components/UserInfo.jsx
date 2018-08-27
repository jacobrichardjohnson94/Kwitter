import React, { Component } from "react";
import MessageList from "./MessageList";
import {connect} from "react-redux"

class UserInfo extends Component {
    render() {
        return (
            <MessageList/>
        )
    }
}

const mapStateToProps = state => {
    return {
        loggedIn: state.loginUser.loggedIn,
        messageList: state.getMessages.messages,
        username: state.getUser.username,
        displayname: state.getUser.displayname,
        id: state.getUser.id
    }
}

export default connect(mapStateToProps)(UserInfo)