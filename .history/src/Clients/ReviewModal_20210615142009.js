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
import { IconCheckbox ,Icon} from "react-icon-checkbox";

export default class ReviewModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        checkedRate:[false,false,false,false,false],
     
      
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
     return toast("Your Review was successfully sent");
   }
   
   showtoastFail = ()=>{
    return toast("We can't add you review");
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



    this.toggleModal();
      
   
  };
  
  _onCheckboxClicked = (n) => {
    const x= [];
   
    for(let i=0; i<=n;i++){
    x.push(true);
    
    }
    if(n<5){for(let i=n+1;i<5;i++){x.push(false);}}
         this.setState({
         checkedRate: x,
         rate: n,
           });

 
    }
  
  render() {
    const style = {
        color: "#d9d9d9",
        fontSize: "25px",
        marginRight: "10px",
      };
    let x = this.state.checkedRate;
   
   
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
              
            >  Rate This Coach     
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
               Give a Review for <span style={{fontWeight: "bold"}}>{this.props.coach.name}  </span>         
               
                </h5>
              </div>
              <div className="modal-body"
               style={{ maxHeight: "calc(100vh - 210px)", overflowY: "auto" }}>
              
                <div class="container">
                <Container>
               <h6>Rate</h6> 
                {x.map((value, index) => {
        return <IconCheckbox checked={this.state.checkedRate[index]} 
        checkedIcon={ <FontAwesome className="fa-star text-warning" name="star" style={style}  />} 
        uncheckedIcon={ <FontAwesome className="fa-star" name="star" style={style} />}
        onClick={()=> this._onCheckboxClicked(index)} 
        />
    })
  }
  <br></br>
                  <AvForm onValidSubmit={this.handleValidSubmit}>
                    <h6>
                   Text Review <FontAwesome className="fa-comments" ></FontAwesome>
                      <AvField 
                          name="text" 
                     
                          type="textarea" 
                         
                          
                    />
                    </h6>
              
            


              
             
                    <div className="modal-footer">
                      <div className="">
                      <FormGroup>
                        <Button type="submit" >
                          Send you review
                        </Button>
                        </FormGroup>
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
