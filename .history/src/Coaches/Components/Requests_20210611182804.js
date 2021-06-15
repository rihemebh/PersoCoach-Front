

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
     
    }
  }
   componentDidMount() {
     axios.get("http://localhost:8080/catalog/coach/60ad0f846fc93706c0edab81/requests").then(function (response) {
      this.setState({requests: response.data});
      console.log(response.data);
    }.bind(this))
    .catch(function (error) {
      // handle error
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
  <td> <Row className="inline">
    <Col xs="4">
    <img src="http://lorempixel.com/g/640/200/abstract/" className=" img-circle " width = "38px" height="38px" />
    </Col>
    <Col xs="8">
    {request.client.name}
    </Col>
   
  </Row>
   </td>
  <td>{request.age}</td>
  <td>{request.gender}</td>
  <td>{request.weight}</td>
  <td>{request.height}</td>
  <td>{request.practice}</td>
  <td>{request.goal}</td>
 
  {request.status == "pending" ? <><td className="text-secondary">Pending ..</td>    <td>
  <ProgramModal />
  </td></>:request.status == "waiting for response" ?<><td className="text-warning">Waiting for response</td><td>
    <Button color="link" >View program details</Button>
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
 <h3 className="text-center ">Requests</h3>

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
          <th>Goal</th>
          <th>status</th>
          <th></th>
          <th> <FontAwesome className="far fa-times-circle" name="clear" onClick={this.props.req}> </FontAwesome></th>
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
