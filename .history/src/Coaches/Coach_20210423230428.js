
import React, { Component } from "react";

// reactstrap components
import {
  Button,
  Label,
  FormGroup,
  Input,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  Container,
  Row,
  Col,
  Modal,
} from "reactstrap";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import ProfilePageHeader from "components/Headers/ProfilePageHeader.js";
import DemoFooter from "components/Footers/DemoFooter.js";
import FontAwesome from 'react-fontawesome'
import ProfileNav from "components/Navbars/ProfileNav";
import CoachModal from "./CoachModal";
import { render } from "node-sass";

class Coach extends Component {
  
constructor(props){

  super(props);

  this.state={
    activeTab: "1",
    coachId: props.id,
    coach: {},
    isLoading: true
  }}


  
  async componentDidMount() {
    const response= await fetch("catalog/coach"+props.id);
    const body = await response.json();
    this.setState({coach: body , isLoading : false});
    
 
    };
  }

render(){

  const toggle = (tab) => {
    if (activeTab !== tab) {
      setActiveTab(tab);
    }
  };
  return (
    <>
      <ProfileNav />
      <ProfilePageHeader />
      <div className="section profile-content">
        <Container>
          <div className="owner">
            <div className="avatar">
              <img
                alt="..."
                className="img-circle img-no-padding img-responsive"
                src={require("assets/img/Coach.jpeg").default}
              />
            </div>
            <div className="name">
              <h4 className="title">
                {props.name} <br />
              </h4>
              <h6 className="description">Sport Coach</h6>
              <FontAwesome className="fas fa-star  text-warning"></FontAwesome>
         <FontAwesome className="fas fa-star  text-warning"></FontAwesome>
         <FontAwesome className=" fa-star " style={{color: "#d9d9d9"}}></FontAwesome>
         <FontAwesome className="far fa-star " style={{color: "#d9d9d9"}}></FontAwesome>
         <FontAwesome className=" fa-star " style={{color: "#d9d9d9"}}></FontAwesome>
        
            </div>
          </div>
          <Row>
            <Col className="ml-auto mr-auto text-center" >
              <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tempor ipsum vitae maximus tempus. Donec ut nulla eleifend, molestie elit et, consequat tellus. Curabitur sagittis sapien magna, in lacinia leo placerat consectetur. Proin aliquet nibh in purus ornare finibus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed interdum interdum dui in venenatis. Proin id risus molestie, mollis arcu sit amet, elementum tellus. Curabitur sodales vehicula lectus vitae hendrerit. Morbi suscipit nisi eu tellus facilisis, nec iaculis urna rutrum. Sed nec aliquam mauris.
              </p>
              <br />
             
<CoachModal />
     
            </Col>
            </Row>
          
          <br />
          <div className="nav-tabs-navigation">
            <div className="nav-tabs-wrapper">
              <Nav role="tablist" tabs>
                <NavItem>
                  <NavLink
                    className={activeTab === "1" ? "active" : ""}
                    onClick={() => {
                      toggle("1");
                    }}
                  >
                    Acadamic Experience
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={activeTab === "2" ? "active" : ""}
                    onClick={() => {
                      toggle("2");
                    }}
                  >
                    Professional Experience
                  </NavLink>
                </NavItem>
              </Nav>
            </div>
          </div>
          {/* Tab panes */}
          <TabContent className="following" activeTab={activeTab}>
            <TabPane tabId="1" id="follows">
              <Row>
                <Col className="ml-auto mr-auto" md="6">
                  <ul className="list-unstyled follows">
                    <li>
                      <Row>
                 
                      <Col className="mx-auto" lg="4" md="6" xs="6">
                    
                        <h3>Exp1 </h3>
                    </Col>
                    <Col lg="8" md="6" xs="6">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tempor ipsum vitae maximus tempus. Donec ut nulla eleifend
                    </Col>
                  
                      </Row>
                    </li>
                    <hr />
                    <li>
                    <Row>
                 
                 <Col className="mx-auto" lg="4" md="6" xs="6">
               
                   <h3>Exp2</h3>
               </Col>
               <Col lg="8" md="6" xs="6">
               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tempor ipsum vitae maximus tempus. Donec ut nulla eleifend
               </Col>
             
                 </Row>
                    </li>
                  </ul>
                </Col>
              </Row>
            </TabPane>
            <TabPane className="text-center" tabId="2" id="following">
              <h3 className="text-muted">No Experience :( </h3>
           
            </TabPane>
          </TabContent>
        </Container>
      </div>
      <DemoFooter />
    </>
  );
}
}
export default Coach;
