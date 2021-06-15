

import ProgramModal from "Programs/components/programModal";
import React, { Component } from "react";
import FontAwesome from "react-fontawesome";
import { Button, Col, Container, Modal, Row ,Table } from "reactstrap";

export default class Requests extends Component {
  
  constructor(props){
    super(props);

    this.state= {
     
    }
  }

  handelreq (){
    return this.props.req;
  }
  render() {
    console.log(this.props.req);
    return (

                 
     <>
           
                   
</>
    );
  }
}
