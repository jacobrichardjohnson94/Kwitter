import React, { Component } from 'react';
import { Grid, Container, Segment, Responsive } from 'semantic-ui-react';

import PageHeader from './PageHeader.jsx';
import MessageInput from './MessageInput';
import FooterPage from './FooterPage.jsx';
import MessageList from './MessageList.jsx';
import CreateAccount from './CreateAccount.jsx';
import UserCard from './UserCard.jsx';

import LoginForm from './LoginForm';
import Logout from './Logout';
import { Switch, Route } from 'react-router';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import AboutMe from './AboutMe.jsx'

import ChangePw from './ChangePw';


import '../App.css';

// const bgColor = '#FCFCFC';
const style = {
  mainCol: {
    height: '100%',
    marginTop: '4rem',
  },
  loginContainer: {
    marginTop: '4rem',
  },

  loginLink: { color: 'black', textAlign: 'center' },
  grid: {
    marginTop: '1em',
  },
};
class App extends Component {
  render() {
    const rootLayoutDesktop = (
      <React.Fragment>
        <PageHeader />
        <Container>
          <Grid
            container
            verticalAlign="middle"
            centered
            style={style.mainCol}
            columns={!this.props.loggedIn ? 2 : null}
          >
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
            ) : null}

            <Grid.Column>
              <Grid centered columns={2}>
                {this.props.loggedIn ? (
                  <div style={{ paddingTop: '6em' }}>
                    <MessageInput />
                  </div>
                ) : null}
                <MessageList messages={this.props.messageList} />
              </Grid>
              )}
            </Grid.Column>
          </Grid>
        </Container>
        <FooterPage />
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
                {/* <Segment> */}
                <Grid.Row>

                  <AboutMe/>
                </Grid.Row>
                {/* </Segment> */}
              </Grid>
            </Grid.Column>

            <Grid.Column floated="left">

     

              <Grid centered container>
              {this.props.loggedIn ? (<MessageList messages={this.props.loggedInUser.messages || []} />) : null}
                
              </Grid>

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
        <Route exact path="/" render={() => rootLayoutDesktop} />
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
