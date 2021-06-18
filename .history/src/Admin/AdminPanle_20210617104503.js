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

export default class AdminPanel extends Component {
  render() {
    return (
      <>
        <Col xs="3" className="bg-danger" style={{height: "800PX"}}>
          <img
            src={require("assets/img/persoo.png").default}
            width="300"
            height="200"
          ></img>

        <br />
        <NavItem className="text-center ">
              <NavLink to="/index" className="text-white" >
           All users 
              </NavLink>
            </NavItem>

            <NavItem className="text-center ">
              <NavLink to="/index" className="text-white" >
           <h6>Add a Coach</h6> 
              </NavLink>
            </NavItem>
            
            <NavItem className="text-center ">
              <NavLink to="/index" className="text-white" >
           <h6>Add a Coach</h6> 
              </NavLink>
            </NavItem>

        </Col>
        <Col xs="9"></Col>
      </>
    );
  }
}
