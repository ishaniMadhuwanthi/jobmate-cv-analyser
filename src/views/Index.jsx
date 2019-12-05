
import React from "react";
// node.js library that concatenates classes (strings)
import classnames from "classnames";
// javascipt plugin for creating charts
import Chart from "chart.js";
// react plugin used to create charts
import { Line } from "react-chartjs-2";

// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col
} from "reactstrap";

// core components
import {
  chartOptions,
  parseOptions,
} from "variables/charts.jsx";

import Header from "components/Headers/Header.jsx";

class Index extends React.Component {
  constructor(props){
    //super();
    super()
    
    this.state={
      chartExample1Data: "data1",
      chartExample2Data: "data1"

      
    };
  }


    

 
  toggleNavs = (e, index) => {
    e.preventDefault();
    this.setState({
      activeNav: index,
      chartExample1Data:
        this.state.chartExample1Data === "data1" ? "data2" : "data1"
    });
    let wow = () => {
      console.log(this.state);
    };
    wow.bind(this);
    setTimeout(() => wow(), 1000);
    // this.chartReference.update();
  };

  render() {

    var colors = {
      gray: {
        100: "#f6f9fc",
        200: "#e9ecef",
        300: "#dee2e6",
        400: "#ced4da",
        500: "#adb5bd",
        600: "#8898aa",
        700: "#525f7f",
        800: "#32325d",
        900: "#212529"
      },
      theme: {
        default: "#172b4d",
        primary: "#5e72e4",
        secondary: "#f4f5f7",
        info: "#11cdef",
        success: "#2dce89",
        danger: "#f5365c",
        warning: "#fb6340"
      },
      black: "#12263F",
      white: "#FFFFFF",
      transparent: "transparent"
    };
    
    return (
      <>
        <Header />
        {/* Page content */}
        <Container className="mt--7" fluid>
          <Row>
            <Col className="mb-5 mb-xl-0" xl="8">
              <Card className="bg-gradient-default shadow">
                <CardHeader className="bg-transparent">
                  <Row className="align-items-center">
                    <div className="col">  
                      <h2 className="text-white mb-0">ABC COMPANY</h2>
                    </div> 
                  </Row>
                </CardHeader>

                <CardBody>
                  {/* Chart */}
                  <div className="chart">
                     <img
                        alt="..."
                        src={require("assets/img/brand/abc.png")}
                      />  
                  </div>
                </CardBody>
              </Card>
            </Col> 
          </Row>

          <Row className="mt-5">  
          {/*you can any row here ph-chart  */}
          <Col className="mb-5 mb-xl-0" xl="8">
              <Card className="bg-gradient-default shadow">
                <CardHeader className="bg-transparent">
                  <Row className="align-items-center">
                    <div className="col">
                      <h2 className="text-white mb-0">CE COMPANY</h2>
                    </div>
                  </Row>
                </CardHeader>

                <CardBody>
                  {/* Chart */}
                  <div className="chart">
                      <img    
                        alt="..."
                        src={require("assets/img/brand/CE.png")}
                      />  
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default Index;
