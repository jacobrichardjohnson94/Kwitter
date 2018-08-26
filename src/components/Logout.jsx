import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import { logoutUserAsync } from '../actions/user';
class Logout extends Component {
  componentDidMount() {
    this.props.fetchLogoutUser();
  }
  render() {
    return (
      <React.Fragment>
        <p style={{ color: 'black' }}> logged out</p>
      </React.Fragment>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    fetchLogoutUser: () => dispatch(logoutUserAsync()),
  };
};
const mapStateToProps = state => {
  return {
    loggedIn: state.loginUser.loggedIn,
    message: state.loginUser.message,
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Logout);
