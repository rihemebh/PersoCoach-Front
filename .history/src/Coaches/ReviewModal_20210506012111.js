import React, { Component } from 'react'
import { Col, Modal, Row } from 'reactstrap'

export default class ReviewModal extends Component {
    render() {
        return (
            <Container>
      
        <Row id="modals">
          <Col>
            {/* Button trigger modal */}
    
              Choose this Coach
         
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
                  Reviews
                </h5>
              </div>
              <div className="modal-body">
                <h6> Welcome to the journey</h6>
                Once you fill this form you will get a brief personalized
                program from the coach in 2 or 3 days
                <br></br>
                <br></br>
                <small className="text-right text-danger">
                  * Required field
                </small>
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
