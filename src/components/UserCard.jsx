import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import { Grid, Icon, Segment, Card } from 'semantic-ui-react';
import { getAllUserInfoAsync } from '../actions/user.js';
import koalaUser from '../resources/images/koalaUserBrown.jpg';

const formatDate = date => {
  let newDate = new Date(date);
  let m = newDate.getMonth();
  let d = newDate.getDate();
  let y = newDate.getFullYear();
  return `${m}/${d}/${y}`;
};

const style = {
  grid: {
    marginTop: '1em',
  },
  padding: {
    padding: '1em',
  },
  card: {
    width: '15em',
  },
};
class UserCard extends Component {
  render() {
    const user = this.props.loggedInUser;
    const extra = (
      <React.Fragment>
        <p>{'Member Since: ' + formatDate(user.createdAt)}</p>
      </React.Fragment>
    );

    return (
      <Card
        image={koalaUser}
        header={
          user.displayName ? user.displayName : user.username ? user.username : 'User not Found'
        }
        meta={user.username ? '@' + user.username : null}
        description={
          this.props.loggedIn && this.props.loggedIn ? (
            <Link to="/changepw">Change Password</Link>
          ) : null
        }
        extra={user.createdAt ? extra : null}
        style={style.card}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    loggedInUser: state.loginUser.loggedInUser,
    loggedIn: state.loginUser.loggedIn,
    token: state.loginUser.loggedInUser.token,
    id: state.loginUser.loggedInUser.id,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    fetchAllUserInfo: (token, id) => dispatch(getAllUserInfoAsync(token, id)),
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(UserCard)
);
