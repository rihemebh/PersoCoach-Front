

import ProgramModal from "Programs/components/programModal";
import React, { Component } from "react";
import FontAwesome from "react-fontawesome";
import { Button, Col, Container, Modal, Row ,Table } from "reactstrap";

export default class Requests extends Component {
  
  constructor(props){
    super(props);

    this.state= {
      request : {

      }
     
    }
  }

  handelreq (){
    return this.props.req;
  }
  render() {
    var requests = this.props.requests;
var rows = [];
foreach(request in requests);
  rows.push(<tr>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td className=""> Pending .. </td>
    {/** 
    <td className="text-warning">Waiting for response</td>
    <td className="text-success">Accepted</td>
    */}
       <td>
    <ProgramModal />
    </td>
    <td></td>
   
 
</tr>);
}
    //console.log(this.props.req);
    return (

                 
     <>
 
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

  </tbody>
</Table>
               </Container> 
              
                   
</>
    );
  }
}
