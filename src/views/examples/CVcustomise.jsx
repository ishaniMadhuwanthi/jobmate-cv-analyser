
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
import Header from "components/Headers/Header.jsx";

class CVcustomise extends React.Component {
  state = {};

  handleFormSubmit = (e) =>{ 
    e.preventDefault();
    console.log(this.state);
    this.props.history.replace( '/admin/maps');
  }

  render() {
    return (
      <>
        <Header />
        {/* Page content */}
        <Container className=" mt--7" fluid>
          {/* Table */}

         <Row>
            
            <div className="col">
            <div className="Table">
            </div>
              <Card className="bg-default shadow">
                <CardHeader className="bg-transparent border-0">
                  <h3 className="text-white mb-0">CV Customization</h3>
                  <p></p>
                  <p>Select your preferences and create cv for your company</p>
                   <p>type form</p>
                  <button type="submit" onClick={this.handleFormSubmit}>Create Application</button>
                </CardHeader> 
              </Card>
            </div>
          </Row>

        </Container>
      </>
    );
  }
}

export default CVcustomise;
