import React from "react";
import { AvForm, AvField } from "availity-reactstrap-validation";
import video from "../video.mp4";
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
  ModalBody,
} from "reactstrap";
import axios from "axios";
import { toast, ToastContainer,Zoom , Bounce } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';



export default class CoachModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.id,
      title : "",
      loading : true ,
      disabled : this.props.disabled,
      user: JSON.parse(localStorage.getItem("user")), 
    };
    //this.showtoastSuccess=this.showtoastSuccess.bind(this);
  //  this.handleValidSubmit = this.handleValidSubmit.bind(this);
    this.handleInvalidSubmit = this.handleInvalidSubmit.bind(this);
  }

  toggleModal = () => {
    this.setState({
      modal: !this.state.modal,
    });
  };
componentDidMount(){

    axios.get("http://localhost:8080/api/video/"+this.props.id).then((response)=>{
        console.log(response.data.gridFSFile.metadata.title);
        this.setState({title : response.data.gridFSFile.metadata.title , loading: false})
        
        //FileSaver.saveAs(response.data, "video.mp4");
    }).catch((error)=>{
        console.log(error)
    })
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
    if(this.state.loading == false)
   {
       var  video1 = "C:\\Users\\rihem\\Desktop\\PersoCoach1\\PersoCoach-Front\\src\\assets\\videos\\"+this.state.title
   console.log(video1)}
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
            <br/> 
            
             <ModalBody>
             <video width="330" height="300" controls >
           <source src={video1} type="video/mp4"/>
           </video>
                 </ModalBody>
               
                  
           
                
              </div>
            </Modal>
          </Col>
        </Row>
      </Container>
    );
  }
}
