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
import Edit from "Coaches/Components/Edit"
import Programs from "Coaches/Components/Programs";

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
      requests : [],
      id: props.match.params.id,
      activeTab: 1,
      coachId: props.match.params.id,
      coach: this.emptyCoach,
      isLoading: true,
      req : 0, 
      edit: false,
      prog: false,
    };

    this.reqHandleFalse = this.reqHandleFalse.bind(this);
    this.reqHandleTrue = this.reqHandleTrue.bind(this);
    this.handelEdit= this.handelEdit.bind(this);
    this.handleProg = this.handleProg.bind(this);
  }
handleProg(){

  this.setState({prog: true});
}

handleProgFalse(){
  this.setState({prog: false});

}
  async componentDidMount() {
  
    const response1 = await fetch(
      "http://localhost:3000/catalog/coach/" + this.state.id+"/review"
    );
    const body1 = await response1.json();
    this.setState({ reviews: body1 },()=>{
    
    });
    
    const response2 = await fetch(
      "http://localhost:3000/catalog/coach/" + this.state.id+"/requests"
    );
    const body2 = await response2.json();
    this.setState({ requests: body2 },()=>{
    
    });
  }
 handelEdit(ed){
  
  this.setState({edit : ed});
 }
  reqHandleTrue(){
   
    this.setState({req : true});
  }
  reqHandleFalse(){
   
    this.setState({req : false});
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
        <div className="section profile-content">
                     <div className="owner">
              <div className="avatar">
                <img
                  alt="..."
                  className="img-circle img-no-padding img-responsive"
                  src="" style={{width:"300px",height:"130px"}}
                />
              </div>
              </div>
          <Container>
            {this.state.prog == true ? <Programs profile={} />:
     
              this.state.edit ?  
              <Edit profile={this.handelEdit} ></Edit>  : 
              <>
             
           
            {this.state.req == false ? 
            <>
           
            <div className="name text-center ">
                <h4 className="title">
                
               First Name & lastname
              
                </h4>
                <h7>Foulen@hotmail.com</h7>
                <br />
              
                <h6 className="description">Type Coach</h6>
             
                <ReviewModal reviews={this.state.reviews} rate={rate} />
              </div>
                  <Row>
                 
                  <Col className="ml-auto mr-auto text-center" style={{padding :  "10px"}}>  <Button  className="btn-round text-secondary  " outline 
                    color="link"  style={{fontSize: "10px", margin: "5px"}} onClick={()=> this.handelEdit(true)}>
                 <FontAwesome  className="far fa-edit " ></FontAwesome><span >Edit Profil</span></Button>
                 
                <Button  className="btn-round "  color="danger" outline  style={{fontSize: "10px" , margin: "5px"}}
                 onClick={this.reqHandleTrue
                }>
                 <FontAwesome  className="fas fa-users"  ></FontAwesome>Requests</Button>
                 <Button  className="btn-round "  color="danger" outline  onClick={this.handleProg} style={{fontSize: "10px" , margin: "5px"}}>
                 
                 <FontAwesome  className="fas fa-align-justify"  ></FontAwesome>Programs</Button></Col>
               
                  </Row>
               
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
            : <Requests req={this.reqHandleFalse} requests={this.state.requests} id={this.state.coach.id} profile={this.reqHandleFalse}/>      } </>}
             
          </Container> 
             
        </div>
        </div>
       
        <DemoFooter />
      </>
    );
  }
}
export default ProfileCoach;
