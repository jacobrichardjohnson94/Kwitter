import React from 'react';
import { Component } from 'react';
import { Header, Segment, Icon, Container, Item } from 'semantic-ui-react';
import { push } from 'connected-react-router';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom'
const headerColor = '#6CC2B6';

const style = {
  header: {
    backgroundColor: headerColor,
    verticalAlign: 'middle',
    alignItems: 'center',
  },
  font: {
    color: '#FFFFFF ',
    textDecoration: 'none',
    verticalAlign: 'middle',
  },
  titleFont: {
    color: '#FFFFFF ',
    fontSize: '2.5rem',
  },
  grid: {
    height: '100%',
    alignItems: 'center',
  },
};
class PageHeader extends Component {
  render() {
    return (
      <React.Fragment>
        <Segment style={style.header} clearing>
          <Container style={style.grid}>
            <Header as="h1" style={style.titleFont} floated="left">
              <p>
                <Link style={style.font} to="/">
                  Kwitter
                </Link>
              </p>
            </Header>

            <Header as="h5" icon style={style.font} floated="right">
              <Icon name="user" />
            </Header>
            <Header as="h2" style={style.font} align="middle" floated="right">
              {this.props.loggedIn ? (
                <Link style={style.font} to="/logout">
                  Logout
                </Link>
              ) : (
                <Link style={style.font} to="/login">
                  Login
                </Link>
              )}
            </Header>
          </Container>
        </Segment>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    loggedIn: state.loginUser.loggedIn,
  };
};
export default connect(
  mapStateToProps,
  null
)(PageHeader);
