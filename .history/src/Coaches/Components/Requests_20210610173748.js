

import ProgramModal from "Programs/components/programModal";
import React, { Component } from "react";
import FontAwesome from "react-fontawesome";
import { Button, Col, Container, Modal, Row ,Table } from "reactstrap";

export default class Requests extends Component {
  
  render() {
    
    return (

                 
     <>
     <Container>
       <Row>
         <Col>
         </Col>
       </Row>
     </Container>
  <Row >

 
  </Row>
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
          <th></th>
        </tr>


  </thead>
  <tbody>
<tr>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td>
    <ProgramModal />
    </td>
</tr>
  </tbody>
</Table>
                   
</>
    );
  }
}
