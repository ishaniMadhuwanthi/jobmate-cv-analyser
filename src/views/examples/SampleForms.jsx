
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
import Header from "components/Headers/ApplicationHeader.jsx";

class SampleForms extends React.Component {
  state = {};
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
                
                 {/* <CardHeader className="bg-transparent border-0">
                  <h2 className="text-white mb-0">Application Form</h2>
                </CardHeader>  */}
                
                <h2 className="text-white mb-0">Basic Details</h2>
                
    <body>
    <form action="submit.html" method="post" class="simpleForm">
        <input type="text" id="Firstname" placeholder="First Name"/>
        <p class="error"></p>
        <input type="text" id="Lastname" placeholder="Last Name"/>
        <p class="error"></p>
        Birthday<br/>
        <select name="Month">
            <option value="Month">January</option>
            <option value="Month">February</option>
            <option value="Month">March</option>
            <option value="Month">April</option>
            <option value="Month">May</option>
            <option value="Month">June</option>
            <option value="Month">July</option>
            <option value="Month">August</option>
            <option value="Month">September</option>
            <option value="Month">October</option>
            <option value="Month">November</option>
            <option value="Month">December</option>
        </select>
        <select name="Date">
            <option value="Date">1</option>
            <option value="Date">2</option>
            <option value="Date">3</option>
            <option value="Date">4</option>
            <option value="Date">5</option>
            <option value="Date">6</option>
            <option value="Date">7</option>
            <option value="Date">8</option>
            <option value="Date">9</option>
            <option value="Date">10</option>
            <option value="Date">11</option>
            <option value="Date">12</option>
            <option value="Date">13</option>
            <option value="Date">14</option>
            <option value="Date">15</option>
            <option value="Date">16</option>
            <option value="Date">17</option>
            <option value="Date">18</option>
            <option value="Date">19</option>
            <option value="Date">20</option>
            <option value="Date">21</option>
            <option value="Date">22</option>
            <option value="Date">23</option>
            <option value="Date">24</option>
            <option value="Date">25</option>
            <option value="Date">26</option>
            <option value="Date">27</option>
            <option value="Date">28</option>
            <option value="Date">29</option>
            <option value="Date">30</option>
            <option value="Date">31</option>

        </select>
        <select name="Year">
            <option value="Year">1990</option>
            <option value="Year">1991</option>
            <option value="Year">1992</option>
            <option value="Year">1993</option>
            <option value="Year">1994</option>
            <option value="Year">1995</option>
            <option value="Year">1996</option>
            <option value="Year">1997</option>
            <option value="Year">1998</option>
            <option value="Year">1999</option>
            <option value="Year">2000</option>
        </select>
        <br/>
        <p class="error"></p>
        
        <input type="text" id="NIC" placeholder="NIC Number"/>
        <p class="error"></p>
        Gender<br/>
        <input type="radio" name="gender" value="male"/>Male
        <input type="radio" name="gender" value="female"/>Female<br/>
        <p></p>
        <input type="number" id="phoneNum" placeholder="Phone Number"/>
        <p class="error"></p>
        <input type="email" id="email" placeholder="Email"/>
        <p class="error"></p>
        
      
        <button type="submit">Submit</button>
    </form>
</body>
              </Card>
            </div>
          </Row>

<p></p>
<p></p>
<p></p>
          <Row>
          <div className="col">
            <div className="Table">
            </div>
              <Card className="bg-default shadow">
                
                 {/* <CardHeader className="bg-transparent border-0">
                  <h2 className="text-white mb-0">Application Form</h2>
                </CardHeader>  */}
                
                
                <h2 className="text-white mb-0">Educational Details</h2>
              
              <body>

    
    <form action="submit.html" method="post" class="simpleForm">
     
        Are you a Graduate or a undergraduate?<br/>
        <input type="radio" name="qualification" value="Degree"/>Graduate<br/>
        <input type="radio" name="qualification" value="UDegree"/>Under Graduate<br/>
        <p class="error"></p>
        <br/>
        <input type="text" id="university" placeholder="Your University"/>
        <p class="error"></p>

        What is your CGPA?<br/>
        <input type="radio" name="gpa" value="1clz"/>>3.7
        <input type="radio" name="gpa" value="2upclz"/>3.3-3.7
        <input type="radio" name="gpa" value="2lwclz"/>3-3.3
        <input type="radio" name="gpa" value="gnrl"/>less than 3
        <br/>
        <p></p>
        Have You followed any of the following cases?<br/>
      
        <input type="checkbox" name="crs1" value="CIMA"/> CIMA<br/>
        <input type="checkbox" name="crs2" value="Charted"/> Charted Accountancy<br/>
        <input type="checkbox" name="crs3" value="CCNA"/> CCNA<br/>
        <p></p>

        Do you have any other educational qualification?(ex:Diplomas/Certificate Level courses)
        <input type="radio" name="Otherqualification" value="OqYes"/>Yes
        <input type="radio" name="Otherqualification" value="OqNo"/>No<br/>
        <p></p>
        If it is Yes ,Give a short description about it<br/>
        <input type="text" id="OtherDetails"/>
        <p class="error"></p>

        Fluency in English<br/>
        <input type="radio" name="eng" value="lvl1"/>1
        <input type="radio" name="eng" value="lvl2"/>2
        <input type="radio" name="eng" value="lvl3"/>3
        <input type="radio" name="eng" value="lvl4"/>4
        <input type="radio" name="eng" value="lvl5"/>5
        <p></p>
        <button type="submit">Submit</button>
    </form>
   
</body>
              </Card>
            </div>
          </Row>
         
