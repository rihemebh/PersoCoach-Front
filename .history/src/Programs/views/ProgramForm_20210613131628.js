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
import ProgramNav from "components/Navbars/ProgramNav";


export class ProgramForm extends Component{


    constructor(props){
        super(props);
        this.state={
            nbForm: 1,
            name: "no name",
            

        };
        this.changeNbForm = this.changeNbForm.bind(this);
    }
changeNbForm(i){
    var j = i-1;

    
 i == this.state.nbForm ? this.setState({
     
    nbForm : this.state.nbForm - 1,
}):
  this.setState({
     
      nbForm : i-1,
  })
    
}
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
add(){
    this.setState({
        nbForm : this.state.nbForm+1,
    });
}


    render(){
      console.log(this.props.location.request);
        var forms = []
        for(var i=0; i<this.state.nbForm;i++){
            forms.push( <DayForm day={i+1} clearDay={this.changeNbForm} name={this.state.name} id:request={this.props.location.request} />);
        }
      
     
        document.documentElement.classList.remove("nav-open");
        return(
            <>
            <ProgramNav />
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
                    maxHeight: "800px",
                    overflowY: "auto"}}>
                <h3 className="text-center text-white"><strong>Detailed Program Form</strong></h3>
                <br></br>
               
                <p className="text-danger">*Required</p>
                 
             {/** <h6 className="text-white"  >
                    Program Name 
                      <Input  name="name" type="text" label=""  />
                      </h6>*/}   
               {forms}
              
               
                {/** <DayForm day="2" />
                 <DayForm day="3" />
                 <DayForm day="4" />
                 <DayForm day="5" />*/} 

                    <Row>
                         <Col></Col>
                         <Col sx=""><Button className="radius btn-round " outline onClick={this.add.bind(this)}> 
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