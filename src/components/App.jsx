import React, { Component } from 'react';
import { Grid, Container, Segment } from 'semantic-ui-react';

import PageHeader from './PageHeader.jsx';
import MessageInput from './MessageInput';
import SingleMessage from './SingleMessage';
// import MessageList from './MessageList.js'; DONT USE YET
import MessageList from './MessageList.jsx';
import CreateAccount from './CreateAccount.jsx';
import UserInfo from './UserInfo.jsx'
import LoginForm from './LoginForm';
import Logout from './Logout';
import { Switch, Route } from 'react-router';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import '../App.css';

const bgColor = '#FCFCFC';
const style = {
  mainCol: {
    height: '100%',
    marginTop: '4rem',
  },
  loginContainer: {
    marginTop: '4rem',
  },
};
class App extends Component {
  render() {
    const initialPageComponents = (
      <React.Fragment>
        <PageHeader />

        <Container>
          <Grid centered verticalAlign="top" style={style.mainCol} columns={2}>
            <Grid.Column style={style.col1}>
              <Segment>
                <CreateAccount />
              </Segment>
            </Grid.Column>

            <Grid.Column>
              <Grid centered columns={1}>
                <MessageList />
              </Grid>
            </Grid.Column>
          </Grid>
        </Container>
      </React.Fragment>
    );
    const loginPage = (
      <React.Fragment>
        <PageHeader />
        <Container style={style.loginContainer}>
          <Segment>
            <LoginForm />
          </Segment>
        </Container>
      </React.Fragment>
    );
    const logoutPage = (
      <React.Fragment>
        <PageHeader />
        <Container style={style.loginContainer}>
          <Segment>
            <Logout />
          </Segment>
        </Container>
      </React.Fragment>
    );
    const userPage = (
      <React.Fragment>
        <PageHeader/>
        <UserInfo/>
      </React.Fragment>
    )
    return (
      <Switch>
        <Route exact path="/" render={() => initialPageComponents} />
        <Route exact path="/login" render={() => loginPage} />
        <Route exact path="/logout" render={() => logoutPage} />
        <Route exact path="/users" render={() => userPage} />
      </Switch>
    );
  }
}

const mapStateToProps = state => {
  return {
    loggedInUser: state.loginUser.loggedInUser,
    loggedIn: state.loginUser.loggedIn,
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    null
  )(App)
);
