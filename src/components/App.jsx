import React, { Component } from 'react';
import { Grid, Container, Segment } from 'semantic-ui-react';

import PageHeader from './PageHeader.jsx';
import MessageInput from './MessageInput';
import SingleMessage from './SingleMessage';

import MessageList from './MessageList.jsx';
import CreateAccount from './CreateAccount.jsx';
import UserCard from './UserCard.jsx';
import UserInfo from './UserInfo.jsx';
import LoginForm from './LoginForm';
import Logout from './Logout';
import { Switch, Route } from 'react-router';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';

import '../App.css';
import AccountManagement from './UserCard';
import ChangePw from './ChangePw';

const bgColor = '#FCFCFC';
const style = {
  mainCol: {
    height: '100%',
    marginTop: '4rem',
  },
  loginContainer: {
    marginTop: '4rem',
  },
  segment: {
    margin: '0',
    padding: '.5em',
  },
  loginLink: { color: 'black', textAlign: 'center' },
  grid: {
    marginTop: '1em',
  },
};
class App extends Component {
  render() {
    const initialPageComponents = (
      <React.Fragment>
        <PageHeader />

        <Container>
          <Grid verticalAlign="middle" style={style.mainCol} columns={2}>
          {!this.props.loggedIn ? (
            <Grid.Column style={style.col1}>
            <Segment>
              <CreateAccount />
            </Segment>
            <p style={style.loginLink}>
              Already Have An Account?
              <Link to="/login"> Login</Link>
            </p>
          </Grid.Column>
          ): null}
            

            <Grid.Column>
              <Grid centered columns={1}>
                <MessageList messages={this.props.messageList} />
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
    const accountManagementPage = (
      <React.Fragment>
        <PageHeader />

        <Grid container centered columns={2} style={style.grid}>
          <Grid.Row>
            <Grid.Column floated="left">
              <Grid centered>
                <Segment>
                  <UserCard />
                </Segment>
              </Grid>
            </Grid.Column>

            <Grid.Column floated="left">
              <MessageList messages={this.props.loggedInUser.messages || []} />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </React.Fragment>
    );
    const changePwPage = (
      <React.Fragment>
        <PageHeader />
        <ChangePw />
      </React.Fragment>
    );
    return (
      <Switch>
        <Route exact path="/" render={() => initialPageComponents} />
        <Route exact path="/login" render={() => loginPage} />
        <Route exact path="/logout" render={() => logoutPage} />
        <Route exact path="/account" render={() => accountManagementPage} />
        <Route exact path="/changepw" render={() => changePwPage} />
      </Switch>
    );
  }
}

const mapStateToProps = state => {
  return {
    loggedInUser: state.loginUser.loggedInUser,
    loggedIn: state.loginUser.loggedIn,
    messageList: state.getMessages.messages,
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    null
  )(App)
);
