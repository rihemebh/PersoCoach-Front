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
import { Table } from "react-bootstrap";


export default class Areyousure extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: [],
      editedName : false,
    
      editedBio : false,
      editedPwd : false,
     
    };
   
    this.showtoastSuccess=this.showtoastSuccess.bind(this);
    this.handleValidSubmit = this.handleValidSubmit.bind(this);
    this.handleInvalidSubmit = this.handleInvalidSubmit.bind(this);
  

  }

  toggleModal = () => {
    this.setState({
      modal: !this.state.modal,
    });
  };

   showtoastSuccess = ()=>{
     return toast("Wow so easy!");
   }
   
   showtoastFail = ()=>{
    return toast("Wow so easy!");
   }
  
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


 
      
   
  };
  
  render() {
   
    console.log(this.state)

    //console.log(this.state.userInfo)
    return (
      <Container>
      
        <Row id="modals">
          <Col>
            {/* Button trigger modal */}
            <Button
              className="btn-round"
              color="danger"
            outline
              type="button"
              onClick={this.toggleModal}
              
            >
                 <FontAwesome
                                  className="fas fa-trash"
                                  style={{ fontSize: "1rem" }}
                                ></FontAwesome>
               
 
            
            </Button>
            {/* Modal */}
            <Modal  className="bg-danger" isOpen={this.state.modal} toggle={this.toggleModal}>
              <div className="modal-header">
                <button
                  aria-label="Close"
                  className="close"
                  type="button"
                  onClick={this.toggleModal}
                >
                  <span aria-hidden={true}></span>
                </button>
                <h5 className="modal-title text-white text-center" id="exampleModalLabel">
             Are you sure you want to delete this user ?      
                </h5>
              </div>
              <div className="modal-footer"
               >
              
              
                  <Button>
           
                
              </div>
            </Modal>
          </Col>
        </Row>
      </Container>
    );
  }
}
