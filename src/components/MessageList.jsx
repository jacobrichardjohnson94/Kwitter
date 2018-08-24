import React, { Component } from 'react';
import { List, Image } from 'semantic-ui-react';
import SingleMessage from './SingleMessage';
import { fetchTenMessagesAsync, fetchAllMessagesAsync } from '../actions/messages';

// const messages = [
//   {
//     username: 'JakeyJ',
//     displayName: 'Jake J',
//     message: 'Hey dood, lokin sharp',
//     img: 'https://react.semantic-ui.com/images/avatar/large/jenny.jpg',
//     createdDate: 'Aug 20',
//   },
//   {
//     username: 'TBone',
//     displayName: 'Taylor G',
//     message: 'I suck at coding',
//     img: 'https://react.semantic-ui.com/images/avatar/small/mark.png',
//     createdDate: 'Aug 23',
//   },
//   {
//     username: 'BMoneyBigDollas',
//     displayName: 'Brian S',
//     message: "Yo guys I'm a cool guy.",
//     img: 'https://react.semantic-ui.com/images/avatar/small/mark.png',
//     createdDate: 'Aug 24',
//   },
// ];

const style = {
  list: {
    marginTop: '5em',
  },
};

class MessageList extends Component {
  render() {
    return (
      <React.Fragment>
        {this.props.loggedIn 
        ? (
          <List style={style.list} divided verticalAlign="middle">
          this.props.messageList.map(message => (
              <SingleMessage
              
              />
            )
          )
          </List>
        )

        : 
         (
          <List>

          </List>
         )
      }
        
      </React.Fragment>
    )
  }
};

const mapStateToProps = state => {
  return {
    loggedIn: state.loginUser.loggedIn,
    messageList: state.getMessages.messages
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchTenMessagesList: () => {dispatch(fetchTenMessagesAsync())},
    fetchAllMessagesList: () => {dispatch(fetchAllMessagesAsync())}
  }
}

export default MessageList;
