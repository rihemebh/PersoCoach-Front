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
                <AvForm
                backgroundColor="white"
                    onValidSubmit={this.handleValidSubmit}
                    onInvalidSubmit={this.handleInvalidSubmit}
                  >
                             <h6 className="text-white"  >
                    Program Name <span className='text-danger'>*</span> 
                      <AvField  name="complexity" type="number" label="" required />
                      </h6>
                          <h6 className="text-white"  >
                    Complexity <span className='text-danger'>*</span> 
                      <AvField  name="complexity" type="number" label="" required />
                      </h6>
                       <h5 className="text-white">Meals</h5>
               <div className="form-inline ">    
               <h6 className="text-white">
                   Breakfast<span className='text-danger'>*</span> 
               <AvField  name="breakfast"className="" type="textarea" label="" required style={{marginTop: "3px", marginRight: "20px"}}/>
              {/** <AvField  name="breakfast"className="" type="" label="" required style={{marginTop: "3px", marginRight: "20px"}}/>
               <AvField  name="breakfast"className="" type="" label=""   style={{marginTop: "3px", marginRight: "20px"}} />*/} 
                  
                      </h6>

                    <h6 className="text-white"  >
                    Lunch <span className='text-danger'>*</span> 
                      <AvField  name="lunch" className="c"  type="textarea" label="" required style={{marginTop: "3px", marginRight: "20px"}} />
                      </h6>
                 
                      <h6 className="text-white"  >
                    Dinner <span className='text-danger'>*</span> 
                      <AvField  name="dinner" className=""  type="textarea" label="" required style={{marginTop: "3px", marginRight: "20px"}} />
                      </h6>
                    {/**  <h6 className="text-white" style={{marginTop: "10px"}}  >
                  Extra <span className='text-danger'>*</span> 
                      <AvField  name="extra" className=""  type="textarea" label="" required style={{marginTop: "10px", marginRight: "20px"}} />
                      </h6>  */}   
                      <Button className="btn-round" style={{marginTop: "20px",marginLeft: "0px"}} > 
                      <FontAwesome className="fas fa-plus"></FontAwesome> </Button>
                      </div> 
                   <br></br>
                   <FormGroup>
                      <Label for="exampleSelect">
                        <h6 className="text-white">Water / <small>Day</small> (L) <span className="text-danger">*</span></h6>
                      </Label>
                      <AvField
                        type="select"
                        name="water"
                        id="exampleSelect"
                        required
                      >
                        <option>-- Not selected --</option>
                        <option>1</option>
                        <option>1.5</option>
                        <option>2</option>
                        <option>2.5</option>
                        <option>3</option>
                        <option>3.5</option>
                        <option>other</option>
                      </AvField>
                    </FormGroup>
                   
                   <FormGroup></FormGroup>
                    
                
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