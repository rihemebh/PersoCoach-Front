import AdminNav from "components/Navbars/AdminNav";
import React, { Component } from "react";
import VerticalNav from "./VerticalNav";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
  NavLink,
  Container,
  Row,
  Col,
  NavItem
} from "react-bootstrap";
import AuthService from "Authentification/AuthService";
import FontAwesome from 'react-fontawesome'


export default class AdminPanel extends Component {
   onSignOut = () => {
    AuthService.logout();
    this.props.history.push({pathname: '/login'}); 
    } 
  render() {
    return (
      <>
        <Col xs="3"  style={{backgroundColor:'#D5EDF2', height: "800px"}}>
        <NavItem className="text-center ">
          <img
            src={require("assets/img/persoo.png").default}
            width="300"
            height="200"
          ></img>
 </NavItem>
        <br />
        <NavItem className="text-center ">
              <NavLink to="/index" className="text-secondary" >
           <h6>Home</h6> 
              </NavLink>
            </NavItem>

            <NavItem className="text-center ">
              <NavLink to="/index" className="text-secondary" >
           <h6>Add a Coach</h6> 
              </NavLink>
            </NavItem>
            
        <NavItem className="text-center ">
              <NavLink to="/index" className="text-secondary" >
           <h6>Users Manager</h6> 
              </NavLink>
            </NavItem>

           
            <NavItem className="text-center ">
              <NavLink to="/index" className="text-secondary" >
           <h6>Reviews Manager</h6> 
              </NavLink>
            </NavItem>

            <NavItem  className="text-center ">
                
                  <Button className="btn-round btn-outline-danger" >
                    <FontAwesome className="far fa-cog"/> settings
                  </Button>
             
              </NavItem>
              <br></br>
            <NavItem  className="text-center ">
                
                  <Button className="btn-round btn-danger" outline type="button">
                    <FontAwesome className="far fa-sign-out"/> Sign out  
                  </Button>
             
              </NavItem>
        </Col>
        <Col xs="9"></Col>
      </>
    );
  }
}
