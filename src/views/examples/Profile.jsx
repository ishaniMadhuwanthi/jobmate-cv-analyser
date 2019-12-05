
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
import Header from "components/Headers/RankHeader.jsx";

class Profile extends React.Component {
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
                      </Col>
                      </Row>
        <Row>
          
        <div className="col">  
          <Card className="bg-default shadow">
            <Row className="mt-5">
            <div className="col">
              <Table className="align-items-center table-flush" responsive>
                  <thead className="thead-light">
                    <tr>
                      <th ><font color="black">Applicant Name</font></th>
                      <th><font color="black">Marks</font></th>
                      <th><font color="black">Email</font></th>
                      <th><font color="black">University</font></th>
                      <th scope="col" />
                    </tr>
                  </thead>
                
                  <tbody >
                  <tr>
                    <td>
                      <th ><font color="black">Kshithija Dilhani</font></th>
                      <th><font color="black">84</font></th>
                      <th><font color="black">kshithija147@gmail.com</font></th>
                      <th><font color="black">University of Peradeniya</font></th>
                      <th scope="col" />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <th><font color="black">Ishani Madhuwanthi</font></th>
                      <th><font color="black">78</font></th>
                      <th><font color="black">ishmadhuwanthi@gmail@gmail.com</font></th>
                      <th><font color="black">University of Moratuwa</font></th>
                      <th scope="col" />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <th><font color="black">Wathsari Samindani</font></th>
                      <th><font color="black">76</font></th>
                      <th><font color="black">wathsami@gmail.com</font></th>
                      <th><font color="black">University of Kelaniya</font></th>
                      <th scope="col" />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <th><font color="black">Ashani Senevurathne</font></th>
                      <th><font color="black">70</font></th>
                      <th><font color="black">ashasenevirathne@gmail@gmail.com</font></th>
                      <th><font color="black">University of Colombo</font></th>
                      <th scope="col" />
                    </td>
                  </tr>
                  </tbody>
                </Table> 
            </div>
          </Row>                 
        </Card>
       </div>
        </Row>
        </Container>
      </>
    );
  }
}

export default Profile;
