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


export default class ProfileSettingsModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: [],
      editedName : false,
      name: this.props.currentUserInfo.name,
      editedBio : false,
      description: this.props.currentUserInfo.description,
      editedPwd : false,
      pwd: this.props.currentUserInfo.password
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


    console.log(values)
    if(!this.state.editedPwd){
  
     
    this.toggleModal();
      
   
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
              
            ><i className="fa fa-cog" /> Settings         
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
                <i className="fa fa-cog" /> Settings       
                </h5>
              </div>
              <div className="modal-body"
               style={{ maxHeight: "calc(100vh - 210px)", overflowY: "auto" }}>
              
                <div class="container">
                <Container>
                
                  <AvForm onValidSubmit={this.handleValidSubmit}>
                    <h6>
                      <AvField 
                          name="name" 
                          label=" Name *" 
                          type="text" 
                          value={this.props.currentUserInfo.name} 
                          
                    />
                    </h6>
              
                    <FormGroup>
                      <h6>
                        {" "}
                        <AvField
                          name="description"
                          label="Bio"
                          type="textarea"
                          value={this.props.currentUserInfo.description}
                          
                          />

                      </h6>
                    </FormGroup>

                    <h6>
                      <AvField 
                          name="password" 
                          label="Password" 
                          type="password" 
                         
                          
                         />

                    </h6>
                    <br></br>

                         
                    <Container className="text-right"></Container>
                    <br></br>
             
                    <div className="modal-footer">
                      <div className=""></div>
                      <FormGroup>
                        <Button type="submit" >
                          Save modifications
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
