import React from "react";
import { AvForm, AvField } from "availity-reactstrap-validation";
import {
  Modal,
  Row,
  Col,
  Container,
  Button,
  Form,
  Input,
  FormGroup,
  Label,
  FormText,
} from "reactstrap";
import axios from "axios";
import { toast, ToastContainer,Zoom , Bounce } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default class CoachModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
   
    };
   
  }

  toggleModal = () => {
    this.setState({
      modal: !this.state.modal,
    });
  };




  handleValidSubmit(event, values) {

    this.setState(
      {
        name: values.name,
        age: values.age,
        gender: values.select,
        weight: values.weight,
        height: values.height,
        goal: values.goal,
        //pic: values.file,
        practice: values.select1,
      },
     ()=> this.saveRequest()
    );
  }

  handleInvalidSubmit(event, errors, values) {
    this.setState({ name: values.name, error: true });
  }

  closeModal() {
    this.setState({ name: false, error: false });
  }
  render() {
   
    return (
      <Container>
      
        <Row id="modals">
          <Col>
            <Button
              className="btn-round"
              color="secondary"
              outline
              type="button"
              onClick={this.toggleModal}
              
            >
                <div>
    
        <ToastContainer 
        draggable={false} 
        transition={Zoom}
        autoClose={4000}
        position="bottom-right"
        hideProgressBar={false}
        />
      </div>
              Send a brief program 
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
                <h5 className="modal-title text-center" id="exampleModalLabel">
                  Subscribe
                </h5>
              </div>
              <div className="modal-body"
               style={{ maxHeight: "calc(100vh - 210px)", overflowY: "auto" }}>
                <h6> Welcome</h6>
                Write your client a brief personalized program to give him an idea about your work 

                <br></br><br></br>
                <small className="text-right text-danger">
                  * Required field
                <br></br>
                </small>
                <br></br>
              
           
              <div className="container">
                <Container>
                  <AvForm
                    onValidSubmit={this.handleValidSubmit}
                    onInvalidSubmit={this.handleInvalidSubmit}
                  >
                    <h6>
                    Duration (N. Weeks) <span className='text-danger'>*</span>
                      <AvField name="name" type="text" required />
                    </h6>
                    <h6>
                    Activity Frequecy / Day (hours) <span className='text-danger'>*</span></h6>
                      <AvField name="age" type="number" placeholder="How many time he needs for exercies per dar ? " required />
                    
                    <FormGroup>
                      <Label for="exampleSelect">
                        <h6>Diet T<span className="text-danger">*</span></h6>
                      </Label>
                      <AvField
                        type="select"
                        name="select"
                        id="exampleSelect"
                        required
                      >
                        <option>-- Not selected --</option>
                        <option>Male</option>
                        <option>Female</option>
                      </AvField>
                    </FormGroup>
                    <h6>
                    Weight <span className='text-danger'>*</span>
                      <AvField
                        name="weight"
                     
                        type="number"
                        required
                      />
                    </h6>
                    <h6>
                    Height <span className='text-danger'>*</span>
                      <AvField
                        name="height"
                      
                        type="number"
                        required
                      />
                    </h6>
                    <FormGroup>
                      <Label for="exampleSelect1">
                        <h6>How often do you exercice ? <span className="text-danger">*</span></h6>
                      </Label>
                      <AvField
                        type="select"
                        name="select1"
                        id="exampleSelect1"
                        required
                      >
                        <option>-- Not selected --</option>
                        <option>Always</option>
                        <option>Sometimes</option>
                        <option>Rarely</option>
                        <option>Never</option>
                      </AvField>
                    </FormGroup>
                    <FormGroup>
                      <h6>
                      Goal <span className='text-danger'>*</span>
                        </h6>
                        <AvField
                          name="goal"
                        
                          type="textarea"
                          required
                        ></AvField>
                      <FormText>
                        Example: I want to change my lifestyle / I want to loose
                        weight ...
                      </FormText>
                    </FormGroup>
                    <br></br>

              {/*      <h6>
                      {" "}
                      <AvField
                        type="file"
                        name="file"
                        label="Upload a full picture of you"
                        id="exampleFile"
                      />
                    </h6>

                    {/* <AvField type="radio"  name="radio1" required></AvField> <span> I accept all the terms and conditions *</span>
                     */}
                          <div className="modal-footer">
                      <div className="">
                        <Button type="submit" onSubmit={this.handleValidSubmit} >
                          Submit your request
                        </Button>
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
                         </Container></div>
                
             
               
                  
           
                
              </div>
            </Modal>
          </Col>
        </Row>
      </Container>
    );
  }
}
