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
import authHeader from "Authentification/AuthHeader";
import FontAwesome from "react-fontawesome";


export default class CreateCoach extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      coach: {
          email: "",
          username: "",
          password: "",
      },
     
    };
   
  
    this.handleValidSubmit = this.handleValidSubmit.bind(this);
    this.handleInvalidSubmit = this.handleInvalidSubmit.bind(this);
  

  }

  toggleModal = () => {
    this.setState({
      modal: !this.state.modal,
    });
  };

*
  /*async componentDidMount(){
    this.setState({
      userInfo: this.props.currentUserInfo
    })
  }*/



  handleInvalidSubmit(event, errors, values) {
    this.setState({ name: values.name, error: true });
  }

  closeModal() {
    this.setState({ name: false, error: false });
  }

  async handleValidSubmit(e, values) {
 const coach = {
     username: values.name,
     email: values.email,
     password: values.password,
 }


  
  
      await axios.post(
    
        
              "http://localhost:8080/api/admin/coach/new?name="+values.name+"&type="+values.type+"&gender="+values.gender
               , {
                username: values.username,
                email: values.email,
                password: values.password,
            }
             
            ).then(
              response => {
                console.log(response);
          
                const notify = () => toast.success("the coach was successfully created !");
                notify();
               
                window.location.reload();
              }
            )
            .catch(
              error => {
                const notify = () => toast.error("Failed to create the coach !");
                notify();
                console.log(error)
              }
            );  
                 
    
   
    

    this.toggleModal();
      
   
  };
  
  render() {
   
  

    //console.log(this.state.userInfo)
    return (
      <Container>
      
        <Row id="modals">
          <Col>
            {/* Button trigger modal */}
            <Button className="" color="default" outline
            onClick={this.toggleModal}
            >
                              <FontAwesome className=" fa-plus"></FontAwesome>

Create a coach
                             
                <div>
    
        <ToastContainer 
        draggable={false} 
        transition={Zoom}
        autoClose={4000}
        position="bottom-right"
        hideProgressBar={false}
        />
      </div>
            
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
              Create a new Coach        
                </h5>
              </div>
              <div className="modal-body"
               style={{ maxHeight: "calc(100vh - 210px)", overflowY: "auto" }}>
              
                <div class="container">
                <Container>
                
                  <AvForm onValidSubmit={this.handleValidSubmit}>
               
                  
                    <h6>
                        {" "}
                        <AvField
                          name="email"
                          label="Email *"
                          type="email"
                        
                          required
                          />

                      </h6>
              

                    <h6>
                      <AvField 
                          name="password" 
                          label="Password *" 
                          type="password" 
                          required
                        
                         />

                    </h6>
                    <h6>
                      <AvField 
                          name="username" 
                          label="username *" 
                          type="text" 
                          required
                          
                    />
                    </h6>
                    <h6>
                      <AvField 
                          name="name" 
                          label="Name *" 
                          type="text" 
                          required
                          
                    />
                    </h6>
                    <FormGroup>
              <h6>
             
                <AvField
                  type="select"
                  label="Type *"
                  name="type"
                  required
                  id="select"
                  onChange={(e) => this.setState({ gender: e.target.value })}
                >
                  <option value="none" hidden>
                    --Not Selected--
                  </option>
                  <option value="Man">Sport</option>
                  <option value="Women">Nutrition</option>
                </AvField>
              </h6>
            </FormGroup>
                    <FormGroup>
              <h6>
             
                <AvField
                  type="select"
                  label="Gender *"
                  name="gender"
                  required
                  id="select"
                  onChange={(e) => this.setState({ gender: e.target.value })}
                >
                  <option value="none" hidden>
                    --Not Selected--
                  </option>
                  <option value="Man">Male</option>
                  <option value="Women">Female</option>
                </AvField>
              </h6>
            </FormGroup>
            
                    <br></br>

                         
                    <Container className="text-right"></Container>
                    <br></br>
             
                    <div className="modal-footer">
                      <div className=""></div>
                      <FormGroup>
                        <Button type="submit" >
                          Create
                        </Button>
                        </FormGroup>
                    
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
                  
           
                
              </div>
            </Modal>
          </Col>
        </Row>
      </Container>
    );
  }
}
