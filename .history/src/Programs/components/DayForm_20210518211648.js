import { AvForm, AvField } from "availity-reactstrap-validation";
import React, { Component } from "react";
import FontAwesome from "react-fontawesome";
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
class DayForm extends Component {
    state = { nb : this.props.day }
    render() { 
        return ( <>
<hr></hr>
                <h6 className="text-center text-white"><b>Day {this.props.day}</b></h6>
                <br></br>
                <AvForm className
                backgroundColor="white"
                    onValidSubmit={this.handleValidSubmit}
                    onInvalidSubmit={this.handleInvalidSubmit}
                  >
                         
                    <h6 className="text-white">
                    Program Name  </h6>
                      <AvField name="name" type="text"  />
                  
                      
                    <h6 className="text-white">
                    Complexity <span className='text-danger'>*</span>  </h6>
                      <AvField name="duration" type="number" required />
                  

                   
                    <FormGroup>
                      <Label for="exampleSelect">
                        <h6 className="text-white">Diet Type<span className="text-danger">*</span></h6>
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
                    <h6 className="text-white">
                    Description <span className='text-danger'>*</span>
                      <AvField
                        name="desc"
                         placeholder="Give you client some delais about this program"
                        type="textarea"
                        required
                      />
                    </h6>
               
                
                      <div className="">
                        <Button type="submit" onValidSubmit={this.handleValidSubmit} >
                          Send the program
                        </Button>
                      </div>
                      <div className="">
           
                      </div>
                    
                 </AvForm>
                 <br></br>
                 

        </> 
            
            
            );
    }
}
 
export default DayForm;