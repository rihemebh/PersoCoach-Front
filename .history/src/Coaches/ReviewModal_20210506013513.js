import React, { Component } from 'react'
import { Col, Container, Modal, Row } from 'reactstrap'

export default class ReviewModal extends Component {
    emptyReview={
        coach: {},
        client: {}
    }
    constructor(props){
    super(props);
    this.state = {
      response: "",
      modal: false,
      reviews: this.props.reviews
    };
   
  }

  toggleModal = () => {
    this.setState({
      modal: !this.state.modal,
    });
  };

    render() {
        return (
            <Container>
      
        <Row id="modals">
          <Col onClick={this.toggleModal}>
         
    
           <span style={{textDecoration: 'underline'}} onClick={this.toggleModal}>{this.props.reviews.length}</span>   
         
       
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
                  Reviews
                </h5>
              </div>
              <div className="modal-body">
                {this.props.reviews.map((value)=>{
                      return  value.text
                })}
              </div>
              <div class="container">
                <Container>
                
                </Container>
              </div>
            </Modal>
          </Col>
        </Row>
      </Container>
        )
    }
}
