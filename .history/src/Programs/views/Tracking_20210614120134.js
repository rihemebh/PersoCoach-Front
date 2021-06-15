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
} from "reactstrap";

// core components
import ProfielNav from "components/Navbars/ProifleNav.js";
import ProfilePageHeader from "components/Headers/ProfilePageHeader.js";
import DemoFooter from "components/Footers/DemoFooter.js";
import AuthService from "Authentification/AuthService";


export default class Profile extends React.Component{


    constructor(props){
        super(props)
        this.state={
            currentUser: ''
        }
    }

     async componentDidMount(){
       await AuthService.getCurrentUser()
       .then(
        response => {
          this.setState({
          currentUser: response
        })}
      ).catch(
        err => {
          console.log(err.data)
        }
      ) 
    }

    render(){
      console.log(this.state.currentUser);

        return(
            <div>
            <ProfileNav />
      <ProfilePageHeader />
      <div className="section profile-content">
        <Container>
          <div className="owner">
            <div className="avatar">
              <img
                alt="..."
                className="img-circle img-no-padding img-responsive"
                src={require("assets/img/faces/joe-gardner-2.jpg").default}
              />
            </div>
            <div className="name">
              <h4 className="title">
                {this.state.currentUser.username} <br />
              </h4>
              <h6 className="description">Music Producer</h6>
            </div>
          </div>
          <Row>
            <Col className="ml-auto mr-auto text-center" md="6">
              <p>
         
              </p>
              <br />
              <Button className="btn-round" color="default" outline>
                <i className="fa fa-cog" /> Settings
              </Button>
            </Col>
          </Row>
          <br />
          <div className="nav-tabs-navigation">
            <div className="nav-tabs-wrapper">
              <Nav role="tablist" tabs>
                <NavItem>
                  <NavLink
                
                  >
                    Follows
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
          
                  >
                    Following
                  </NavLink>
                </NavItem>
              </Nav>
            </div>
          </div>
      
               
        </Container>
      </div>
      <DemoFooter />
            </div>
        )
    }


    
}