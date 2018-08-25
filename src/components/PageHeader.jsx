import React from 'react';
import { Component } from 'react';
import { Header, Segment, Icon, Container, Item, Grid, Image } from 'semantic-ui-react';
import { push } from 'connected-react-router';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import koalaIcon from '../resources/images/koalaIcon.svg';
const headerColor = '#6CC2B6';

const style = {
  header: {
    backgroundColor: headerColor,
    width: '100%',
  },
  font: {
    color: '#FFFFFF ',
    textDecoration: 'none',
    fontSize: '2rem',
  },
  titleFont: {
    color: '#FFFFFF ',

    height: '100%',
  },
  grid: {
    backgroundColor: headerColor,
    width: '100%',
  },
  col: {
    width: '100%',
  },
  koalaIcon: {
    minWidth: '3rem',
  },
};
class PageHeader extends Component {
  render() {
    return (
      <React.Fragment>
        <div style={style.header}>
          <Segment style={style.header} clearing>
            <Grid style={style.col} container relaxed verticalAlign="middle">
              <Grid.Row style={style.grid}>
                <Grid.Column width={1}>
                  <h1>
                    <Link style={style.font} to="/">
                      <Image src={koalaIcon} style={style.koalaIcon} />
                    </Link>
                  </h1>
                </Grid.Column>

                <Grid.Column width={3}>
                  <h1 style={style.titleFont}>
                    <Link style={style.font} to="/">
                      Kwitter
                    </Link>
                  </h1>
                </Grid.Column>
                {/* <Grid.Column width={8} /> */}
                <Grid.Column style={style.col} floated="right" width={1}>
                  <h1 style={style.font}>
                    <Icon name="user" />
                  </h1>
                </Grid.Column>

                <Grid.Column style={style.col} width={2}>
                  <h2 style={style.font}>
                    {this.props.loggedIn ? (
                      <Link style={style.font} to="/logout">
                        Logout
                      </Link>
                    ) : (
                      <Link style={style.font} to="/login">
                        Login
                      </Link>
                    )}
                  </h2>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Segment>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    loggedIn: state.loginUser.loggedIn,
  };
};
export default withRouter(
  connect(
    mapStateToProps,
    null
  )(PageHeader)
);
