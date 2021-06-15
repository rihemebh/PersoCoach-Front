

import axios from "axios";
import ProgramModal from "Programs/components/programModal";
import React, { Component } from "react";
import FontAwesome from "react-fontawesome";
import { Button, Col, Container, Modal, Row ,Table } from "reactstrap";



export default class Requests extends Component {
  
  constructor(props){
    super(props);

    this.state= {
      request : {

      },
      requests : [],
      briefProgram: [],
     
    }
  }

  findBriefProgram(request){

    axios.get("http://localhost:8080/api/bprogram/request",request).then(function(response){
      console.log(response.data.value);
    }.bind(this)).catch((error)=> console.log(error))
  }
   componentDidMount() {
     axios.get("http://localhost:8080/catalog/coach/"+this.props.coach.id+"/requests").then(function (response) {
      this.setState({requests: response.data});
      console.log(response.data);
    }.bind(this))
    .catch(function (error) {
      console.log(error);
    });
   }
  handelreq (){
    return this.props.req;
  }
  render() {
    var requests = this.state.requests;
  // requests = this.props.requests;
var rows = [];
requests.forEach((request)=>
{ 


  rows.push(
    <tr>
  <td>{request.id}</td>
  <td style={{width: "300px"}}> 
   
    
    {request.client.name}
 
    
   </td>
  <td>{request.age}</td>
  <td>{request.gender}</td>
  <td>{request.weight}</td>
  <td>{request.height}</td>
  <td>{request.practice}</td>
  <td>{request.goal}</td>
 
  {request.status == "pending" ? <><td className="text-secondary">Pending ..</td>    <td>
  <ProgramModal  request={request} coach={request.coach} />
  </td></>:request.status == "Waiting for response" ?<><td className="text-warning">Waiting for response</td><td>
    <Button color="link" onClick={()=>this.findBriefProgram(request)} >View program details</Button>
    </td></>: request.status == "accepted" ?<><td className="text-success">Accepted</td><td>
    <Button color="link" >Send a detailed program</Button>
    </td></>:<><td className="text-danger">Refused</td><td>
    <Button color="link" >View program details</Button>
    </td></>}
  {/** 
  <td className="text-warning">Waiting for response</td>
  <td className="text-success">Accepted</td>
  */}
 
  <td></td>
 

</tr>);

return rows });
  

    //console.log(this.props.req);
    return (

                 
     <>
     <br></br>
     <br></br>
     <button className="text-secondary btn btn-link" onClick={this.props.profile} >Profile</button>
     /<button className="disabled bg-white text-secondary btn btn-link">   Requests</button>
 

 <br></br>
 <br></br>
             <Container>
             <Table>
  <thead>
  <tr>
          
          <th>Request Id </th>
          <th>Client </th>
          <th>Age</th>
          <th>Gender</th>
          <th>Weight</th>
          <th>Height</th>
          <th>Exercices</th>
          <th><span  style={{color: "transparent"}}>..............</span>Goal<span  style={{color: "transparent"}} >.........................</span></th>
          <th>status</th>
          <th></th>
          
        </tr>


  </thead>
  <tbody>
{rows}
  </tbody>
</Table>
               </Container> 
              
                   
</>
    );
  }
}
