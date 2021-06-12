import React from 'react'
import { AvForm, AvField } from 'availity-reactstrap-validation';
import   {Modal,Row , Col ,Container, Button, Form, Input, FormGroup , Label , FormText
} from "reactstrap";
export default class CoachModal extends React.Component{
constructor(props){
  super(props);
  this.state= {
    modal: false,
    name : "",

  }
}

   
     toggleModal = () => {
      this.setState({
       modal : !this.state.modal,})
    };

    handleValidSubmit(event, values) {
      this.setState({name: values.name});
    }
  
    handleInvalidSubmit(event, errors, values) {
      this.setState({name: values.name, error: true});
    }
  
    closeModal() {
      this.setState({name: false, error: false});
    }
  render(){
    return (
      
            
        <Container>
         
          <Row id="modals">
            <Col >
              
              {/* Button trigger modal */}
              <Button
                className="btn-round"
                color="warning"
                outline
                type="button"
                onClick={this.toggleModal}
              >
               Choose this Coach
              </Button>
              {/* Modal */}
              <Modal isOpen={this.state.modal} toggle={this.toggleModal}>
                <div className="modal-header">
                  <button
                    aria-label="Close"
                    className="close"
                    type="button"
                    onClick={this.toggleModal}
                  >
                    <span aria-hidden={true}></span>
                  </button>
                  <h5
                    className="modal-title text-center"
                    id="exampleModalLabel"
                  >
                    Subscribe
                  </h5>
                </div>
                <div className="modal-body">
                 <h6> Welcome to the journey</h6>
                  Once you fill this form  you will get a brief personalized program from the coach 
                  in 2 or 3 days  
                  
                   <br></br>
                   <br></br>
                  <small className="text-right text-danger">
                  * Required field
                  </small>
                </div>
              <div class="container">
<Container>
          <AvForm onValidSubmit={this.handleValidSubmit} onInvalidSubmit={this.handleInvalidSubmit}>
         <h6><AvField name="Name" label=" Name *" type="" required /></h6> 
          <h6><AvField name="age" label=" Age *" type="" required /></h6>
          <FormGroup>
        <Label for="exampleSelectMulti">Select Multiple</Label>
        <Input type="select" name="selectMulti" id="exampleSelectMulti" multiple>
          <option>Male</option>
          <option>2</option>
     
        </Input>
      </FormGroup>
         <h6><AvField name="weight" label=" Weight *" type="" required /></h6> 
         <h6><AvField name="height" label=" Height *" type="text" required /></h6> 
         <h6> <AvField name="goal" label=" Goal *" type="textarea" 
          placeholder="Example: I want to change my lifestyle / I want to loose weight ... " 
        
          required /></h6> 

         
        <br></br>
         
        <h6>  <AvField type="file" name="file" label="Upload a full picture of you" id="exampleFile" /></h6> 
        

         {/* <AvField type="radio"  name="radio1" required></AvField> <span> I accept all the terms and conditions *</span>
          */}
          
          <Container className="text-right"> 
       
          </Container> 
          <br></br>
          <div className="modal-footer">
            <div className="">
            <Button type="submit">Submit your request</Button>
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
            </Container>
                
                </div>  
           
              </Modal>

            </Col>
            </Row>
            </Container>
         
        
    )
}
}