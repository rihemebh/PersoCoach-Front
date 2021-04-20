import React, { Component } from 'react';
import {Nav,  Navbar,NavDropdown} from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';


export default class Mynavbar extends Component {
  render() {

    const homeStyle = {
      color: "#707070" ,
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
          <Nav.Link href="#link" style={{marginLeft: "100px", color: "#6796E8"}} >Coaches</Nav.Link>
         
          <Nav.Link href="#link" style={mystyle} ></Nav.Link>
          
        </Nav>
        <Navbar.Brand href="#home" style={{marginRight: "100px" , marginLeft: "100px" }} 
        className="d-flex justify-content-center" ><img src="11.png" height="93px" width="190px"></img></Navbar.Brand>
        <Nav className="d-flex justify-content-end" id="basic-navbar-nav">
        <Nav.Link href="#link" style={mystyle}>Community</Nav.Link>
          <Nav.Link href="#link" style={mystyle}>Contact</Nav.Link>
          <Nav.Link href="#link" style={mystyle} >
          <FontAwesome
                            className='fas fa-sign-in-alt'
                      
                           size="2x"
                           spin
                           style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
                        />
           in</Nav.Link>
          </Nav>
      </Navbar.Collapse>
    </Navbar>
    )
  }
}

