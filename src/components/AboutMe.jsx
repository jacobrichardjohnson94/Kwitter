import React from "react";
import { Component } from "react";
import {
  Container,
  Header,
  Segment,
  Button,
  TextArea
} from "semantic-ui-react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

const USER_API_URL = "https://kwitter-api.herokuapp.com/users";

class AboutMe extends Component {
  state = {
    editing: false,
    textInput: "",
    aboutMeResponse: ""
  };

  // componentWillMount(){
  //   fetchAboutMeAsync()
  // }

  handleEditButton = () => this.setState({ editing: true });
  handleSubmitButton = event => {
    const body = {
      about: this.state.textInput
    };
    event.preventDefault();
    fetch(USER_API_URL, {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${this.props.loggedInUserAuthKey}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        this.setState({editing: false, aboutMeResponse: data.user.about})
      });
  };

  handleTextInput = event => this.setState({ textInput: event.target.value });

  render() {
    console.log(this.state.aboutMeResponse);
    return (
      <Container text>
        <Segment centered style={{ width: "42rem" }}>
          <Header as="h2">About Me</Header>
          <React.Fragment>
            {!this.state.editing ? (
              <p style={{ fontSize: "16px", color: "black" }}>
              {this.state.aboutMeResponse !== '' ? this.state.aboutMeResponse : 'This is where your bio will appear!'}
              
              </p>
            ) : (
              <TextArea
                autoHeight
                onChange={this.handleTextInput}
                style={{ width: "40rem", borderRadius: "5px" }}
              />
            )}
          </React.Fragment>
        </Segment>
        {!this.state.editing ? (
          <Button
            size="mini"
            onClick={this.handleEditButton}
            style={{ backgroundColor: "#E8F8F5", color: "gray" }}
          >
            Edit
          </Button>
        ) : (
          <Button
            size="mini"
            onClick={this.handleSubmitButton}
            style={{ backgroundColor: "#E8F8F5", color: "gray" }}
          >
            Submit
          </Button>
        )}
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    loggedInUserAuthKey: state.loginUser.loggedInUser.token,
  };
};

export default withRouter(connect(mapStateToProps)(AboutMe));
