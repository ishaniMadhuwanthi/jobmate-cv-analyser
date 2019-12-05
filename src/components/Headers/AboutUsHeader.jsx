
import React from "react";

// reactstrap components
import {  Container, Row, Col } from "reactstrap";

class AboutUsHeader extends React.Component {
  render() {
    return (
      <>
        <div
          className="header pb-8 pt-5 pt-lg-8 d-flex align-items-center"
          style={{
            minHeight: "300px",
            backgroundImage:
              "url(" + require("assets/img/theme/profile-cover1.jpg") + ")",
            backgroundSize: "cover",
            backgroundPosition: "center top"
          }}
        >
          {/* Mask */}
          <span className="mask bg-gradient-default opacity-8" />
          {/* Header container */}
          <Container className="d-flex align-items-center" fluid>
            <Row>
              <Col lg="17" md="10">
              
                
              
              </Col>
            </Row>
          </Container>
        </div>
      </>
    );
  }
}

export default AboutUsHeader;
