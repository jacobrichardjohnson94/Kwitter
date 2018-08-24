import React, { Component } from 'react';
import { Grid, Container } from 'semantic-ui-react';

import PageHeader from './PageHeader.jsx';
import TweetInput from './TweetInput.jsx';
import Tweet from './Tweet.jsx';
// import MessageList from './MessageList.js'; DONT USE YET
import LoginList from './LoginList.jsx';
import CreateAccount from './CreateAccount.jsx';
import LoginForm from './LoginForm';
import { Switch, Route } from 'react-router';

import '../App.css';

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
    const initialPageComponents = (
      <React.Fragment>
        <PageHeader />
        <Container>
          <CreateAccount />
        </Container>
      </React.Fragment>
    );
    const loginPage = (
      <React.Fragment>
        <PageHeader />
        <Container>
          <LoginForm />
        </Container>
      </React.Fragment>
    );
    return (
      <Switch>
        <Route exact path="/" render={() => initialPageComponents} />
        <Route exact path="/login" render={() => loginPage} />
      </Switch>
      // <React.Fragment>
      //   <PageHeader />
      //   <LoginForm />
      //   <CreateAccount />
      //   {/* <Container style={style.mainCol}>
      //     <Grid centered verticalAlign="middle" style={style.mainCol} columns={2}>
      //       <Grid.Column style={style.col1}>
      //         <CreateAccount />
      //       </Grid.Column>

      //       <Grid.Column style={style.col2}>
      //         <Grid centered columns={1}>
      //           <Tweet />
      //           <Tweet />
      //         </Grid>
      //       </Grid.Column>
      //     </Grid>
      //   </Container>*/}
      // </React.Fragment>
    );
  }
}

export default App;
