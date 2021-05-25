import React, { Component } from "react";

import { 
  Alert,
  Button, 
  Card, 
  Form, 
  Input, 
  Container, 
  Row, 
  Col, 
  } from "reactstrap";

import ProfileNav from "components/Navbars/ProfileNav";


export class ProgramForm extends Component{


    constructor(props){
        super(props);
        this.state={
            
        };
    }

   

    render(){
        return(
            <>
            <ProfileNav />
      <div
        className="page-header"
        style={{
          backgroundImage:
            "url(https://www.heart.org/-/media/healthy-living-images/fitness/runner_tying_shoe.jpg)",
        }}
      >
        <div className="filter" />
        <Container>
          <Row>
            <Col className="ml-auto mr-auto" lg="4">
              <Card className="ml-auto mr-auto" 
                    style={{backgroundColor: "#ffffff",
                    borderRadius: "8px",
                    color: "black",
                    maxWidth: "350px",
                    margin:" 20px 0 70px",
                    minHeight: "500px",
                    padding: "30px" }}>
               
                <img  className="mx-auto" src={require("assets/img/Perso.png").default} alt="user.img" width="250px" height="128px"></img>
            


            
               
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



export default ProgramForm