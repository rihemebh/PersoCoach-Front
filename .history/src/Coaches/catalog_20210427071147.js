import DemoFooter from "components/Footers/DemoFooter";
import CatalogNav from "components/Navbars/CatalogNav";
import ExamplesNavbar from "components/Navbars/ExamplesNavbar";
import React, { Component } from "react";
import CoachCard from "./CoachCard";
import Jumb from "./jumbotron";
import { Label, FormGroup, Input, Button } from "reactstrap";
import { IconCheckbox } from "react-icon-checkbox";

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
 
  constructor(props) {
    super(props);

    this.state = {
      checkedRate: [false, false, false, false, false],
      checkedGender: [false, false],
      checkedType: [false, false],
      coaches: [],
      rate: 5,
      CoachesPerPage: 8,
      CurrentPage: 1,
      nbCoach: 0,
      sortby: "",
      direction: 0,
      gender: "",
      type:"",
      bestclass: "dropdown-header",
      worstclass: "",
      filter: false,
    };

    this.nbCoaches=this.nbCoaches.bind(this);

  }

  onClickButton = async (e) => {
    e.preventDefault();
    this.setState({filter:true});
    this.findCoaches(this.state.currentPage, 0, this.state.rate);
  };

  onClickCheckbox = (i)=>{
    if(i==1) 
    this.setState({gender : "man"});
    else if(i==2)   this.setState({gender : "women"});
    else this.setState({gender : ""});
  }

  onClickRadio = (i)=>{
    if(i==1) 
    this.setState({type: "Sport"});
    else if(i==2)   this.setState({type: "Nutrition"});
    else this.setState({type: ""});
  }

  _onCheckboxClicked = (n) => {
    const x = [];

    for (let i = 0; i <= n; i++) {
      x.push(true);
    }
    if (n < 5) {
      for (let i = n + 1; i < 5; i++) {
        x.push(false);
      }
    }
    this.setState(
      {
        checkedRate: x,
        rate: n + 1,
      },
      () => console.log(this.state.rate)
    );
  };

  /** page change  */
  handlePageChange(pageNumber) {
    this.setState(
      {
        currentPage: pageNumber - 1,
      },
      () => {
        this.findCoaches(this.state.currentPage, this.state.sortby);
      }
    );
  }

  /*** sort */
  handleSort(d, i) {
    // console.log(e);
    i == 1
      ? this.setState(
          {
            sortby: "rate",
            direction: d,
            bestclass: "dropdown-header",
            worstclass: "",
          },
          () => {
            this.findCoaches(this.state.currentPage, d);
          }
        )
      : this.setState(
          {
            sortby: "rate",
            direction: d,
            worstclass: "dropdown-header",
            bestclass: "",
          },
          () => {
            this.findCoaches(this.state.currentPage, d);
          }
        );
  }
  /********************** */
  async findCoaches(curr, d) {
    let direction = d ?? 0;
    let current = curr ?? 0;
    const response = await fetch(
      "catalog/coaches?page=" +
        current +
        "&size=" +
        this.state.CoachesPerPage +
        "&direction=" +
        direction +
        "&rate=" +
        this.state.rate +
        "&gender="+
        this.state.gender +
        "&type=" +
        this.state.type
    );

    const body = await response.json();
    this.setState({ coaches: body.content});
    this.nbCoaches();
  }
  
  /***************************** */
  async nbCoaches(){
    const response1 = await fetch("catalog/coachesNb?rate=" +
    this.state.rate +
    "&gender="+
    this.state.gender +
    "&type=" +
    this.state.type
););

    const body1 = await response1.json();
    this.setState({ nbCoach: body1 })
  }
  async componentDidMount() {
    this.findCoaches(this.state.currentPage);
    this.setState({gender:"", rate: 5 , type: "", filter: false},async ()  =>{
      this.nbCoaches();
    });
    
  }

  render() {
    const style = {
      color: "#d9d9d9",
      fontSize: "25px",
      marginRight: "10px",
    };
    let x = this.state.checkedRate;
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
                <hr></hr>
                <form onSubmit={this.onClickButton.bind(this)}>
                  <div style={{ margin: "10px" }}>
                    <b>Max Rate</b>
                  </div>
                  {x.map((value, index) => {
                    return (
                      <IconCheckbox
                        checked={this.state.checkedRate[index]}
                        checkedIcon={
                          <FontAwesome
                            className="fa-star text-warning"
                            name="star"
                            style={style}
                          />
                        }
                        uncheckedIcon={
                          <FontAwesome
                            className="fa-star"
                            name="star"
                            style={style}
                          />
                        }
                        onClick={() => this._onCheckboxClicked(index)}
                      />
                    );
                  })}

                  <hr></hr>
                  <div style={{ margin: "10px" }}>Gender</div>

                  <div className="form-check-radio">
                    <Label check>
                      <Input defaultValue="" type="radio" onClick={()=>this.onClickCheckbox(1)}/>
                      Man <span className="form-check-sign" />
                    </Label>
                  
               </div>
               <div className="form-check-radio">
                    <Label check>
                      <Input defaultValue="" type="radio" onClick={()=>this.onClickCheckbox(2)}/>
                      Women <span className="form-check-sign" />
                    </Label>
                </div>
                  <hr></hr>

                  <div style={{ margin: "10px" }}>Specialty </div>
                  <div className="form-check-radio">
                    <Label check>
                      <Input
                        defaultValue="option2"
                        id="exampleRadios2"
                        name="exampleRadios"
                        type="radio"
                        onClick={()=>this.onClickRadio(1)}
                      />
                      Sport <span className="form-check-sign" />
                    </Label>
                  </div>
                  <div className="form-check-radio">
                    <Label check>
                      <Input
                        defaultValue="option2"
                        id="exampleRadios2"
                        name="exampleRadios"
                        type="radio"
                        onClick={()=>this.onClickRadio(2)}
                      />
                      Nutrition <span className="form-check-sign" />
                    </Label>
                  </div>
                 
                  <hr></hr>
                  <Button className="btn-sm " color="default" outline>
                    Filter
                  </Button>
                </form>
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
                        Sorted By
                      </DropdownToggle>
                      <DropdownMenu
                        aria-labelledby="dropdownMenuButton"
                        className="dropdown-info"
                      >
                        <DropdownItem onClick={() => this.handleSort(0, 1)}>
                          <span className={this.state.bestclass}>
                            {" "}
                            Best Rated
                          </span>
                        </DropdownItem>
                        <DropdownItem
                          tag="span"
                          onClick={() => this.handleSort(1, 2)}
                        >
                          <span className={this.state.worstclass}>
                            Worst Rated
                          </span>
                        </DropdownItem>
                        {/*<DropdownItem
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
                        </DropdownItem>*/}
                      </DropdownMenu>
                    </UncontrolledDropdown>
                  </Col>
                  <Col className="text-center ">
                    Showing {this.state.nbCoach > 8 ? this.state.coaches.length : this.state.nbCoach} of{" "}
                    {this.state.nbCoach} Coaches
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
                      {this.state.coaches.map((coach) => {
                        console.log(coach.rate);
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
                        innerClass="pagination-info pagination"
                        activePage={this.state.currentPage}
                        itemsCountPerPage={this.state.CoachesPerPage}
                        totalItemsCount={this.state.nbCoach}
                        pageRangeDisplayed={5}

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
