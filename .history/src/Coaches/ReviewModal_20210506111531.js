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
      <Container fluid   className="text-left">
        <Row id="modals"   className="text-left">
          <Col onClick={this.toggleModal}>
            <span
             className="text-left"
              onClick={this.toggleModal}
            >
             {this.props.rate} <small>{this.props.reviews.length }</small>{" "}
              {/*(this.props.reviews.length>1) ? "Reviews" : "Review"*/}
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
                <h5
                  className="modal-title text-bold text-center"
                  id="exampleModalLabel"
                >
                  Reviews
                </h5>
              </div>
              <div className="modal-body text-center">
             
                    {this.props.reviews.length == 0 ? (
                      <span className="text-center text-secondary">
                        No reviews for this coach
                      </span>
                    ) : (
                      this.props.reviews.map((value) => {
                        return (
                          <Container className="rounded border  bg-light shadow">
                          <Row style={{ margin: "10px" }}>
                            <Col lg="3" md="2" xs="4">
                              <img
                                className="img-circle"
                                src={require("assets/img/eva.jpg").default}
                                alt="user-pic"
                                style={{ width: "60px" , height: "60px"}}
                              ></img>
                            </Col>
                            <Col lg="9" md="10" xs="8">
                              <Row>
                                <h6>Name</h6>
                              </Row>
                              <Row>{value.text}</Row>
                            </Col>
                          </Row>
                          </Container>
                        );
                      })
                    )}
              
              </div>
            </Modal>
          </Col>
        </Row>
      </Container>
    );
  }
}
