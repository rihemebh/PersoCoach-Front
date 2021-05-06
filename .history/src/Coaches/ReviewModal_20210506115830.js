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
      coach : this.props.reviews.length>0 ? (this.props.reviews)[0].coach : null,
    };
  }

  toggleModal = () => {
    this.setState({
      modal: !this.state.modal,
    });
  };

  render() {
    this.props.reviews.length>0 ?  console.log(this.state.coach) : console.log("");
    return (
      <div  onClick={this.toggleModal}>
        {this.props.rate}{" "}
        <small>
          {this.props.reviews.length}
          {">"}
        </small>
        <Row id="modals">
          <Col>
            <span className="text-left" onClick={this.toggleModal}></span>

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
              {this.props.reviews.length} {this.props.reviews.length<2? "Review" : "Reviews" } 
               {this.props.reviews.length>0 ? this.state.coach.name}
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
                      <Container className=" border  bg-light shadow"  style={{ margin: "10px", borderRadius: "30px" }}>
                        <Row style={{ margin: "10px" }}>
                          <Col lg="3" md="4" xs="6">
                            <img
                              className="img-circle"
                              src={require("assets/img/eva.jpg").default}
                              alt="user-pic"
                              style={{ width: "60px", height: "60px" }}
                            ></img>
                          </Col>
                          <Col lg="9" md="8" xs="6">
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
      </div>
    );
  }
}
