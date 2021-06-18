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
  InputGroupAddon,
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
import Acadamic from "./AexpModal";
import SettingsModal from "./SettingsModal";
import Work from "./WorkExpModal";
import CoachEdit from "./CoachEditModal";
export default class AdminPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      coach: true,
      coaches: null,
      client: false,
      clients: null,
      reviews: false,
      loading: true,
    };
  }
  componentDidMount() {
    axios
      .get("http://localhost:8080/api/client/clients")
      .then((response) => {
        console.log(response.data);
        this.setState({ clients: response.data });
      })
      .catch((error) => console.log(error));
    axios
      .get("http://localhost:8080/catalog/coaches")
      .then((response) => {
        console.log(response.data.content);
        this.setState({ coaches: response.data.content, loading: false });
      })
      .catch((error) => console.log(error));

      axios
      .get("http://localhost:8080/catalog/reviews")
      .then((response) => {
        console.log(response.data);
        this.setState({ reviews: response.data });
      })
      .catch((error) => console.log(error));
  }
  onSignOut = () => {
    AuthService.logout();
    this.props.history.push({ pathname: "/login" });
  };
  addCoach() {}
  render() {
    return (
      <Row>
        <Col xs="3" style={{ backgroundColor: "#D5EDF2", height: "auto" , minHeight : "700px"}}>
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
                width="290"
                height="200"
              ></img>
            </NavbarBrand>
          </NavItem>
          <br />
          <NavItem className="text-center ">
            <NavLink>
            <a href="/index" tag={Link}      className="text-secondary">
              <h6>
              <FontAwesome className="far fa-home" />
                Home</h6>
            </a></NavLink>
          </NavItem>

          <NavItem className="text-center ">
          <NavLink
              className="text-secondary"
             
            >
             
            <a
              href="/Coaches"
              tag={Link}
              className="text-secondary"
          
            >
              <h6>Catalog</h6>
            </a>
           </NavLink> 
          </NavItem>
          <NavItem className="text-center ">
            <NavLink
              className="text-secondary"
              onClick={() => this.setState({ coach: true , review: false , client: false})}
            >
              {this.state.coach == true ? (
                <h6
                  className="text-info"
                  style={{ fontWeight: "bold", textDecoration: "underline" }}
                >
                  {" "}
                  Coaches Manager{" "}
                </h6>
              ) : (
                <h6> Coaches Manager </h6>
              )}
            </NavLink>
          </NavItem>

          <NavItem className="text-center ">
            <NavLink
              to="/index"
              className="text-secondary"
              onClick={() => this.setState({ client: true , coach: false, review: false})}
            >
                   {this.state.client == true ? (
                <h6
                  className="text-info"
                  style={{ fontWeight: "bold", textDecoration: "underline" }}
                >
                  {" "}
                  Clients Manager{" "}
                </h6>
              ) : (
                <h6> Clients Manager </h6>
              )}
            </NavLink>
          </NavItem>
          <NavItem className="text-center ">
            <NavLink to="/index"
                onClick={() => this.setState({ client: false , coach: false, review: true})}
            className="text-secondary">
            {this.state.review == true ? (
                <h6
                  className="text-info"
                  style={{ fontWeight: "bold", textDecoration: "underline" }}
                >
                  {" "}
                  Reviews Manager{" "}
                </h6>
              ) : (
                <h6> Reviews Manager </h6>
              )}
            </NavLink>
          </NavItem>
          <br></br>
          <NavItem className="text-center ">
            <SettingsModal />
          </NavItem>
          <br></br>
          <NavItem className="text-center ">
            <Button className="btn-round btn-danger" type="button">
              <FontAwesome className="far fa-sign-out" /> Sign out
            </Button>
          </NavItem>
        </Col>
        <Col xs="9">
          <Row>
            {this.state.coach == true ? (
              <>
                <br></br>
                <Container className="">
                  <Row style={{ height: "50px" }}></Row>
                  <Row>
                    <Col xs="3" className="text-center"></Col>
                    <Col>
                      <InputGroup className="form-group-no-border">
                        <InputGroupAddon addonType="prepend"></InputGroupAddon>
                        <Input
                          placeholder="Search.."
                          onChange={this.handleSearch}
                        />
                        <button className="btn-sm btn-light border">
                          <FontAwesome className="text-secondary fa-search"></FontAwesome>
                        </button>
                      </InputGroup>
                    </Col>
                    <Col>
                      <Button
                        color="default"
                        outline
                        onClick={this.addCoach.bind(this)}
                      > <FontAwesome className=" fa-plus"></FontAwesome>

                        Create a coach
                      </Button>
                    </Col>
                  </Row>
                  <Row style={{ height: "50px" }}></Row>
                </Container>

                <br></br>

                <Table
                className="text-center"
                  style={{
                    marginLeft: "10px",
                    maxWidth: "500px",
                    overflowX: "auto",
                  }}
                >
                  <thead>
                    <tr>
                      <th>UserName</th>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Type</th>
                      <th>Gender</th>
                      <th>rate</th>
                      <th>Description</th>

                      <th>Experiences</th>

                      <th></th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.loading == false ? (
                      this.state.coaches.map((coach) => {
                        return (
                          <tr>
                            <td>{coach.username}</td>
                            <td>{coach.name}</td>
                            <td>{coach.email}</td>
                            <td>{coach.type}</td>
                            <td>{coach.gender}</td>
                            <td>{coach.rate}</td>
                            <td className="text-center">{coach.description}</td>
                            <td>
                              <Acadamic exp={coach.acadamicExp} />
                              <hr></hr>
                              <Work  exp={coach.workExp} />
                            </td>
                            <td>
                              <CoachEdit coach={coach/>
                            </td>
                            <td>
                              <Button className="" color="danger">
                                <FontAwesome
                                  className="fas fa-trash"
                                  style={{ fontSize: "1rem" }}
                                ></FontAwesome>
                              </Button>
                            </td>
                          </tr>
                        );
                      })
                    ) : (
                      <></>
                    )}
                  </tbody>
                </Table>
              </>
            ) : 
            this.state.client == true ? <>
             <br></br>
                <Container className="">
                  <Row style={{ height: "50px" }}></Row>
                  <Row>
                    <Col xs="3" className="text-center"></Col>
                    <Col>
                      <InputGroup className="form-group-no-border">
                        <InputGroupAddon addonType="prepend"></InputGroupAddon>
                        <Input
                          placeholder="Search.."
                          onChange={this.handleSearch}
                        />
                        <button className="btn-sm btn-light border">
                          <FontAwesome className="text-secondary fa-search"></FontAwesome>
                        </button>
                      </InputGroup>
                    </Col>
                    <Col>
               
                    </Col>
                  </Row>
                  <Row style={{ height: "50px" }}></Row>
                </Container>

                <br></br>

                <Table
                className="text-center"
                  style={{
                    marginLeft: "20px",
                    maxWidth: "500px",
                    overflowX: "auto",
                  }}
                >
                  <thead>
                    <tr>
                      <th>client Id </th>
                      <th>UserName</th>
                      <th>Name</th>
                      <th>Email</th>
                   
                      <th style={{width: "100%"}}><span className="text-white">...........................</span>Description<span className="text-white">...........................</span></th>
                  

                      <th></th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.loading == false ? (
                      this.state.clients.map((coach) => {
                        return (
                          <tr>
                            <td>{coach.id}</td>
                            <td>{coach.username}</td>
                            <td>{coach.name}</td>
                            <td>{coach.email}</td>
                            <td style={{width: "100%"}} className="text-center">{coach.description}</td>
                     
                            <td>
                              <Button className="" color="info">
                                {" "}
                                <FontAwesome
                                  className="fas fa-edit"
                                  style={{ fontSize: "1rem" }}
                                ></FontAwesome>
                              </Button>
                            </td>
                            <td>
                              <Button className="" color="danger">
                                <FontAwesome
                                  className="fas fa-trash"
                                  style={{ fontSize: "1rem" }}
                                ></FontAwesome>
                              </Button>
                            </td>
                          </tr>
                        );
                      })
                    ) : (
                      <></>
                    )}
                  </tbody>
                </Table>
            
            
            </>:
            <>
             <br></br>
                <Container className="">
                  <Row style={{ height: "50px" }}></Row>
                  <Row>
                    <Col xs="3" className="text-center"></Col>
                    <Col>
                      <InputGroup className="form-group-no-border">
                        <InputGroupAddon addonType="prepend"></InputGroupAddon>
                        <Input
                          placeholder="Search.."
                          onChange={this.handleSearch}
                        />
                        <button className="btn-sm btn-light border">
                          <FontAwesome className="text-secondary fa-search"></FontAwesome>
                        </button>
                      </InputGroup>
                    </Col>
                    <Col>
               
                    </Col>
                  </Row>
                  <Row style={{ height: "50px" }}></Row>
                </Container>

                <br></br>

                <Table
                className="text-center"
                  style={{
                    marginLeft: "40px",
                    maxWidth: "500px",
                    overflowX: "auto",
                  }}
                >
                  <thead>
                    <tr>
                      <th>ReviewId </th>
                      <th>Client_UserName</th>
                      
                      <th>Coach_UserName</th>
                      <th>Rate</th>
                      <th style={{width: "100%"}}><span className="text-white">.............</span>Review<span className="text-white">...............</span></th>
                      <th>Date</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.loading == false ? (
                      this.state.reviews.map((review) => {
                        return (
                          <tr>
                            <td>{review.id}</td>
                            
                            <td>
                          {review.client.username}
                              </td>
                           
                     <td>{review.coach.username}</td>
                     <td>{review.rate}</td>
                     <td className="text-center">{review.text}</td>
                     <td>{review.date}</td>
                          
                            <td>
                              <Button className="" color="danger">
                                <FontAwesome
                                  className="fas fa-trash"
                                  style={{ fontSize: "1rem" }}
                                ></FontAwesome>
                              </Button>
                            </td>
                          </tr>
                        );
                      })
                    ) : (
                      <></>
                    )}
                  </tbody>
                </Table>
            
            </>

            
             
            }
          </Row>
        </Col>
      </Row>
    );
  }
}
