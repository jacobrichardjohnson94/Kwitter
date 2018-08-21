import React, { Component } from 'react';
import { Grid, Container } from 'semantic-ui-react';

import PageHeader from './PageHeader.js';
import TweetInput from './TweetInput.js';
import Tweet from './Tweet.js';
// import MessageList from './MessageList.js'; DONT USE YET
import LoginList from './LoginList.js';
import CreateAccount from './CreateAccount';
import './App.css';
const bgColor = '#f9f9f9';
const style = {
  mainCol: {
    height: '100%',
  },
  col1: {
    marginTop: '-15em',
  },
  col2: {
    // backgroundColor: bgColor,
    marginTop: '-15em',
  },
};
class App extends Component {
  render() {
    return (
      <React.Fragment>
        <PageHeader />
        <Container style={style.mainCol}>
          <Grid centered verticalAlign="middle" style={style.mainCol} columns={2}>
            <Grid.Column style={style.col1}>
              <CreateAccount />
            </Grid.Column>

            <Grid.Column style={style.col2}>
              <Grid centered columns={1}>
                <Tweet />
                <Tweet />
              </Grid>
            </Grid.Column>
          </Grid>
        </Container>
      </React.Fragment>
    );
  }
}

export default App;
