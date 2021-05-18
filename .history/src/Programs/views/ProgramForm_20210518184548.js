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
                    marginTop: "40"}}>
                <h3 className="text-center text-white"><b>Detailed Program Form</b></h3>
                <br></br>
                <br></br>
                Day 1
                <AvForm backgroundColor="white"
                    onValidSubmit={this.handleValidSubmit}
                    onInvalidSubmit={this.handleInvalidSubmit}
                  >
                    <h6 className="text-white">
                    Complexity <span className="text-light"> (Weeks) </span><span className='text-danger'>*</span>  </h6>
                      <AvField name="duration" type="text" required />
                  

                   
                    <FormGroup>
                      <Label for="exampleSelect">
                        <h6>Diet Type<span className="text-danger">*</span></h6>
                      </Label>
                      <AvField
                        type="select"
                        name="DietType"
                        id="exampleSelect"
                        required
                      >
                        <option>-- Not selected --</option>
                        <option>Low-calorie</option>
                        <option>Low-carbohydrate</option>
                        <option>Low-fat</option>
                        <option>Detox</option>
                        <option>Fasting</option>
                        <option>Keto</option>
                      </AvField>
                    </FormGroup>
                    <h6>
                    Description <span className='text-danger'>*</span>
                      <AvField
                        name="desc"
                         placeholder="Give you client some delais about this program"
                        type="textarea"
                        required
                      />
                    </h6>
               
                   
                          <div className="modal-footer">
                      <div className="">
                        <Button type="submit" onValidSubmit={this.handleValidSubmit} >
                          Send the program
                        </Button>
                      </div>
                      <div className="">
                        <Button
                          className="btn-link"
                          color="default"
                          type="button"
                          onClick={this.toggleModal}
                        >
                          Back
                        </Button>
                      </div>
                    </div>
                 </AvForm>
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