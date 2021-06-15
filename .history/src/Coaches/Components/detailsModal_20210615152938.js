import React from "react";
import { AvForm, AvField } from "availity-reactstrap-validation";
import {
  Modal,
  Row,
  Col,
  Container,
  Button,
  Table,
  Form,
  Input,
  FormGroup,
  Label,
  FormText,
} from "reactstrap";
import axios from "axios";
import { toast, ToastContainer,Zoom , Bounce } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';



export default class Details extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
     request: this.props.request,
      program: {}
    };
  
   
  }
  componentDidMount(){
const req = this.state.request;

    axios.post("http://localhost:3000/api/bprogram/request", req
).then(function(response){
        this.setState({program : response.data});
     
        console.log(program)
    }.bind(this)).catch((error)=> console.log(error));

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
       const program = this.state.program;
   

    //const currentUser =  JSON.parse(localStorage.getItem("user"));

    return (
      <Container>
      
        <Row id="modals">
          <Col>
          
          <Button
              className="btn-round"
              color="link"
             
            
              onClick={this.toggleModal}
        
            >
                <div>
    
     
      </div>
           <u style={{paggingTop: "5px"}}>View Program details</u>  
            </Button>
           
            {/* Modal */}
            <Modal size="xl" isOpen={this.state.modal} toggle={this.toggleModal}>
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
              
              <Table>
  <thead>
  <tr>
          
          <th>Program Id</th>
          <th>Duration </th>
          <th>Frequency</th>
          <th>Diet Type</th>
          <th>Description</th>
          
          
        </tr>


  </thead>
  <tbody>
<tr>
<td>{program.id} </td>
<td>{program.duration}</td>
<td>{program.frequency}</td>
<td>{program.type}</td>
<td>{program.description}</td>


</tr>
  </tbody>
</Table>
             
            
           
           
                          <div className="modal-footer">
                 
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
                
             
               
                  
           
         
            </Modal>
          </Col>
        </Row>
      </Container>
    );
  }
}