         <p></p>
         <p></p>

          <Row>
          <div className="col">
            <div className="Table">
            </div>
              <Card className="bg-default shadow">
                
                 {/* <CardHeader className="bg-transparent border-0">
                  <h2 className="text-white mb-0">Application Form</h2>
                </CardHeader>  */}
              
                <h2 className="text-white mb-0">Technical Skills</h2>
                <body>
    <form action="submit.html" method="post" class="simpleForm">
     
           <b> Programming Languages<br/></b>
            <p></p>
            Java
            <input type="radio" name="java" value="lvl1"/>1
            <input type="radio" name="java" value="lvl2"/>2
            <input type="radio" name="java" value="lvl3"/>3
            <input type="radio" name="java" value="lvl4"/>4
            <input type="radio" name="java" value="lvl5"/>5
            <br/>
            C  
            <input type="radio" name="c" value="lvl1"/>1
            <input type="radio" name="c" value="lvl2"/>2
            <input type="radio" name="c" value="lvl3"/>3
            <input type="radio" name="c" value="lvl4"/>4
            <input type="radio" name="c" value="lvl5"/>5
            <br/>
            Python
            <input type="radio" name="pyt" value="lvl1"/>1
            <input type="radio" name="pyt" value="lvl2"/>2
            <input type="radio" name="pyt" value="lvl3"/>3
            <input type="radio" name="pyt" value="lvl4"/>4
            <input type="radio" name="pyt" value="lvl5"/>5
            <br/>
            C++
            <input type="radio" name="cpls" value="lvl1"/>1
            <input type="radio" name="cpls" value="lvl2"/>2
            <input type="radio" name="cpls" value="lvl3"/>3
            <input type="radio" name="cpls" value="lvl4"/>4
            <input type="radio" name="cpls" value="lvl5"/>5
            <br/>

            <p></p>
            <p></p>

        <b>Web Technologies</b><br/>
            <p></p>
            HTML
            <input type="radio" name="html" value="lvl1"/>1
            <input type="radio" name="html" value="lvl2"/>2
            <input type="radio" name="html" value="lvl3"/>3
            <input type="radio" name="html" value="lvl4"/>4
            <input type="radio" name="html" value="lvl5"/>5
            <br/>
            CSS 
            <input type="radio" name="css" value="lvl1"/>1
            <input type="radio" name="css" value="lvl2"/>2
            <input type="radio" name="css" value="lvl3"/>3
            <input type="radio" name="css" value="lvl4"/>4
            <input type="radio" name="css" value="lvl5"/>5
            <br/>
            Javascript
            <input type="radio" name="js" value="lvl1"/>1
            <input type="radio" name="js" value="lvl2"/>2
            <input type="radio" name="js" value="lvl3"/>3
            <input type="radio" name="js" value="lvl4"/>4
            <input type="radio" name="js" value="lvl5"/>5
            <br/>
           
            <p></p>

            <b>Database</b><br/>
            <p></p>
            MySQL
            <input type="radio" name="sql" value="lvl1"/>1
            <input type="radio" name="sql" value="lvl2"/>2
            <input type="radio" name="sql" value="lvl3"/>3
            <input type="radio" name="sql" value="lvl4"/>4
            <input type="radio" name="sql" value="lvl5"/>5
            <br/>
            MariaDB
            <input type="radio" name="mrdb" value="lvl1"/>1
            <input type="radio" name="mrdb" value="lvl2"/>2
            <input type="radio" name="mrdb" value="lvl3"/>3
            <input type="radio" name="mrdb" value="lvl4"/>4
            <input type="radio" name="mrdb" value="lvl5"/>5
            <br/>
            <p></p>
            

            <b>Frameworks</b><br/>
            <p></p>
            React.js
            <input type="radio" name="react" value="lvl1"/>1
            <input type="radio" name="react" value="lvl2"/>2
            <input type="radio" name="react" value="lvl3"/>3
            <input type="radio" name="react" value="lvl4"/>4
            <input type="radio" name="react" value="lvl5"/>5
            <br/>
            Node.Js
            <input type="radio" name="node" value="lvl1"/>1
            <input type="radio" name="node" value="lvl2"/>2
            <input type="radio" name="node" value="lvl3"/>3
            <input type="radio" name="node" value="lvl4"/>4
            <input type="radio" name="node" value="lvl5"/>5
            <br/>
            Angular.js
            <input type="radio" name="ang" value="lvl1"/>1
            <input type="radio" name="ang" value="lvl2"/>2
            <input type="radio" name="ang" value="lvl3"/>3
            <input type="radio" name="ang" value="lvl4"/>4
            <input type="radio" name="ang" value="lvl5"/>5
            <br/>
            <p></p>
           

            <b>Interested Field</b><br/>

            <input type="checkbox" name="crs1" value="Neural Network"/> Neural Network<br/>
            <input type="checkbox" name="crs2" value="Embedded System"/> Embedded System<br/>
            <input type="checkbox" name="crs3" value="Web Devolopment"/> Web Devolopment<br/>
            <input type="checkbox" name="crs1" value="Mobile Devolopment"/> Mobile Devolopment<br/>
            <input type="checkbox" name="crs2" value="Image processing"/> Image processing<br/>
            <input type="checkbox" name="crs3" value="Machine Learning"/> Machine Learning<br/>

<p></p>
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

export default SampleForms;
