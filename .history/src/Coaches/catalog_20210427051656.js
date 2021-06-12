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
      checkedRate:[false,false,false,false,false],
        checkedGender: [false,false],
        checkedType: [false,false],
      coaches: [],
      rate: 5,
      CoachesPerPage: 8,
      CurrentPage: 1,
      nbCoach: 0,
      sortby:"",
      direction: 0,
      coach: this.emptyCoach,
      bestclass:"dropdown-header",
      worstclass:"",
    };
    this.findCoachesByRate = this.findCoachesByRate.bind(this);
    this.handleSort = this.handleSort.bind(this);
    this.onClickButton=this.onClickButton.bind(this);

  }


onClickButton= async ()=>{

  this.findCoachesByRate();
}


    _onCheckboxClicked = (n) => {
    const x= [];
   
    for(let i=0; i<=n;i++){
    x.push(true);
    
    }
    if(n<5){for(let i=n+1;i<5;i++){x.push(false);}}
         this.setState({
         checkedRate: x,
         rate: n+1,
           },()=> console.log(this.state.rate));

 
    }

    /** */
  handlePageChange(pageNumber) {
   
    this.setState(
      {
        currentPage: pageNumber-1,
      },
      () => {
        this.findCoaches(this.state.currentPage,this.state.sortby);
      }
    );
  }
  handleSort(d,i) {
 // console.log(e);
 i==1?
    this.setState(
      {
        sortby: "rate",
        direction : d,
        bestclass : "dropdown-header",
        worstclass: ""
        
    },
      () => {
        this.findCoaches(this.state.currentPage,this.state.sortby,d);
      })
    : this.setState(
      {
        sortby: "rate",
        direction : d,
        worstclass : "dropdown-header",
        bestclass: ""
      
        
    },
      () => {
        this.findCoaches(this.state.currentPage,this.state.sortby,d);
      }
    );

  }
  async findCoaches(curr,sort,d) {
    let direction = d??0;
    let current = curr??0;
    const response = await fetch(
      "catalog/coaches?page=" +current+ "&size=" + this.state.CoachesPerPage+"&direction="+direction
    );

    const body = await response.json();
    this.setState({ coaches: body.content });
  }

  async findCoachesByRate() {
    
    const response = await fetch(
      "catalog/coaches?rate="+this.state.rate
    );
    const body = response.json();
    
    this.setState({ coaches: body.content});
  }

  async componentDidMount() {
    this.findCoaches(this.state.currentPage);

    const response1 = await fetch("catalog/coachesNb");

    const body1 = await response1.json();
 
    this.setState({ nbCoach: body1 });
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
                <form onSubmit={this.onClickButton}>
    
   
    <div style={{ margin: "10px" }}>
      <b>Rate</b>
    </div>
    {x.map((value, index) => {
        return <IconCheckbox checked={this.state.checkedRate[index]} 
        checkedIcon={ <FontAwesome className="fa-star text-warning" name="star" style={style}  />} 
        uncheckedIcon={ <FontAwesome className="fa-star" name="star" style={style} />}
        onClick={()=> this._onCheckboxClicked(index)} 
        />
    })
  }
    

    <hr></hr>
    <div style={{ margin: "10px" }}>Gender</div>

    <FormGroup check>
      <Label check>
        <Input defaultValue="" type="checkbox" />
        Man <span className="form-check-sign" />
      </Label>
    </FormGroup>
    <FormGroup check>
      <Label check>
        <Input defaultValue="" type="checkbox" />
        Women <span className="form-check-sign" />
      </Label>
    </FormGroup>
    <hr></hr>

    <div style={{ margin: "10px" }}>Specialty </div>
    <div className="form-check-radio">
      <Label check>
        <Input
          defaultValue="option2"
          id="exampleRadios2"
          name="exampleRadios"
          type="radio"
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
        />
        Nutrition <span className="form-check-sign" />
      </Label>
    </div>
    <div className="form-check-radio">
      <Label check>
        <Input
          defaultValue="option2"
          id="exampleRadios2"
          name="exampleRadios"
          type="radio"
        />
        Both <span className="form-check-sign" />
      </Label>
    </div>
    <hr></hr>
    <Button className="btn-sm " color="default" outline >
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
                        <DropdownItem
                         onClick={(e)=>this.handleSort(0,1)}>
                         <span className={this.state.bestclass}  > Best Rated</span>
                        </DropdownItem>
                        <DropdownItem
                          tag="span"
                          onClick={(e)=>this.handleSort(1,2)}
                        >
                          <span  className={this.state.worstclass} >Worst Rated</span> 
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
