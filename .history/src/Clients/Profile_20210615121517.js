import React, { Component } from "react";
import FontAwesome from "react-fontawesome";
import axios from 'axios';

// reactstrap components
import {
  Button,
  Label,
  FormGroup,
  Input,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components
import ProfileNav from "components/Navbars/ProfileNav.js";
import ProfilePageHeader from "components/Headers/ProfilePageHeader.js";
import DemoFooter from "components/Footers/DemoFooter.js";
import AuthService from "Authentification/AuthService";
import ProfileSettingsModal from "./ProfileSettingsModal";
import authHeader from "Authentification/AuthHeader";
import ClientRequests from "./ClientRequests"
import Programs from "./Programs";
import Requests from "./Requests";



export default class Profile extends React.Component{

    initialInfos = {
      id: '',
      username: '',
      email: '',
      name: "",
      description: '',
      age: '',
      gender: '',
      height: '',
      password: '',
      programRequestList: [],
      roles: [],
      url: '',
      weight: '',

    }

    constructor(props){
      super(props)
      this.state={
          authenticated: props? this.props.authenticated: false,
          loading: true,
          activeTab: 1,
          currentUserInfo: this.initialInfos,
          program : false,
          requests : [],
      }
    }
handleProgram(){
  this.setState({program : !this.state.program})
}
  
  
  async componentDidMount() {
      AuthService.getCurrentUser()
      .then(
        response => {
        
          if(response.roles[0].name==="ROLE_COACH"){
            console.log("redirecting..")
                      this.props.history.push({
                       pathname: '/coach-profile/'+response.id});
                      window.location.reload(); 
          }
          this.setState( () => (
            {
              currentUserInfo: response,
              authenticated: true,
              loading: false
            })) 
        
        }
      )
      .catch(
        error => {
          console.log(error)
        }
      );


       
      
    }

    render(){
      const user = this.state.currentUserInfo;
   
      if(!this.state.loading && !this.state.authenticated)
        this.props.history.push({pathname: '/login'});  

      const toggle = (tab) => {
        if (this.state.activeTab !== tab) {
          this.setState({ activeTab: tab });
        }
      };

      
      
        return(
            <div>
            <ProfileNav />
            <ProfilePageHeader />
            <div className="section profile-content">
              <Container>
                <div className="owner">
                  <div className="avatar">
                    <img
                      alt="..."
                      className="img-circle img-no-padding img-responsive"
                      src={require("assets/img/faces/joe-gardner-2.jpg").default}
                    />
                  </div>
                  <div className="name">
                    <h4 className="">
                      {this.state.currentUserInfo.name}                    </h4>
                    <h6 className="description">@{this.state.currentUserInfo.username}</h6>
                  </div>
                </div>
                <br />
                {this.state.program === false ? <>
                
                  <Row>
                  <Col className=" text-center" >
                  <p>   <FontAwesome className="fa-quote-left " style={{fontSize: "10px", verticalAlign:"top"}}></FontAwesome>
                      {this.state.currentUserInfo.description}  
                      <FontAwesome className="fa-quote-right"  style={{fontSize: "10px", verticalAlign:"top"}}></FontAwesome>
                      </p>
                    
                    <br />
                    <Row>
                      <Col xs="4"></Col>
                      <Col>   <ProfileSettingsModal currentUserInfo={user}/></Col>
                      <Col><Button  className="btn-round"
              color="danger"
              
              type="button"
              onClick={this.handleProgram.bind(this)}
              ><FontAwesome  className="fas fa-align-justify"  ></FontAwesome> Programs</Button></Col>
                      <Col xs="4"></Col>
                    </Row>
                 
                  </Col>
                 
                </Row>
                <br />  
                <div className="nav-tabs-navigation">
              <br></br>
                <h5 style={{ fontWeight: "bold"}}>Get a closer look at your program requests sent to Coaches : </h5>
                
           
                </div>
              
            <Requests  client={this.state.currentUserInfo} programs={this.handleProgram.bind(this)}/>    
                </> : <>
                <Programs profile={this.handleProgram.bind(this)}  client={this.state.currentUserInfo} />
                
                </>}
                
              </Container>
            </div>
            <DemoFooter />
            </div>
        )
    }


    
}