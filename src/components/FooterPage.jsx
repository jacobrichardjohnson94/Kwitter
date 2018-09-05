import React from 'react';
import { Col, Container, Row, Footer } from 'mdbreact';
const style = {
  divFooter: {
    paddingTop: '10em',
  },
  footer: {
    backgroundColor: '#332600',
  },
  link: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
};
class FooterPage extends React.Component {
  render() {
    return (
      <div style={style.divFooter}>
        <Footer style={style.footer} className="font-small pt-4 mt-4">
          <Container fluid className="text-center text-md-left">
            <Row>
              <Col sm="6">
                <h5 className="title">Kwitter App</h5>
                <p>Created by Jake Johnson, Taylor Gentry, & Brian Schuessler</p>
              </Col>
              <Col sm="6" style={style.link}>
                <ul>
                  <li className="list-unstyled">
                    <a href="https://github.com/jakerjohnson94/Kwitter">
                      <h3>Github Repo</h3>
                    </a>
                  </li>
                </ul>
              </Col>
            </Row>
          </Container>
          <div className="footer-copyright text-center py-3">
            <Container fluid>
              &copy; {new Date().getFullYear()} Copyright: Kenzie Academy{' '}
            </Container>
          </div>
        </Footer>
      </div>
    );
  }
}

export default FooterPage;
