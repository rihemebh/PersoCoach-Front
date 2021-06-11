import React, { Component } from "react";

// reactstrap components
import {
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  Container,
  Row,
  Col,
  Button,
  Table
} from "reactstrap";

// core components

import ProfilePageHeader from "components/Headers/ProfilePageHeader.js";
import DemoFooter from "components/Footers/DemoFooter.js";
import FontAwesome from "react-fontawesome";
import ProfileNav from "components/Navbars/ProfileNav";
import CoachModal from "../Components/CoachModal";
import { Link } from "react-router-dom";
import ReviewModal from "../Components/ReviewModal";
import Requests from "Coaches/Components/Requests";

class ProfileCoach extends Component {
  emptyCoach = {
    id: 0,
    name: "",
    gender: "",
    type: "",
    url:"",
    description: "",
    rate: 0,
    acadamicExp: [],
    workExp: [],
  
  };
  constructor(props) {
    super(props);

    this.state = {
      reviews :[],
      id: props.match.params.id,
      activeTab: 1,
      coachId: props.match.params.id,
      coach: this.emptyCoach,
      isLoading: true,
      req : false, 
    };

    this.reqHandle = this.reqHandle.bind(this);
  }

  async componentDidMount() {
   
    const response = await fetch(
      "http://localhost:3000/catalog/coach/" + this.state.id
    );

    const body = await response.json();
    this.setState({ coach: body, isLoading: false });

    const response1 = await fetch(
      "http://localhost:3000/catalog/coach/" + this.state.id+"/review"
    );
    const body1 = await response1.json();
    this.setState({ reviews: body1 },()=>{
      console.log(this.state.reviews)
    });
  }

  reqHandle (r){
   
    this.setState({req : r},()=> console.log(this.state.req));
  }

  render() {
    document.documentElement.classList.remove("nav-open");
    const toggle = (tab) => {
      if (this.state.activeTab !== tab) {
        this.setState({ activeTab: tab });
      }
    };
    var n=0;
    const rate = [];

    let nb = 0;
    const length = this.state.reviews.length;
 
    //var TotalReviews = [];
    let x= this.state.reviews[0];
    
    length == 0 && this.state.reviews != undefined
      ? (nb=0)
      : ( nb = x.coach.rate);
      console.log(nb);
    for (let i = 0; i < 5; i++) {
      if (nb > 0) {
        rate.push(
          <FontAwesome
            className="fas fa-star text-warning"
            name="star"
          ></FontAwesome>
        );
        nb--;
      } else {
        rate.push(
          <FontAwesome
            className="far fa-star "
            name="star"
            style={{ color: "#d9d9d9" }}
          ></FontAwesome>
        );
      }
    }
    return (
      <>
        <ProfileNav />
        <ProfilePageHeader />
        <div className="section profile-content">
          <Container>
            <div className="owner">
              <div className="avatar">
                <img
                  alt="..."
                  className="img-circle img-no-padding img-responsive"
                  src="" style={{width:"300px",height:"130px"}}
                />
              </div>
              <div className="name">
                <h4 className="title">
                
               First Name & lastname <br />
                </h4>
               
              
              
                <h6 className="description">Type Coach</h6>
                <ReviewModal reviews={this.state.reviews} rate={rate} />
              </div>
            </div>
            {this.state.req == false ? 
            <>
            <Container>
                  <Row>
                 
                  <Col className="ml-auto mr-auto text-center" style={{padding :  "10px"}}>  <Button  className="btn-round text-secondary  " outline 
                    color="link"  style={{fontSize: "10px", margin: "5px"}}>
                 <FontAwesome  className="far fa-edit " ></FontAwesome><span >Edit Profil</span></Button>
                  <Button  className="btn-round " color="danger" outline style={{fontSize: "10px", margin: "5px"}}>
                 <FontAwesome  className="fas fa-lock" ></FontAwesome>Personal Info</Button>
                <Button  className="btn-round "  color="danger" outline  style={{fontSize: "10px" , margin: "5px"}} onClick={this.reqHandle
                }>
                 <FontAwesome  className="fas fa-users"  ></FontAwesome>Requests</Button></Col>
               
                  </Row>
                </Container>
            <Row>
              <Col className="ml-auto mr-auto text-center">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                <br />

             
              </Col>
            </Row>

            <br />
            <div className="nav-tabs-navigation">
              <div className="nav-tabs-wrapper">
                <Nav role="tablist" tabs>
                  <NavItem>
                    <NavLink
                      className={this.state.activeTab === "1" ? "active" : ""}
                      onClick={() => {
                        toggle("1");
                      }}
                    >
                      Acadamic Experience
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className={this.state.activeTab === "2" ? "active" : ""}
                      onClick={() => {
                        toggle("2");
                      }}
                    >
                      Professional Experience
                    </NavLink>
                  </NavItem>
                </Nav>
              </div>
            </div>
            {/* Tab panes */}
            <TabContent className="following" activeTab={this.state.activeTab}>
              <TabPane tabId="1" id="follows">
                <Row>
                  <Col className="ml-auto mr-auto" md="6">
                    <ul className="list-unstyled follows">
                 
                    </ul>
                  </Col>
                </Row>
              </TabPane>
              <TabPane className="text-center" tabId="2" id="following">
              <Row>
                  <Col className="ml-auto mr-auto" md="6">
                    <ul className="list-unstyled follows">
                      
                    </ul>
                  </Col>
                </Row>
              </TabPane>
            </TabContent>
            </>
            : <Requests req={this.reqHandle}/>      }
          </Container>
             
        </div>

       
        <DemoFooter />
      </>
    );
  }
}
export default ProfileCoach;
