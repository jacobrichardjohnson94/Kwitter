import React, { Component } from 'react';

import './App.css';

import PageHeader from './PageHeader.js';
import TweetInput from './TweetInput.js';
import Tweet from './Tweet.js';
import MessageList from './MessageList.js';
import LoginList from './LoginList.js';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <PageHeader />
        <TweetInput />
        <Tweet />
        <MessageList />;
      </React.Fragment>
    );
  }
}

export default App;
