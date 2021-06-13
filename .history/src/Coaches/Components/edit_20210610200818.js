
import { AvForm, AvField } from "availity-reactstrap-validation";
import ProgramModal from "Programs/components/programModal";
import React, { Component } from "react";
import FontAwesome from "react-fontawesome";
import { Button, Col, Container, Modal, Row ,Table, FormGroup } from "reactstrap";

export default class Edit extends Component {
  
  constructor(props){
    super(props);

    this.state= {
     
    }
  }

  render() {
   
    return (

                 
     <>
         <AvForm
                backgroundColor="white"
                    onValidSubmit={this.handleValidSubmit}
                    onInvalidSubmit={this.handleInvalidSubmit}
                  >
                      <h2 className="text-center" >Update your profile </h2>
            
              <hr></hr>
               <div className="form-inline ">    
               <h6 className="">
                   Email 
               <AvField  name="email"className="" type="email" label="" required style={{marginTop: "3px", marginRight: "20px"}}/>
            
                  
                      </h6>

                    <h6 className=""  >
                    Password 
                      <AvField  name="password" className="c"  type="password" label="" required style={{marginTop: "3px", marginRight: "20px"}} />
                      </h6>
               
            
                      </div> 
                 
                   <hr></hr>
                   <div className="form-inline ">    
               <h6 className="">
                   Full Name 
               <AvField  name="name"className="" type="text" label="" required style={{marginTop: "3px", marginRight: "20px"}}/>
            
                  
                      </h6>

                    <h6 className=""  >
                    Coche type 
                      <AvField  name="type" className="c"  type="text" label=""  style={{marginTop: "3px", marginRight: "20px"}} />
                      </h6>
                      
                      <FormGroup>
                      
                        <h6>Gender 
                   
                      <AvField
                        type="select"
                        name="select"
                        id="exampleSelect"
                        
                      >
                        <option>-- Not selected --</option>
                        <option>Male</option>
                        <option>Female</option>
                      </AvField>
                      </h6>
                    </FormGroup>
                      </div> 
                 
                   <hr></hr>
                   <h6 className=""  >
                   Description 
                      <AvField  name="type" className="c"  type="textarea" label=""  style={{marginTop: "3px", marginRight: "20px"}} />
                      </h6>
                      
                
                      <div className="">
                        <Button type="submit" id={this.state.id} onValidSubmit={this.handleValidSubmit} >
                          Update
                        </Button>
                      </div>
                      <div className="">
           
                      </div>
                    
                 </AvForm>
       
                   
    </>
    );
  }
}
