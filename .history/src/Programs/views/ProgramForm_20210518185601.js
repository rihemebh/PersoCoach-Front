import React, { Component } from "react";
import { AvForm, AvField } from "availity-reactstrap-validation";
import { 
  Alert,
  Button, 
  Card, 
  Form, 
  Input, 
  Container, 
  Row, 
  Col, 
  Label,
  FormGroup
  } from "reactstrap";

import ProfileNav from "components/Navbars/ProfileNav";
import DayForm from "Programs/components/DayForm";


export class ProgramForm extends Component{


    constructor(props){
        super(props);
        this.state={
            
        };
    }

 componentDidMount(){
    document.documentElement.classList.remove("nav-open");
    document.body.classList.add("register-page");
 }
 componentWillUnmount(){
    document.body.classList.remove("register-page");
 } 
componentDidUpdate(){
    document.body.classList.add("register-page");
}
    render(){
        document.documentElement.classList.remove("nav-open");
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
        <br></br>
        <Container>
          <Row>
            <Col className="ml-auto mr-auto" lg="10">
              <Card className="ml-auto mr-auto"  
                    style={{
                        background: "inherit",
                       backgroundColor: "rgba(255, 255, 255, .2)",
                      
                    borderRadius: "8px",
                    color: "black",
                    maxWidth: "1200px",
                    margin:" 20px 0 70px",
                    minHeight: "500px",
                    padding: "70px" ,
                    marginTop: "40",  
                    maxHeight: "100px"
                    overflow-y: "auto"}}>
                <h3 className="text-center text-white"><b>Detailed Program Form</b></h3>
                <br></br>
                
                 <DayForm day="1" />
                 <DayForm day="2" />
                 <DayForm day="3" />
                 <DayForm day="4" />
                 <DayForm day="5" />
              </Card>
             
            </Col>
          </Row>
        </Container>


        <div className=" register-footer text-center">
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