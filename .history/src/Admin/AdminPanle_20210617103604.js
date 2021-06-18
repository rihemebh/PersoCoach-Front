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
} from "react-bootstrap";

export default class AdminPanel extends Component {
  render() {
    return (
      <>
        <Col xs="3" className="bg-danger">
          <img
            src={require("assets/img/persoo.png").default}
            width="300"
            height="200"
          ></img>

        <br />
        <NavLink >All users</NavLink> 
        </Col>
        <Col xs="9"></Col>
      </>
    );
  }
}
