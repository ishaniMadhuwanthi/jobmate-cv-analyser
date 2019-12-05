
import React from "react";

import data from "data/data"
import { Link } from "react-router-dom";


// reactstrap components
import {
  Button, 
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Row,
  Col,
  CardHeader,Navbar,NavItem,NavLink,Nav,Card,CardBody
} from "reactstrap";

class Welcome extends React.Component {

  render() {
      
    return (
      <>
        <Col lg="8" xl="4">
                  <Card className="card-stats mb-4 mb-xl-0">
                    <CardBody>
                      <Row>
                        <div className="col">
                         
                          <NavLink
                            className="nav-link-icon"
                            to="/auth/login"
                             tag={Link}>
                          <span className="h1 font-weight-bold mb-0" >
                          COMPANY / INSTITUTE
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
                        <span className="text-body">Come And Join With Us</span><br/>
                        <span className="text-body">Create CV on your Preferenecs</span>
                      </p>
                    </CardBody>
                  </Card>
                </Col>
                <Col lg="8" xl="4">
                  <Card className="card-stats mb-4 mb-xl-0">
                    <CardBody>
                      <Row>
                        <div className="col">
                         
                        <NavLink
                            className="nav-link-icon"
                            to="/admin/index"
                             tag={Link}>
                          <span className="h1 font-weight-bold mb-0" >
                          APPLICANT
                          </span></NavLink>
                        </div>
                        <Col className="col-auto">
                          <div className="icon icon-shape bg-warning text-white rounded-circle shadow">
                            <i className="fas fa-chart-line" />
                          </div>
                        </Col>
                      </Row>
                      <p className="mt-3 mb-0 text-muted text-sm">
                        <span className="text-danger mr-2">
                          {/*<i className="fas fa-arrow-down" /> 3.48%*/}
                        </span>{" "}
                        <span className="text-body">Grab Your Chance.</span><br/>
                        <span className="text-body">Apply jobs Online easily. </span>
                      </p>
                    </CardBody>
                  </Card>
                </Col>
      </>
    );
  }
}

export default Welcome;
