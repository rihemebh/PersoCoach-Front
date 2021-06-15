import axios from "axios";
import TrackNav from "components/Navbars/trackNav";
import React, { Component } from "react";
import FontAwesome from "react-fontawesome";
import { toast, ToastContainer,Zoom , Bounce } from "react-toastify";


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
import ProfileNav from "components/Navbars/ProfileNav";
import ProfilePageHeader from "components/Headers/ProfilePageHeader.js";
import DemoFooter from "components/Footers/DemoFooter.js";
import AuthService from "Authentification/AuthService";


export default class Tracking extends React.Component{


 
    constructor(props){
        super(props);
        this.state={
            prog : {},
            programs: [],
            currentUser: '',
        }
    }
        componentDidMount(){
            axios.get("http://localhost:8080/api/program/"+this.props.match.params.id).then(function (response) {
                console.log(response.data)
                this.setState({prog : response.data,programs : response.data.dailyprogram});
                }.bind(this))
                .catch(function (error) {
                  
                  console.log(error);
                })
        }
      
     

    render(){
        var name = "client";
   
        if(this.state.prog.client != undefined)
        name = this.state.prog.client.name;
   

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
             
              <h3 class=" text-center title" >Track <span style={{fontSize : "bold"}}>{name + "'s"}</span> Progress</h3> 
         
             Id:  {this.state.prog.id}
            </div>
          </div>
          
          <br />
          <div className="nav-tabs-navigation">
            <div className="nav-tabs-wrapper">
           
            </div>
          </div>
      {programs}              
        </Container>
        
      </div>
      <DemoFooter />
            </div>
        )
    }


    
}