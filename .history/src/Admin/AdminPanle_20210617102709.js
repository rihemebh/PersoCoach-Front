import AdminNav from 'components/Navbars/AdminNav'
import React, { Component } from 'react'
import VerticalNav  from './VerticalNav'
import { Navbar,Nav,NavDropdown,Form,FormControl,Button,NavLink, Container, Row, Col } from 'react-bootstrap'

export default class AdminPanel extends Component {
    render() {
        return (
           
             
             <>
               <Col xs="2" className="bg-danger">
                    <img src={require("assets/img/11.png").default} width="100" height="100"
></img>
               </Col>
               <Col xs="10"></Col>

              </>
         
        )
    }
}
