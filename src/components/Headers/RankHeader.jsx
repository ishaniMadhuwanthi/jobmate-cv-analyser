
import React from "react";
import { Link } from "react-router-dom";

// reactstrap components
import { Card, CardBody, CardTitle, Container, Row, Col,Navbar,NavItem,NavLink,Nav } from "reactstrap";

class RankHeader extends React.Component {

  

  render() {
    return (
      <>
        <div className="header bg-gradient-info pb-8 pt-5 pt-md-8">
          <Container fluid>
            <div className="header-body">
              {/* Card stats */}
              <Row>
                <Col lg="6" xl="3">
                  <Card className="card-stats mb-4 mb-xl-0">
                    <CardBody>
                      <Row>
                        <div className="col">
                          <span className="h2 font-weight-bold mb-0" >
                          Ranked CV List
                          </span>
                        </div>
                       
                      </Row>
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

export default RankHeader;
