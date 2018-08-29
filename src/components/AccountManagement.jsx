import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';

import { Grid, Icon, Segment } from 'semantic-ui-react';
const style = {
  grid: {
    color: 'black',
  },
  padding: {
    padding: '1em',
  },
  segment: {
    height: '25vh',
  },
};
class AccountManagement extends Component {
  render() {
    const loggedInUser = this.props.loggedInUser;
    return (
      <React.Fragment>
        <Segment style={style.segment}>
          <Grid verticalAlign="middle" columns={12} relaxed centered container style={style.grid}>
            <Grid.Column width={4} only="computer">
              <Icon name="user" size="massive" />
            </Grid.Column>

            <Grid.Column width={8}>
              <Grid container>
                <Grid.Row floated="left">
                  <Grid.Column width={4}>
                    <h4> Username:</h4>{' '}
                  </Grid.Column>
                  <Grid.Column width={4}>
                    <p>{loggedInUser.username ? loggedInUser.username : ' Not Found'}</p>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column width={4}>
                    <h4> Display Name:</h4>{' '}
                  </Grid.Column>
                  <Grid.Column width={4}>
                    {loggedInUser.displayName ? loggedInUser.displayName : 'Not Found'}
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Link to="/changepw">Change Password</Link>
                </Grid.Row>
              </Grid>
            </Grid.Column>
          </Grid>
        </Segment>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    loggedInUser: state.loginUser.loggedInUser,
  };
};

export default withRouter(connect(mapStateToProps)(AccountManagement));
