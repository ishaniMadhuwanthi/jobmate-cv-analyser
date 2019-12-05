
import React from "react";
// react component that copies the given text inside your clipboard
import { CopyToClipboard } from "react-copy-to-clipboard";
// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  Container,
  Media,
  Row,
  Col,
  Table,
} from "reactstrap";
// core components
import Header from "components/Headers/CvSubmitHeader.jsx";

class Charts extends React.Component {
  state = {};
  render() {
    return (
      <>
        <Header />
        {/* Page content */}
        <Container className=" mt--7" fluid>
          {/* Table */}
         
                      <Row className="justify-content-center">
                      <Col lg="5" md="6">
                      <img
                        alt="..."
                        src={require("assets/img/theme/cv2.jpg")}
                      />
                      <p></p>
                      </Col>
                      </Row>
        <Row>
          
        <div className="col">
            <div className="Table">
            </div>
              <Card className="bg-default shadow">
          <body>
    <form id = "pdf">
  <input id="pdfupload" type="file"/><br/>
  <p></p>
  <button type="submit" >Submit</button>
                     
</form>
</body>
                    
</Card>
</div>
        </Row>
        </Container>
      </>
    );
  }
}

export default Charts;
