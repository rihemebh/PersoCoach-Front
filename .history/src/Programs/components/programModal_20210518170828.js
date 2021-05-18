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

export default class ProgramModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        duration : 0,
        frequency:0,
        DietType: "",
        descritpion: "",
    };
    this.handleValidSubmit = this.handleValidSubmit.bind(this);
    this.handleInvalidSubmit = this.handleInvalidSubmit.bind(this);
  }
  saveRequest =  () => {
    console.log(this.props.id);
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
            "&pic=" +
            this.state.pic +
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
    }    
    handleValidSubmit(event, values) {

        this.setState(
          {
            duration : values.duration,
            frequency: values.freq,
            DietType: "",
            descritpion: "",
          },
         ()=> this.saveRequest()
        );
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
              color="info"
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
                  Program
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
                      <AvField name="age" type="number" placeholder=" " required />
                    
                    <FormGroup>
                      <Label for="exampleSelect">
                        <h6>Diet Type<span className="text-danger">*</span></h6>
                      </Label>
                      <AvField
                        type="select"
                        name="select"
                        id="exampleSelect"
                        required
                      >
                        <option>-- Not selected --</option>
                        <option>Low-calorie</option>
                        <option>Low-carbohydrate</option>
                        <option>Low-fat</option>
                        <option>Detox</option>
                        <option>Fasting</option>
                        <option>Keto</option>
                      </AvField>
                    </FormGroup>
                    <h6>
                    Description <span className='text-danger'>*</span>
                      <AvField
                        name="desc"
                     placeholder="Give you client some delais about this program"
                        type="textarea"
                        required
                      />
                    </h6>
               
                   
                          <div className="modal-footer">
                      <div className="">
                        <Button type="submit" onSubmit={this.handleValidSubmit} >
                          Send the program
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