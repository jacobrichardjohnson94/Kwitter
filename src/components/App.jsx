import React, { Component } from 'react';
import { Grid, Container } from 'semantic-ui-react';

import PageHeader from './PageHeader.jsx';
import MessageInput from './MessageInput';
import SingleMessage from './SingleMessage';
// import MessageList from './MessageList.js'; DONT USE YET
import MessageList from './MessageList.jsx';
import CreateAccount from './CreateAccount.jsx';
import LoginForm from './LoginForm';
import { Switch, Route } from 'react-router';
import { withRouter } from 'react-router-dom';

import { connect } from 'react-redux';

import '../App.css';

const bgColor = '#f9f9f9';
const style = {
  mainCol: {
    height: '100%',
    marginTop: '5rem',
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
              <CreateAccount />
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

      // </React.Fragment>
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
