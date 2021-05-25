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
                      <AvField  name="lunch" className="col-lg-11"  type="textarea" label="" required style={{marginTop: "3px", marginRight: "20px"}} />
                      </h6>
                 
                      <h6 className="text-white"  >
                    Dinner <span className='text-danger'>*</span> 
                      <AvField  name="dinner" className="col-lg-12"  type="textarea" label="" required style={{marginTop: "3px", marginRight: "20px"}} />
                      </h6>
                      <h6 className="text-white"  >
                    Extra <span className='text-danger'>*</span> 
                      <AvField  name="extra" className="col-lg-12"  type="textarea" label="" required style={{marginTop: "3px", marginRight: "20px"}} />
                      </h6> 
                      <Bu
                      </div> 
                   <br></br>
                    
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