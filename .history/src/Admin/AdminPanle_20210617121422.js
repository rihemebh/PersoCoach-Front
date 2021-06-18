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
  NavItem,
  NavbarBrand,
  Table,
} from "react-bootstrap";
import AuthService from "Authentification/AuthService";
import FontAwesome from "react-fontawesome";
import { Link } from "react-router-dom";

import axios from "axios";
export default class AdminPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      coaches: true,
      clients: true,
      reviews: false,
    };
  }
  componentDidMount() {
    axios
      .get("http://localhost:8080/catalog/coaches")
      .then((response) => console.log(response));
      .
  }
  onSignOut = () => {
    AuthService.logout();
    this.props.history.push({ pathname: "/login" });
  };
  addCoach() {}
  render() {
    return (
      <Row>
        <Col xs="3" style={{ backgroundColor: "#D5EDF2", height: "700px" }}>
          <NavItem className="text-center ">
            <NavbarBrand
              data-placement="bottom"
              to="/index"
              target="_blank"
              title="PersoCoach"
              tag={Link}
            >
              <img
                src={require("assets/img/persoo.png").default}
                width="300"
                height="200"
              ></img>
            </NavbarBrand>
          </NavItem>
          <br />
          <NavItem className="text-center ">
            <a href="/index" tag={Link} className="text-secondary">
              <h6>Home</h6>
            </a>
          </NavItem>

          <NavItem className="text-center ">
            <a
              href="/Coaches"
              tag={Link}
              className="text-secondary"
              style={{ margin: "5px" }}
            >
              <h6>Catalog</h6>
            </a>
          </NavItem>
          <NavItem className="text-center ">
            <NavLink
              className="text-secondary"
              onClick={this.addCoach.bind(this)}
            >
              <h6>Coaches Manager</h6>
            </NavLink>
          </NavItem>

          <NavItem className="text-center ">
            <NavLink to="/index" className="text-secondary">
              <h6>Clients Manager</h6>
            </NavLink>
          </NavItem>
          <NavItem className="text-center ">
            <NavLink to="/index" className="text-secondary">
              <h6>Reviews Manager</h6>
            </NavLink>
          </NavItem>
          <br></br>
          <NavItem className="text-center ">
            <Button className="btn-round btn-outline-danger">
              <FontAwesome className="far fa-cog" /> settings
            </Button>
          </NavItem>
          <br></br>
          <NavItem className="text-center ">
            <Button className="btn-round btn-danger" outline type="button">
              <FontAwesome className="far fa-sign-out" /> Sign out
            </Button>
          </NavItem>
        </Col>
        <Col xs="9">
          <Row style={{ height: "200px" }}>
            <Button>Add a coach</Button>
            search
          </Row>
          <Row>
            {this.state.coaches == true ? (
              <Table>
                <thead>
                  <tr>
                    <th></th>
                    <th>UserName</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Coach Type</th>
                    <th>Gender</th>
                    <th>rate</th>
                    <th>Description</th>

                    <th>Acadamic Experiences</th>
                    <th>Work Experiences</th>
                    <th></th>
                    <th></th>
                  </tr>
                </thead>
              </Table>
            ) : (
              <></>
            )}
          </Row>
        </Col>
      </Row>
    );
  }
}
