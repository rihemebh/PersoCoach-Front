import React from 'react'
import { AvForm, AvField } from 'availity-reactstrap-validation';
import   {Modal,Row , Col ,Container, Button, Form, Input, FormGroup , Label , FormText
} from "reactstrap";
export default class CoachModal extends React.Component{
constructor(props){
  super.props
}

    const [modal, setModal] = React.useState(false);
    const toggleModal = () => {
      setModal(!modal);
    };
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
                onClick={toggleModal}
              >
               Choose this Coach
              </Button>
              {/* Modal */}
              <Modal isOpen={modal} toggle={toggleModal}>
                <div className="modal-header">
                  <button
                    aria-label="Close"
                    className="close"
                    type="button"
                    onClick={toggleModal}
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
                  Once you fill this form with your real data you will get a brief personalized program from the coach 
                  in 2 or 3 days  
                   <br></br>
                   <br></br>
                  <small className="text-right text-secondary">Don't worry Your data is totally secure</small>
                </div>
              <div class="container">
<Container>
<AvForm onValidSubmit={this.handleValidSubmit} onInvalidSubmit={this.handleInvalidSubmit}>
          <AvField name="Name" label=" name" type="" required />
        
        </AvForm>
              <Form>
        <FormGroup>
          <Label for="exampleEmail">Name *</Label>
          <Input  id="exampleEmail" required="required" placeholder="Enter you name" />
        </FormGroup>
        <FormGroup>
          <Label for="age">Age *</Label>
          <Input  id="age" placeholder="Enter your age" />
        </FormGroup>
        <FormGroup>
          <Label for="weight">Weight *</Label>
          <Input id="weight" placeholder="Enter weight" />
        </FormGroup>
        <FormGroup>
          <Label for="height">Height *</Label>
          <Input id="height" placeholder="Enter weight" />
        </FormGroup>

        { /*  <FormGroup>
          <Label for="exampleSelect">Age</Label>
          <Input type="select" name="select" id="exampleSelect">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Input>
        </FormGroup>
        <FormGroup>
          <Label for="exampleSelectMulti">Select Multiple</Label>
          <Input type="select" name="selectMulti" id="exampleSelectMulti" multiple>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Input>
        </FormGroup>*/}
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
                      onClick={toggleModal}
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
