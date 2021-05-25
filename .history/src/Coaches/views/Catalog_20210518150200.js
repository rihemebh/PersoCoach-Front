import DemoFooter from "components/Footers/DemoFooter";
import CatalogNav from "components/Navbars/CatalogNav";
import React, { Component } from "react";
import CoachCard from "../Components/CoachCard";
import Jumb from "../Components/jumbotron";
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
import Filter from "../Components/Filter";
import Pagination from "react-js-pagination";
import axios from "axios";

//backgroundColor: "#F9F9F9"
export default class Catalog extends Component {
 
  constructor(props) {
    super(props);

    this.state = {
      key:"",
      checkedRate: [false, false, false, false, false],
      checkedGender: [false, false],
      checkedType: [false, false],
      coaches: [],
      rate: 5,
      CoachesPerPage: 9,
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
   this.findCoaches=this.findCoaches.bind(this);
   this.updatekey=this.updatekey.bind(this);

  }
  updatekey= (k)=>{
    this.setState({
      key: k,
    },()=> this.findCoaches(0,0,this.state.key))
  }

  onClickButton = async (e) => {
    e.preventDefault();
    this.setState({filter:true});
    this.findCoaches(this.state.currentPage, 0, this.state.rate);
  };

  onClickCheckbox = (i)=>{
    if(i==1) 
    this.setState({gender : "Man"});
    else if(i==2)   this.setState({gender : "Women"});
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
      }
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
   // let k = (key==null) ? this.state.key : key;
   let rep = this.state.coaches;
    const response =  axios.get(
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
        this.state.type +
        "&key="+
        this.state.key   
    ).then(function (response) {
       rep = response.data.content;
       //console.log(rep);
       this.setState({ coaches: rep}) 
       
      this.nbCoaches();
    }.bind(this)
    ).catch(function (error){
     console.log(error);
    })
   
   
    }
   
    clearFilter(){
     
      this.setState({gender:"", rate: 5 , type: "", filter: false, key:"", 
      checkedRate: [false, false, false, false, false],
      checkedGender: [false, false],
      checkedType: [false, false],},async ()  =>{
        this.nbCoaches();
        this.findCoaches(0,0);
      });
      document.getElementById('formcheckinput').checked = false
    }

  
  
  /***************************** */
  async nbCoaches(){
    const response1 =  axios.get("catalog/coachesNb?rate=" +
    this.state.rate +
    "&gender="+
    this.state.gender +
    "&type=" +
    this.state.type+
    "&key="+
    this.state.key  
).then(function (response) {
  
  
  this.setState({ nbCoach: response.data}) 
  
}.bind(this)
).catch(function (error){
console.log(error);
})
 
  }


  async componentDidMount() {
    this.findCoaches(this.state.currentPage,0);
    this.setState({gender:"", rate: 5 , type: "", filter: false, key:"",  },async ()  =>{
      this.nbCoaches();
    });
    
  }
  componentDidUpdate(){
    console.log(this.state.CurrentPage);
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
        <Jumb updatekey={this.updatekey}/>

        <div>
          <Container>
            <Row>

              <Col xs="3" style={{ marginTop: "57px" }}>
                <h6>
                  {" "}
                  <Container>
                    <Row>
                      <Col xs="10" className="text-left"> <FontAwesome className="fa-sliders"> </FontAwesome> Filter</Col>
                      <Col xs="2"><FontAwesome className="far fa-times-circle" name="clear" onClick={this.clearFilter.bind(this)}> </FontAwesome></Col>
                    </Row>
                  </Container>
                 
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
                      <Input   defaultValue="option1"
                     
                        name="exampleRadios1" type="radio" onClick={()=>this.onClickCheckbox(1)}/>
                      Man <span className="form-check-sign" />
                    </Label>
                  
               </div>
               <div className="form-check-radio">
                    <Label check>
                      <Input defaultValue="option1"
                   
                        name="exampleRadios1" type="radio" onClick={()=>this.onClickCheckbox(2)}/>
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
                     
                      </DropdownMenu>
                    </UncontrolledDropdown>
                  </Col>
                  <Col className="text-center ">
                    Showing {this.state.nbCoach > 9 ? this.state.coaches.length : this.state.nbCoach} of{" "}
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
                      { this.state.coaches==undefined? <h1></h1> :
                      this.state.coaches.map((coach) => {
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

                    {this.state.nbCoach<=9 ? <div></div> : 
                    <Row className="" style={{ marginTop: "25px" }}>
                 
                      <Pagination
                        innerClass="pagination-info pagination"
                        activePage={this.state.currentPage}
                        itemsCountPerPage={this.state.CoachesPerPage}
                        totalItemsCount={this.state.nbCoach}
                        //pageRangeDisplayed={5}
                        onChange={this.handlePageChange.bind(this)}
                      ></Pagination>
                    </Row>}
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
