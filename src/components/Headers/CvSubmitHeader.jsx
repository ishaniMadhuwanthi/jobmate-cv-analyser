
import React from "react";
import { Link } from "react-router-dom";

// reactstrap components
import { Card, CardBody, CardTitle, Container, Row, Col,Navbar,NavItem,NavLink,Nav } from "reactstrap";

class Header extends React.Component {

  

  render() {
    return (
      <>
        <div className="header bg-gradient-info pb-8 pt-5 pt-md-8">
          <Container fluid>
            <div className="header-body">
              {/* Card stats */}
              <Row>
              <Col lg="6" xl="4">
                  <Card className="card-stats mb-4 mb-xl-0">
                    <CardBody>
                      <Row>
                        <div className="col">
                          {/* <CardTitle
                            tag="h5"
                            className="text-black"
                          >
                            ABC COMPANY
                          </CardTitle> */}
                          <NavLink
                            className="nav-link-icon"
                            to="/admin/maps"
                             tag={Link}>
                          <span className="h2 font-weight-bold mb-0" >
                          Fill Provided Application
                          </span></NavLink>
                        </div>
                        <Col className="col-auto">
                          <div className="icon icon-shape bg-danger text-white rounded-circle shadow">
                            <i className="fas fa-chart-bar" />
                          </div>
                        </Col>
                      </Row>
                      <p className="mt-3 mb-0 text-muted text-sm">
                        <span className="text-success mr-2">
                          {/*<i className="fa fa-arrow-up" /> 3.48% */}
                        </span>{" "}
                        <span className="text-nowrap">Come And Join With Us</span>
                      </p>
                    </CardBody>
                  </Card>
                </Col>

                <Col lg="6" xl="4">
                  <Card className="card-stats mb-4 mb-xl-0">
                    <CardBody>
                      <Row>
                        <div className="col">
                         
                 <span className="h2 font-weight-bold mb-0" >
                          Submit Your Own Cv Here
                          </span>
                        </div>
                        <Col className="col-auto">
                          {/* <div className="icon icon-shape bg-warning text-white rounded-circle shadow">
                            {/* <i className="fas fa-chart-pie" /> */}
                          {/* </div> */} 
                        </Col>
                      </Row>
                      <p className="mt-3 mb-0 text-muted text-sm">
                        <span className="text-danger mr-2">
                          {/*<i className="fas fa-arrow-down" /> 3.48%*/}
                        </span>{" "}
                        {/* <span className="text-nowrap">Grab Your Chnace</span> */}
                      </p>
                    </CardBody>
                  </Card>
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
