import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useParams,
  } from "react-router-dom";
  import { Navbar,Nav,NavDropdown,Form,FormControl,Button } from 'react-bootstrap'
 

class VerticalNav extends React.Component{

    render(){
        return(
            <>
               <Nav vertical>
        <NavLink href="#">foo</NavLink>
        <NavLink href="#">bar</NavLink>
        <NavLink href="#">baz</NavLink>
        <NavLink disabled href="#">
          disabled
        </NavLink>
      </Nav>
            </>
        )  
    }
}

export default VerticalNav;