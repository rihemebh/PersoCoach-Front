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
import Edit from "./CoachEdit";
import ClientEdit from "./ClientEditModal";
import Areyousure from "./AreyousureModal";
import CreateCoach from "./CreateCoachModal";
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
      editCoach: false,
      toedit: null,
      key: "",
    };

    this.handleSearchCoaches = this.handleSearchCoaches.bind(this);
    this.handleSearchClients = this.handleSearchClients.bind(this);
    this.handleSearchReviews = this.handleSearchReviews.bind(this);
  }

  async handleSearchCoaches(e) {
    console.log(e.target.value);
    this.setState({ key: e.target.value }, async () => {
      axios
      .get("http://localhost:8080/catalog/coaches?key=" + this.state.key)
      .then((response) => {
        console.log(response.data.content);
        this.setState({ coaches: response.data.content, loading: false });
      })
      .catch((error) => console.log(error))
    });
  }
  async handleSearchClients(e) {
    console.log(e.target.value);
    this.setState({ key: e.target.value }, async () => {
      axios
      .get("http://localhost:8080/api/client/clients?key="+this.state.key)
      .then((response) => {
        console.log(response.data.content);
        this.setState({ coaches: response.data.content, loading: false });
      })
      .catch((error) => console.log(error))
    });
  }
  async handleSearchReviews(e) {
    console.log(e.target.value);
    this.setState({ key: e.target.value }, async () => {
      axios
      .get("http://localhost:8080/catalog/reviews?key="+this.state.key)
      .then((response) => {
        console.log(response.data.content);
        this.setState({ coaches: response.data.content, loading: false });
      })
      .catch((error) => console.log(error))
    });
  }
  componentDidMount() {
    axios
      .get("http://localhost:8080/api/client/clients?key="+this.state.key)
      .then((response) => {
        this.setState({ clients: response.data });
      })
      .catch((error) => console.log(error));
    axios
      .get("http://localhost:8080/catalog/coaches?key=" + this.state.key)
      .then((response) => {
        console.log(response.data.content);
        this.setState({ coaches: response.data.content, loading: false });
      })
      .catch((error) => console.log(error));

    axios
      .get("http://localhost:8080/catalog/reviews?key="+this.state.key)
      .then((response) => {
        this.setState({ reviews: response.data });
      })
      .catch((error) => console.log(error));
  }
  onSignOut = () => {
    console.log("logout");
    AuthService.logout();
    this.props.history.push({ pathname: "/login" });
  };
  addCoach() {}
  render() {
    return (
      <Row>
        <Col
          xs="3"
          style={{
            backgroundColor: "#D5EDF2",
            height: "auto",
            minHeight: "700px",
          }}
        >
          <NavItem className="text-center ">
            <NavbarBrand
              data-placement="bottom"
              to="/index"
              target="_blank"
              title="PersoCoach"
              tag={Link}
            >
              <img
              className="img-responsive"
                src={require("assets/img/persoo.png").default}
                style={{ marginLeft: "10px", maxWidth:"100%" , 
               }}
              
              ></img>
            </NavbarBrand>
          </NavItem>
          <br />
          <NavItem className="text-center ">
            <a href="/index" className="text-secondary">
              <h6>Home</h6>
            </a>
          </NavItem>

          <NavItem className="text-center " style={{ marginTop: "18px" }}>
            <a href="/Coaches" tag={Link} className="text-secondary">
              <h6>Catalog</h6>
            </a>
          </NavItem>

          <NavItem className="text-center ">
            <NavLink
              to="/index"
              className="text-secondary"
              onClick={() =>
                this.setState({ client: true, coach: false, review: false })
              }
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
            <NavLink
              to="/index"
              onClick={() =>
                this.setState({ client: false, coach: false, review: true })
              }
              className="text-secondary"
            >
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
          <NavItem className="text-center ">
            <NavLink
              className="text-secondary"
              onClick={() =>
                this.setState({ coach: true, review: false, client: false })
              }
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
          <br></br>
          <NavItem className="text-center ">
            <SettingsModal />
          </NavItem>
          <br></br>
          <NavItem className="text-center ">
            <Button
              className="btn-round btn-danger"
              type="button"
              onClick={this.onSignOut}
            >
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
                          onChange={this.handleSearchCoaches}
                        />
                        <button className="btn-sm btn-light border">
                          <FontAwesome className="text-secondary fa-search"></FontAwesome>
                        </button>
                      </InputGroup>
                    </Col>
                    <Col>
                      <CreateCoach />
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
                      <th>Id</th>
                      <th>UserName</th>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Type</th>
                      <th>Gender</th>
                      <th>rate</th>
                      <th>
                        <span className="text-white">..........</span>
                        Description
                        <span className="text-white">..........</span>
                      </th>

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
                            <td>{coach.id}</td>
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
                              <Work exp={coach.workExp} />
                            </td>
                            <td>
                              <Button
                                className=""
                                color="default"
                                outline
                                onClick={() =>
                                  this.setState({
                                    coach: false,
                                    review: false,
                                    clien: false,
                                    editCoach: true,
                                    toedit: coach,
                                  })
                                }
                              >
                                {" "}
                                <FontAwesome
                                  className="fas fa-edit"
                                  style={{ fontSize: "1rem" }}
                                ></FontAwesome>
                              </Button>
                            </td>
                            <td>
                              <Areyousure
                                user={coach}
                                coach={true}
                                review={false}
                              />
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
            ) : this.state.client == true ? (
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
                          onChange={this.handleSearchClients}
                        />
                        <button className="btn-sm btn-light border">
                          <FontAwesome className="text-secondary fa-search"></FontAwesome>
                        </button>
                      </InputGroup>
                    </Col>
                    <Col></Col>
                  </Row>
                  <Row style={{ height: "50px" }}></Row>
                </Container>

                <br></br>

                <Table
                  className="text-center"
                  style={{
                    marginLeft: "50px",
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

                      <th style={{ width: "100%" }}>
                        <span className="text-white">
                          ...........................
                        </span>
                        Description
                        <span className="text-white">
                          ...........................
                        </span>
                      </th>

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
                            <td
                              style={{ width: "100%" }}
                              className="text-center"
                            >
                              {coach.description}
                            </td>

                            <td>
                              <Areyousure
                                user={coach}
                                coach={false}
                                review={false}
                              />
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
            ) : this.state.review == true ? (
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
                    <Col></Col>
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
                      <th style={{ width: "100%" }}>
                        <span className="text-white">.............</span>Review
                        <span className="text-white">...............</span>
                      </th>
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

                            <td>{review.client.username}</td>

                            <td>{review.coach.username}</td>
                            <td>{review.rate}</td>
                            <td className="text-center">{review.text}</td>
                            <td>{review.date}</td>

                            <td>
                              <Areyousure
                                user={review.id}
                                coach={false}
                                review={true}
                              ></Areyousure>
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
            ) : (
              <Container style={{ marginLeft: "50px" }}>
                <Edit coach={this.state.toedit} />
              </Container>
            )}
          </Row>
        </Col>
      </Row>
    );
  }
}
