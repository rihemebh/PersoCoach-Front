
import { AvForm, AvField } from "availity-reactstrap-validation";
import ProgramModal from "Programs/components/programModal";
import React, { Component } from "react";
import FontAwesome from "react-fontawesome";
import { Button, Col, Container, Modal, Row ,Table, FormGroup } from "reactstrap";
import Experience from "Coaches/Components/Experience";

export default class Edit extends Component {
  
  constructor(props){
    super(props);

    this.state= {
        experience: 0,
    }

    this.addExp = this.Exp.bind(this);
  }

  addExp(){
    this.setState({experience : this.state.experience+1});
  }

  render() {
   var experiences = [];
   for(let i =0; i< this.state.experience; i++){
     experiences.push(<Experience add={this.handleExp} />);
   }
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
               <AvField  name="email" className="" type="text" label=""  style={{marginTop: "3px", marginRight: "20px"}}/>
            
                  
                      </h6>

                    <h6 className=""  >
                    Password 
                      <AvField  name="password" className="c"  type="password" label=""  style={{marginTop: "3px", marginRight: "20px"}} />
                      </h6>
               
            
                      </div> 
                 
                   <hr></hr>
                   <div className="form-inline ">    
               <h6 className="">
                   Full Name 
               <AvField  name="name"className="" type="text" label=""  style={{marginTop: "3px", marginRight: "20px"}}/>
            
                  
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
                      <AvField  name="desc" className="c"  type="textarea" label=""  style={{marginTop: "3px", marginRight: "20px"}} />
                      </h6>
                      <h5> Acadamic Experience </h5>

                      {/** for each nkharej exp l kdom  */}

                      
                      
                 
                        {experiences}
                        <Button className="btn-round" onClick={this.addExp} style={{marginTop: "20px",marginLeft: "0px"}} > 
                      <FontAwesome className="fas fa-plus"></FontAwesome> Add another experience </Button>
                 
                    
                 
                
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
