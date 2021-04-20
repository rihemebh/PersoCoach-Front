import React, { Component } from 'react';
import {Nav,  Navbar,NavDropdown} from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';


export default class Mynavbar extends Component {
  render() {

    const homeStyle = {

      marginLeft: "173px",
    };
    const mystyle = {
      marginLeft: "100px",
      color: "#707070" ,
    };
    return (
      <Navbar bg="white" className="mr-auto" expand="lg">
    
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse >
        <Nav className="d-flex justify-content-start">

          <Nav.Link href="#home" style={homeStyle}>Home</Nav.Link>
          <Nav.Link href="#link" style={mystyle} >Coaches</Nav.Link>
         
          <Nav.Link href="#link" style={mystyle} ></Nav.Link>
          
        </Nav>
        <Navbar.Brand href="#home" style={{marginRight: "100px" , marginLeft: "100px" }} 
        className="d-flex justify-content-center" ><img src="11.png" height="95px" width="192px"></img></Navbar.Brand>
        <Nav className="d-flex justify-content-end" id="basic-navbar-nav">
        <Nav.Link href="#link" style={mystyle}>Community</Nav.Link>
          <Nav.Link href="#link" style={mystyle}>Contact</Nav.Link>
          <Nav.Link href="#link" style={mystyle} >
          <FontAwesome
                            className='fas fa-sign-in-alt'
                           color
                        />
            <i class="fas fa-sign-in-alt"></i></Nav.Link>
          </Nav>
      </Navbar.Collapse>
    </Navbar>
    )
  }
}

