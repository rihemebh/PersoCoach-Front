import React from 'react'
import   {Modal,Row , Col ,Container, Button, Form, Input, FormGroup , Label , FormText
} from "reactstrap";
export default function CoachModal() {
    const [modal, setModal] = React.useState(false);
    const toggleModal = () => {
      setModal(!modal);
    };
  
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
              <Form>
        <FormGroup>
          <Label for="exampleEmail">Name</Label>
          <Input type="" name="email" id="exampleEmail" placeholder="Enter you name" />
        </FormGroup>
        <FormGroup>
          <Label for="age">Age</Label>
          <Input  id="age" placeholder="Enter your age" />
        </FormGroup>
        <FormGroup>
          <Label for="weight">Weight</Label>
          <Input id="weight" placeholder="Enter weight" />
        </FormGroup>
        <FormGroup>
          <Label for="height">Height</Label>
          <Input id="height" placeholder="Enter weight" />
        </FormGroup>

        <FormGroup>
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
        </FormGroup>
        <FormGroup>
          <Label for="exampleText"> What is your goal ?</Label>
          <Input type="textarea" name="text" id="exampleText" placeholder="Explain briefly why you want to have a peersonalize program " />
        </FormGroup>
        <FormGroup>
          <Label for="exampleFile">upload a photo </Label>
          <Input type="file" name="file" id="exampleFile" />
          <FormText color="muted">
            
          </FormText>
        </FormGroup>
        <FormGroup tag="fieldset">
          <legend>Still one more thing</legend>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="radio1" />{' '}
              I accept all the terms and conditions
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="radio1" />{' '}
              I 
            </Label>
          </FormGroup>
          
        </FormGroup>

        <Button className="text-center">Submit</Button>
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
