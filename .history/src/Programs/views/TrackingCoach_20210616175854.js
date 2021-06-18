import axios from "axios";

import React, { Component } from "react";

import MyCarousel from 'Programs/components/DaysCarousel';




// core components
import ProfileNav from "components/Navbars/ProfileNav";



export default class TrackingCoach extends React.Component{


 
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
       
        return(
            <div>
               <ProfileNav />
                
                <div
                  className="page-header"
                  style={{
                 
                    backgroundImage:
                      "url(https://www.heart.org/-/media/healthy-living-images/fitness/runner_tying_shoe.jpg)",
                  }}
                >
                  
                  <div className="filter"/>
            
                  <MyCarousel program={program}  id={this.state.prog.id} />
          
            
                      
                  
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