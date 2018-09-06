import React from "react";
import { Component } from "react";
import { Container, Header, Segment, Button } from "semantic-ui-react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

class AboutMe extends Component {
  render() {
    console.log(this.props.loggedInUserAboutMe);
    return (
      <Container text>
        <Segment centered style={{ width: "42rem" }}>
          <Header as="h2">About Me</Header>
          <p style={{ fontSize: "16px", color: "black" }}>
            This will be the About me area, Lorem ipsum dolor amet flexitarian
            heirloom authentic trust fund gluten-free cloud bread tofu forage
            bespoke, yuccie flannel schlitz poutine. Jianbing ugh helvetica
            street art. YOLO taxidermy hell of poutine. Celiac food truck
            selfies enamel pin ugh crucifix DIY. Locavore fingerstache tote bag
            portland. Blog gastropub glossier waistcoat freegan pour-over,
            polaroid twee post-ironic. Franzen hella taxidermy, butcher poutine
            tofu vexillologist synth.
          </p>
        </Segment>
        <Button
          size="mini"
          style={{ backgroundColor: "#E8F8F5", color: "gray" }}
        >
          Edit
        </Button>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    loggedInUserAboutMe: state.loginUser.loggedInUser
  };
};

export default withRouter(connect(mapStateToProps)(AboutMe));
