import axios from "axios";
import TrackNav from "components/Navbars/trackNav";
import React, { Component } from "react";
import FontAwesome from "react-fontawesome";
import { toast, ToastContainer,Zoom , Bounce } from "react-toastify";
import MyCarousel from 'Programs/components/DaysCarousel';


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
  Table
} from "reactstrap";

// core components
import ProfileNav from "components/Navbars/ProfileNav";
import ProfilePageHeader from "components/Headers/ProfilePageHeader.js";
import DemoFooter from "components/Footers/DemoFooter.js";
import AuthService from "Authentification/AuthService";
import SectionCarousel from "views/index-sections/SectionCarousel";
import DayCard from "Programs/components/DayCard";


export default class Tracking extends React.Component{


 
    constructor(props){
        super(props);
        this.state={
            prog : {},
            programs: [],
            currentUser: '',
            request:{},
            bprog : {},
            duration: 5 ,
            complexity : 8,
            dietType : "Detox"
        }
    }
        componentDidMount(){
            axios.get("http://localhost:8080/api/program/"+this.props.match.params.id).then(function (response) {
                console.log(response.data)
                this.setState({prog : response.data,programs : response.data.dailyprogram});
                }.bind(this))
                .catch(function (error) {
                  
                  console.log(error);
                });
            axios.post("http://localhost:8080/api/program/"+this.props.match.params.id+"/bprogram").then(function (response) {
                console.log(response.data)
                this.setState({bprog : response.data});
                }.bind(this))
                .catch(function (error) {
                  
                  console.log(error);
                });
        }
      
     

    render(){
        var name = "client";
   
        if(this.state.prog.client != undefined)
        name = this.state.prog.client.name;
        var days= [];
        const program = this.state.programs;
       
       // Object.keys(program).map()
    //   program.forEach();
 





        return(
            <div>
               <ProfileNav />
                
                <div
                  className="page-header"
                  style={{
                      //opacity: 0.8,
                   // backgroundColor: "rgba(0, 0, 0, 0.9)",
                    backgroundImage:
                      "url(https://www.heart.org/-/media/healthy-living-images/fitness/runner_tying_shoe.jpg)",
                  }}
                >
                  
                  <div className="filter"/>
            
                  <MyCarousel program={program} bprogram={this.state.bprog} id={}/>
          
            
                      
                  
          <br />
          <br />
           <div className="footer register-footer text-center">
                    <h6>
                      © {new Date().getFullYear()}, made with{" "}
                      <i className="fa fa-heart heart" /> by PersoCoach Team          </h6>
                  </div>
          
                  
                  
                  
                  </div> 
          
    
    
            </div>
        )
    }


    
}