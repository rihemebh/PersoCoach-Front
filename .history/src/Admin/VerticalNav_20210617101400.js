import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useParams,
  } from "react-router-dom";
  import { Navbar,Nav,NavDropdown,Form,FormControl,Button,NavLink, Container, Row, Col } from 'react-bootstrap'
 

class VerticalNav extends React.Component{

    render(){
        return(
            <>
              <Container>
               <Col xs="4" className=""></Col>
               <Col xs="8"></Col>

              </Container>
            </>
        )  
    }
}

export default VerticalNav;