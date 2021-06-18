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
    


this.toggleModal();
console.log("endsaverequest");
};

showToast(){
 toast("You must be connected");
}
  handleValidSubmit(event, values) {

  
  }

  handleInvalidSubmit(event, errors, values) {
    this.setState({ name: values.name, error: true });
  }

  closeModal() {
    this.setState({ name: false, error: false });
  }

  async getuser(){
    const currentUser =  JSON.parse(localStorage.getItem("user"));
 
 
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
          
     
        <Button
              className="text-white"
              color="default"
            
              type="button"
              onClick={this.toggleModal}
        
            >
                Watch The Video
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
                  Activity
                </h5>
              </div>
              <div className="modal-body">
             <h6> Message From the Coach :</h6> {this.props.description}  
            {this.props.videoId}
             
            <video width="150" height="500" controls >
           <source src="C:/Users/rihem/Desktop/workout/video.mp4" type="video/mp4"/>
           </video>
             
               
                  
           
                
              </div>
            </Modal>
          </Col>
        </Row>
      </Container>
    );
  }
}
