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
      user: JSON.parse(localStorage.getItem("user")), 
    };
  
   
  }

  toggleModal = () => {
    this.setState({
      modal: !this.state.modal,
    });
  };




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
          
         :  <Button
              className="btn-round"
              color="link"
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
             View Program details
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
                  Brief program
                </h5>
              </div>
              <div className="modal-body"
               style={{ maxHeight: "calc(100vh - 210px)", overflowY: "auto" }}>
              
               
             
            
           
           
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
                        
                       
                         </div>
                
             
               
                  
           
                
              </div>
            </Modal>
          </Col>
        </Row>
      </Container>
    );
  }
}
