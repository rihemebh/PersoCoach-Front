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
  Table
} from "reactstrap";

// core components
import ProgramNav from "components/Navbars/ProgramNav";
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
 program.map((prog)=>{
 days.push(<> 
 <Container className="shadow" style={{borderRadius : "20px 20px 20px 20px"}}>
 <br></br>
 <h6 className="text-center" style={{ marginTop: "10px"}}>Day {prog.day}</h6>
 <br></br>

<Container  style={{
                        background: "inherit",
                       backgroundColor: "rgba(255, 255, 255, .2)",
                      
                    borderRadius: "8px",
                    maxWidth: "1200px",
                    margin:" 20px 0 70px",
                    minWidth: "500px",
                    overflowX: "auto"}}>
                        <h7>Meals</h7>
                        <br></br>
                        <br></br>
<Row className="justify-content-center">
             <Table >
  <thead>
  <tr>
          
          <th>breakfast</th>
          <th >Lunch</th>
          <th>Dinner</th>
          <th>Extra</th>
          <th>Water (L)</th>
        
        
       

</tr>
  </thead>
  <tbody>
<tr>
    <td>{prog.breakfast}</td>
    <td>{prog.lunch}</td>
    <td>{prog.dinner}</td>
    <td>{prog.extra== ""? "No extra" : prog.extra}</td>
    <td>{prog.waterQuantity}</td>
</tr>
  </tbody>
</Table>
</Row>
               </Container> 
 </Container>


 </>
 )});

        return(
            <div>
            <ProgramNav />
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
             <br></br>
             Complexity : {this.state.complexity}
             <br></br>
             Duration : {this.state.duration}
             <br></br>
             DietType : {this.state.dietType}
            </div>
          </div>
          
          <br />
          <div className="nav-tabs-navigation">
            <div className="nav-tabs-wrapper">
           
            </div>
          </div>
      {days}              
        </Container>
        
      </div>
      <DemoFooter />
            </div>
        )
    }


    
}