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
      id: this.props.id,
      response: "",
      modal: false,
      name: "",
      gender: "",
      goal: "",
      age: 0,
      height: 0.0,
      weight: 0.0,
      pic: null,
      practice: "",
      disabled : this.props.disabled,
    };
    //this.showtoastSuccess=this.showtoastSuccess.bind(this);
    this.handleValidSubmit = this.handleValidSubmit.bind(this);
    this.handleInvalidSubmit = this.handleInvalidSubmit.bind(this);
  }

  toggleModal = () => {
    this.setState({
      modal: !this.state.modal,
    });
  };

  saveRequest =  async () => {

    const currentUser =  JSON.parse(localStorage.getItem("user"));
    axios.put(
      "http://localhost:3000/catalog/coach/" +
        this.props.id +
        "?gender=" +
        this.state.gender +
        "&goal=" +
        this.state.goal +
        "&age=" +
        this.state.age +
        "&height=" +
        this.state.height +
        "&weight=" +
        this.state.weight +
        "&c=" +
        currentUser.id +
        "&practice=" +
        this.state.practice
    ).then(function (response) {
      const notify = () => toast.success("Your request was successfully sent !");
      notify();
      console.log(response);
    })
    .catch(function (error) {
      const notify = () => toast.error("We can't send your submission !");
      notify();
      console.log(error);
    });


this.toggleModal();
console.log("endsaverequest");
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

  async getuser(){
    const currentUser =  JSON.parse(localStorage.getItem("user"));
 
  //  const API_URL_AUTH = "http://localhost:8080/api/auth/";
const API_URL_USER = "http://localhost:8080/api/user/";
    const response =  await axios.get(API_URL_USER + "id/" + currentUser.id, {
        headers: {
            'Authorization': 'Bearer ' + currentUser.accessToken
         }
        });
    return response.data;
 
   
  }
   render() {
    
    const currentUser =  JSON.parse(localStorage.getItem("user"));
 
    return (
      <Container>
      
        <Row id="modals">
          <Col>
          
          {this.state.disabled == false :}
           
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
                <h6> Welcome to the journey</h6>
                Once you fill this form you will get a brief personalized
                program from the coach in 2 or 3 days
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
                    Name <span className='text-danger'>*</span>
                      <AvField name="name" type="text" required />
                    </h6>
                    <h6>
                    Age <span className='text-danger'>*</span></h6>
                      <AvField name="age" type="number" required />
                    
                    <FormGroup>
                      <Label for="exampleSelect">
                        <h6>Gender <span className="text-danger">*</span></h6>
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
                        <Button type="submit" onValidSubmit={this.handleValidSubmit} >
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
