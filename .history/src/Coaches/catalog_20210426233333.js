import DemoFooter from "components/Footers/DemoFooter";
import CatalogNav from "components/Navbars/CatalogNav";
import ExamplesNavbar from "components/Navbars/ExamplesNavbar";
import React, { Component } from "react";
import CoachCard from "./CoachCard";
import Jumb from "./jumbotron";

import {
  Container,
  Row,
  Col,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
} from "reactstrap";
import FontAwesome from "react-fontawesome";
import Filter from "./Filter";
import Pagination from "react-js-pagination";

//backgroundColor: "#F9F9F9"
export default class Catalog extends Component {
  emptyCoach = {
    id: 0,
    name: "",
    gender: "",
    type: "",
    description: "",
    rate: 0,
    acadamicExp: [],
    workExp: [],
    reviews: {},
  };
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      coaches: [],
      CoachesPerPage: 8,
      CurrentPage: 1,
      nbCoach: 0,
      sortby:"",
      coach: this.emptyCoach,
    };
  }
  handlePageChange(pageNumber) {
    console.log(`active page is ${pageNumber}`);
    this.setState(
      {
        currentPage: pageNumber-1,
      },
      () => {
        this.findCoaches(this.state.currentPage);
      }
    );
  }
  handleSort(sortby) {
   
    this.setState(
      {
        sortby: pageNumber-1,
      },
      () => {
        this.findCoaches(this.state.currentPage);
      }
    );
  }
  async findCoaches(curr) {
    let current = curr??0;
    const response = await fetch(
      "catalog/coaches?page=" +current+ "&size=" + this.state.CoachesPerPage
    );

    const body = await response.json();
    this.setState({ coaches: body.content, isLoading: false });
  }
  async componentDidMount() {
    this.findCoaches(this.state.currentPage);

    const response1 = await fetch("catalog/coachesNb");

    const body1 = await response1.json();
    console.log(body1);
    this.setState({ nbCoach: body1 });
  }

  render() {
    return (
      <div className="" style={{}}>
        <CatalogNav />
        <div style={{ height: "120px" }}></div>
        <Jumb />

        <div>
          <Container>
            <Row>
              <Col xs="3" style={{ marginTop: "57px" }}>
                <h6>
                  {" "}
                  <FontAwesome className="fa-sliders"> </FontAwesome> Filter
                </h6>
                {/*  <Filter />*/}
              </Col>
              <Col xs="9">
                <Row className="mr-auto" style={{ marginBottom: "20px" }}>
                  <Col className="text-left">
                    <UncontrolledDropdown>
                      <DropdownToggle
                        aria-expanded={false}
                        aria-haspopup={true}
                        caret
                        data-toggle="dropdown"
                        href="#pablo"
                        id="dropdownMenuButton"
                        color="secondary"
                        nav
                        onClick={(e) => e.preventDefault()}
                        role="button"
                      >
                        Sorted By Best Rated
                      </DropdownToggle>
                      <DropdownMenu
                        aria-labelledby="dropdownMenuButton"
                        className="dropdown-info"
                      >
                        <DropdownItem header tag="span">
                          Best Rated
                        </DropdownItem>
                        <DropdownItem
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          Worst Rated
                        </DropdownItem>
                        <DropdownItem
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          Newest
                        </DropdownItem>
                        <DropdownItem
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          Older
                        </DropdownItem>
                      </DropdownMenu>
                    </UncontrolledDropdown>
                  </Col>
                  <Col className="text-center ">
                    Showing {this.state.nbCoach>8 ? 8 : this.state.nbCoach} of {this.state.nbCoach} Coaches
                  </Col>
                  <Col className="text-right">
                    <FontAwesome
                      className="fa-table"
                      style={{ width: "40px" }}
                    ></FontAwesome>
                    <FontAwesome className="fa-list"></FontAwesome>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Row>
                      {console.log(this.state.coaches)}
                      {this.state.coaches.map((coach) => {
                        console.log(coach.acadamicExp);
                        return (
                          <CoachCard
                            key={coach.id}
                            id={coach.id}
                            name={coach.name}
                            img={coach.url}
                            rate={coach.rate}
                            desc={coach.description}
                            type={coach.type}
                            aexp={coach.acadamicExp}
                            wexp={coach.workExp}
                          />
                        );
                      })}
                    </Row>
                    <Row className="" style={{ marginTop: "25px" }}>
                      <Pagination
                        innerClass="pagination-secondary pagination"
                        activePage={this.state.currentPage}
                        itemsCountPerPage={this.state.CoachesPerPage}
                        totalItemsCount={this.state.nbCoach}
                        //  pageRangeDisplayed={5}

                        onChange={this.handlePageChange.bind(this)}
                      ></Pagination>
                    </Row>
                  </Col>

                  <div> </div>
                </Row>
              </Col>
            </Row>
          </Container>
        </div>

        <DemoFooter />
      </div>
    );
  }
}
