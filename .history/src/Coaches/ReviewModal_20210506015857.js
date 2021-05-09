import React, { Component } from "react";
import { Col, Container, Modal, Row } from "reactstrap";

export default class ReviewModal extends Component {
  emptyReview = {
    coach: {},
    client: {},
    text: "No reviews for this Coach",
  };
  constructor(props) {
    super(props);
    this.state = {
      response: "",
      modal: false,
      reviews: this.props.reviews,
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
            <span
              style={{ textDecoration: "underline" }}
              onClick={this.toggleModal}
            >
              {this.props.reviews.length} {/*(this.props.reviews.length>1) ? "Reviews" : "Review"*/}
            </span>

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
                <h5 className="modal-title text-bold text-center" id="exampleModalLabel">
                  Reviews
                </h5>
              </div>
              <div className="modal-body text-center">
                  <Container className="rounded border  bg-light shadow">
                      <Row style={{margin: '10px'}}>
                          <Col lg='2' md="2" xs="4"><img src=""></img></Col>
                          <Col lg='10' md="10" xs="">{this.props.reviews.length == 0
                  ? <span className="text-center text-secondary">No reviews for this coach</span>
                  : this.props.reviews.map((value) => {
                      return value.text;
                    })}</Col>
                      </Row>
                  
                  </Container>
                
              </div>
              
            </Modal>
          </Col>
        </Row>
      </Container>
    );
  }
}
