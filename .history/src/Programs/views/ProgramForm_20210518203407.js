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
import FontAwesome from "react-fontawesome";


export class ProgramForm extends Component{


    constructor(props){
        super(props);
        this.state={
            nbForm: 1,

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
add(){
    this.state({
        nbForm : this.state.nbForm+1,
    });
}
    render(){
        var forms 
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
                    maxHeight: "700px",
                    overflowY: "auto"}}>
                <h3 className="text-center text-white"></h3><strong>Detailed Program Form</strong>
                <br></br>
               
                 <DayForm day="1" />
                 
               
              
               
                {/** <DayForm day="2" />
                 <DayForm day="3" />
                 <DayForm day="4" />
                 <DayForm day="5" />*/} 

                    <Row>
                         <Col></Col>
                         <Col sx=""><Button className="radius btn-round " outline onClick={this.addform.bind(this)}> 
                 <FontAwesome className="fas fa-plus"></FontAwesome>Add another day program</Button></Col>
                 <Col></Col>
                     </Row>
                 
              </Card>
             
            </Col>
          </Row>
        </Container>


        <div className=" register-footer text-center">
          <h6>
            ?? {new Date().getFullYear()}, made with{" "}
            <i className="fa fa-heart heart" /> by PersoCoach Team          </h6>
        </div>
      </div>

            </>
        
        )
    }

}



export default ProgramForm