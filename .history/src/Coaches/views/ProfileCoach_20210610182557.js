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
      req : 0, 
      edit: false,
    };

    this.reqHandleFalse = this.reqHandleFalse.bind(this);
    this.reqHandleTrue = this.reqHandleTrue.bind(this);
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
          <Container>
            <div className="owner">
              <div className="avatar">
                <img
                  alt="..."
                  className="img-circle img-no-padding img-responsive"
                  src="" style={{width:"300px",height:"130px"}}
                />
              </div>
              {this.state.edit == true ? <Edit />: <></>}
             
          </Container>
             
        </div>

       
        <DemoFooter />
      </>
    );
  }
}
export default ProfileCoach;
