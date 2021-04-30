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
                    <span aria-hidden={true}>×</span>
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
                  <small className="text-right text-secondary">Don't worry Your data is totally secure</small>
                </div>
              <div class="container">
<Container>
          <AvForm onValidSubmit={this.handleValidSubmit} onInvalidSubmit={this.handleInvalidSubmit}>
          <AvField name="Name" label=" Name *" type="" required />
          <AvField name="age" label=" Age *" type="" required />
          <AvField name="weight" label=" Weight *" type="" required />
          <AvField name="height" label=" Height *" type="text" required />
          <AvField name="goal" label=" Goal *" type="textarea" A required />
          <Label for="exampleFile">Upload a full picture of you </Label>
          <AvField type="file" name="file" id="exampleFile" />
          <FormText color="muted"></FormText>
        </AvForm>
              <Form>
       

        
        <FormGroup>
          <Label for="exampleText"> What is your goal ? *</Label>
          <Input type="textarea" name="text" id="exampleText"
           placeholder="Explain briefly why you want to have a peersonalize program " />
        </FormGroup>
        <FormGroup>
          <Label for="exampleFile">Upload a full picture of you </Label>
          <Input type="file" name="file" id="exampleFile" />
          <FormText color="muted">
            
          </FormText>
        </FormGroup>
        <FormGroup tag="fieldset">
      { /*   <legend>Still one more thing</legend>*/}
          <FormGroup check>
            <Label check>
              <Input type="radio" name="radio1" />{' '}
              <span> I accept all the terms and conditions</span> 
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="radio1" />{' '}
              <span> I accept all the terms and conditions</span> 
            </Label>
          </FormGroup>
          
        </FormGroup>
<Container className="text-right">
<Button >Submit</Button>
</Container>
        
        <br></br>
      </Form>
      </Container>
                
                </div>  
                <div className="modal-footer">
                  <div className="left-side">
                    <Button
                      className="btn-link"
                      color="default"
                      type="button"
                      onClick={this.toggleModal}
                    >
                      Back
                    </Button>
                  </div>
                  <div className="divider" />
                {/** <div className="right-side">
                    <Button className="btn-link" color="danger" type="button">
                      Delete
                    </Button>
                  </div> */}  
                </div>
              </Modal>

            </Col>
            </Row>
            </Container>
         
        
    )
}
}