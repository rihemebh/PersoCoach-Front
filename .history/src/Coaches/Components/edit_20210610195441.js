
import { AvForm, AvField } from "availity-reactstrap-validation";
import ProgramModal from "Programs/components/programModal";
import React, { Component } from "react";
import FontAwesome from "react-fontawesome";
import { Button, Col, Container, Modal, Row ,Table } from "reactstrap";

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
              <h5>Security</h5>
               <div className="form-inline ">    
               <h6 className="">
                   Email 
               <AvField  name="email"className="" type="email" label="" required style={{marginTop: "3px", marginRight: "20px"}}/>
            
                  
                      </h6>

                    <h6 className=""  >
                    Password 
                      <AvField  name="password" className="c"  type="password" label="" required style={{marginTop: "3px", marginRight: "20px"}} />
                      </h6>
                 <hr></hr>
                  { this.state.extra==true ?
                     <h6 className="text-white" style={{marginTop: "10px"}}  >
                        Extra <span className='text-danger'>*</span> 
                      <AvField  name="extra" className=""  type="textarea" label="" required style={{marginTop: "10px", marginRight: "20px"}} />
                      </h6>  :

                     <Button className="btn-round" onClick={()=>{this.setState({extra: true})}} style={{marginTop: "20px",marginLeft: "0px"}} > 
                      <FontAwesome className="fas fa-plus"></FontAwesome> </Button>
                       }
                      </div> 
                   <br></br>
                   {this.state.other ? <div class="form-inline">
                   
                  
                     
                    
                   <h6 className="text-white" style={{ marginBottom: "10px"}}>
                   Water / <small>Day</small> (L) <span className='text-danger'>*</span>
                    <small className="text-white"><AvField
                        name="other"
                        label= "Other :"
                        className="col-lg-12"
                         placeholder=""
                        type="number"
                        required
                        
                      /></small>  
                    </h6>
                  
                  
                  </div> : 
                        <h6 className="text-white">Water / <small>Day</small> (L) <span className="text-danger">*</span>
                      
                      
                      <AvField
                        type="select"
                        onChange={this.handleSelectChange}
                        name="water"
                        id="exampleSelect"
                        className="col-lg-12"
                        required
                     
                      >
                        <option>-- Not selected --</option>
                        <option value="1">1</option>
                        <option value="1.5">1.5</option>
                        <option value="2">2</option>
                        <option value="2.5">2.5</option>
                        <option value="3">3</option>
                        <option value="3.5">3.5</option>
                        <option value="other" 
                      >other</option>
                      </AvField>
                      </h6>
                    }
                   <div class="form-inline">
                   <h6 className="text-white">
                    Restrictions <span className='text-danger'>*</span>
                      <AvField
                        name="restrictions"
                        className="col-lg-12"
                         placeholder=""
                        type="text"
                        required
                        style={{marginTop: "5px", marginBottom: "10px"}}
                      />
                    </h6>
                    {/** <Button className="btn-round"  style={{marginTop: "10px",marginLeft: "10px"}} > 
                      <FontAwesome className="fas fa-plus"></FontAwesome> </Button>    */}  
                   </div>
                   <h6 className="text-white" >
                    <span style={{marginBottom: "50px"}}>Activity<span className='text-danger'>*</span> <br></br></span>  </h6>
                    <span  className="text-white"><AvField
                        name="video"
                        label="Upload a video"
                         placeholder=""
                         accept="video/*"
                        type="file"

                       
                        required
                        style={{marginTop: "5px", marginRight: "20px", marginBottom: "10px"}}
                         /> </span>  
                 <span  className="text-white">  <AvField
                      name="desc"
                      label= "Or describe it "
                         placeholder=""
                        type="textarea"
                        required
                        style={{marginTop: "5px", marginRight: "20px", marginBottom: "10px"}}
                      />  
                   </span> 
                
                      <div className="">
                        <Button type="submit" id={this.state.id} onValidSubmit={this.handleValidSubmit} >
                          Send the program
                        </Button>
                      </div>
                      <div className="">
           
                      </div>
                    
                 </AvForm>
       
                   
    </>
    );
  }
}
