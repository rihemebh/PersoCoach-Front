import AdminNav from "components/Navbars/AdminNav";
import React, { Component } from "react";
import VerticalNav from "./VerticalNav";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
  NavLink,
  Container,
  Row,
  Col,
  NavItem,
  NavbarBrand,
  Table
} from "react-bootstrap";
import AuthService from "Authentification/AuthService";
import FontAwesome from 'react-fontawesome'
import { Link } from "react-router-dom";


export default class AdminPanel extends Component {
constructor(props){
  super(props);
  this.state={
    coaches: false,
    clients: true,
    reviews: false
  }
}
componentDidMount(){

}
   onSignOut = () => {
    AuthService.logout();
    this.props.history.push({pathname: '/login'}); 
    } 
    addCoach(){

    }
  render() {
    return (
      <>
        <Col xs="3"  style={{backgroundColor:'#D5EDF2', height: "800px"}}>
        <NavItem className="text-center ">
        <NavbarBrand
            data-placement="bottom"
            to="/index"
            target="_blank"
            title="PersoCoach"
            tag={Link}
          >
          
          <img
            src={require("assets/img/persoo.png").default}
            width="300"
            height="200"
          ></img>
         </NavbarBrand> 
 </NavItem>
        <br />
        <NavItem className="text-center ">
              <a href="/index" tag={Link} className="text-secondary"  >
           <h6>Home</h6> 
              </a>
            </NavItem>
            
            <NavItem className="text-center ">
              <a href="/Coaches" tag={Link} className="text-secondary"  style={{margin: "5px"}} >
           <h6>Catalog</h6> 
              </a>
            </NavItem>
            <NavItem className="text-center ">
              <NavLink  className="text-secondary" onClick={this.addCoach.bind(this)}>
           <h6>Coaches Manager</h6> 
              </NavLink>
            </NavItem>
            
  

            <NavItem className="text-center ">
              <NavLink to="/index" className="text-secondary" >
           <h6>Clients Manager</h6> 
              </NavLink>
            </NavItem>
            <NavItem className="text-center ">
              <NavLink to="/index" className="text-secondary" >
           <h6>Reviews Manager</h6> 
              </NavLink>
            </NavItem>
            <br></br>
            <NavItem  className="text-center ">
                
                  <Button className="btn-round btn-outline-danger" >
                    <FontAwesome className="far fa-cog"/> settings
                  </Button>
             
              </NavItem>
              <br></br>
            <NavItem  className="text-center ">
                
                  <Button className="btn-round btn-danger" outline type="button">
                    <FontAwesome className="far fa-sign-out"/> Sign out  
                  </Button>
             
              </NavItem>
        </Col>
        <Col xs="9">
{this.state.users == true ? 
<Table>
<thead>
  <tr>
    <th>
      
    </th>
    <th>
      Name
    </th>
    <th>
      
  </tr>
</thead>
  </Table>
:<></>}


        </Col>
      </>
    );
  }
}
