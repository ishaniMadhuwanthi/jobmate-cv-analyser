
/*eslint-disable*/
import React from "react";
import { Link } from "react-router-dom";

// reactstrap components
import { Container, Row, Col, Nav, NavItem, NavLink, Navbar } from "reactstrap";

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <Row className="align-items-center justify-content-xl-between">
          <Col xl="6">
            <div className="copyright text-center text-xl-left text-muted">
              © 2019{" "}
              <a
                className="font-weight-bold ml-1"
               
                rel="noopener noreferrer"
                target="_blank"
              >
               JOBMATE-CV ANALYZER
              </a>
            </div>
          </Col>
        </Row>
      </footer>
    );
  }
}

export default Footer;
