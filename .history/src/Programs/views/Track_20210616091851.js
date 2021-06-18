import React, { Component } from 'react'
import ProfileNav from "components/Navbars/ProfileNav";
import { 
  Alert,
  Button, 
  Card, 
  Form, 
  Input, 
  Container, 
  Row, 
  Col, 
  NavLink} from "reactstrap";
  import AuthNav from "components/Navbars/AuthNav";
import { Link } from "react-router-dom";
//import AuthService from "./AuthService";
import { Redirect } from "react-router-dom";




export default class Track extends Component {
  
  componentDidMount(){
    document.documentElement.classList.remove("nav-open");
    document.body.classList.add("register-page");
 }
 componentWillUnmount(){
    document.body.classList.remove("register-page");
 } 
componentDidUpdate(){
    console.log(this.state.nbForm);
    document.body.classList.add("register-page");
}

    render() {
        return (
            <>
                  <ProfileNav />
      <div
        className="page-header"
        style={{
            //opacity: 0.8,
         // backgroundColor: "rgba(0, 0, 0, 0.9)",
          backgroundImage:
            "url(https://www.heart.org/-/media/healthy-living-images/fitness/runner_tying_shoe.jpg)",
        }}
      >
        
        <div className="filter" />
        <Container>
          <Row>
            <Col className="ml-auto mr-auto" lg="4">
              <Card className="ml-auto mr-auto" 
                    style={{
                    backgroundColor: "rgba(255, 255, 255, .2)",
                    borderRadius: "8px",
                    minWidth: "1550px",
                    margin:" 20px 0 70px",
                    minHeight: "500px",
                    overflowY: "auto",
                    overflowX: "auto",
                    padding: "30px" }}>
               
               
            
    

             
              </Card>
            </Col>
          </Row>
        </Container>
        <div className="footer register-footer text-center">
          <h6>
            © {new Date().getFullYear()}, made with{" "}
            <i className="fa fa-heart heart" /> by PersoCoach Team          </h6>
        </div>
        
        
        </div> 


            </>
        )
    }
}
