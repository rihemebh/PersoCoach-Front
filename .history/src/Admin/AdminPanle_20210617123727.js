import AdminNav from "components/Navbars/AdminNav";
import React, { Component } from "react";
import VerticalNav from "./VerticalNav";
import {

  Button,
 
  Container,
  Row,
  Col,

  Table,
  Input,
InputGroup,


} from "reactstrap";
import {
  Navbar,
  Nav,
  NavDropdown,

  NavLink,

  NavItem,
  NavbarBrand,

 
} from "react-bootstrap";
import AuthService from "Authentification/AuthService";
import FontAwesome from "react-fontawesome";
import { Link } from "react-router-dom";

import axios from "axios";
export default class AdminPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      coach: true,
      coaches : null,
      clients: true,
      reviews: false,
      loading : true,
    };
  }
  componentDidMount() {
    axios
      .get("http://localhost:8080/catalog/coaches")
      .then((response) => {
        console.log(response.data.content)
        this.setState({coaches : response.data.content, loading : false})})
      .catch((error)=>console.log(error));
  }
  onSignOut = () => {
    AuthService.logout();
    this.props.history.push({ pathname: "/login" });
  };
  addCoach() {}
  render() {
    return (
      <Row>
        <Col xs="3" style={{ backgroundColor: "#D5EDF2", height: "auto" }}>
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
         
          <Row>
            {this.state.coach == true ? ( <>
          
                <br></br>
                <Container className="">
                  <Row style={{height: "50px"}}></Row>
                  <Row>
                    <Col>
                    </Col>
                    <Col>
                    <InputGroup className="form-group-no-border">
                    <InputGroupAddon addonType="prepend">
                    </InputGroupAddon>
                    <Input placeholder="Search.."  onChange={this.handleSearch} />
                   <button className="btn-sm btn-light border"  >
                  <FontAwesome className="text-secondary fa-search" >
                    </FontAwesome>
        
                     </button> 
                  </InputGroup>
                  <small className="" style={{color: '#d9d9d9'}}>You can search by names or keys</small>
                    </Col>
                    <Col>
                    <Button color="default">Add a coach</Button>

                    </Col>
                  </Row>
                  <Row style={{height: "50px"}}></Row>
                      
    
               
                </Container>
           
            <br></br>
      
        
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

                    <th>Experiences</th>
                    
                    <th></th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                
                {this.state.loading == false ? this.state.coaches.map((coach)=>{
                        return (
                          <tr>
                            <td><img src={coach.url} className="rounded" width="40px" height="50px"></img></td>
                            <td>{coach.username}</td>
                            <td>{coach.name}</td>
                            <td>{coach.email}</td>
                            <td>{coach.type}</td>
                            <td>{coach.gender}</td>
                            <td>{coach.rate}</td>
                            <td>{coach.description}</td>
                            <td>Experiences</td>

                          </tr>
                        )
                    }) : <></>}
                
                </tbody>
              </Table>
              </>
            ) : (
              <></>
            )}
          </Row>
        </Col>
      </Row>
    );
  }
}
