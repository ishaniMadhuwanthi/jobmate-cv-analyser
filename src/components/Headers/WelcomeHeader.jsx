
import React from "react";
import { Link } from "react-router-dom";

// reactstrap components
import { Card, CardBody, CardTitle, Container, Row, Col,Navbar,NavItem,NavLink,Nav } from "reactstrap";

class Header extends React.Component {

  

  render() {
    return (
      <>
        <div className="header bg-gradient-info pb-8 pt-5 pt-md-8">
            
          <Container className="d-flex align-items-center" fluid>
            <div className="header-body">
              {/* Card stats */}
              <Row>
                
              <Col lg="7" md="10">
              <img
                        alt="..."
                        src={require("assets/img/brand/LOGO500-150.png")}
                      />
                <h2 className="display-2 text-bold-black"> CV ANALYZER </h2>
                <p className="text-black mt-0 mb-5">
                  Hey!!
                  Come and join with us.
                  Grab your chance.....
                </p>
              
                
              </Col>
              </Row>
            </div>
          </Container>
        </div>
      </>
    );
  }
}

export default Header;
