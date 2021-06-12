import React, { Component } from "react";
import FontAwesome from "react-fontawesome";
import { Button, Col, Container, Modal, Row } from "reactstrap";

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
    let coach = {
      id: 0,
      name: "",
      gender: "",
      type: "",
      url: "",
      description: "",
      rate: 0,
      acadamicExp: [],
      workExp: [],
    };

    return (
      <div onClick={this.toggleModal}>
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
                  <span>
                    {" "}
                    {this.props.reviews.length}{" "}
                    {this.props.reviews.length < 2 ? "Review" : "Reviews"}{" "}
                    {"for "}
                    <h7
                      className="text-uppercase"
                      style={{ fontWeight: "bold" }}
                    >
                      {this.props.name}
                    </h7>
                  </span>
                  <br></br>
                  Total Rate: {this.props.rate}
                </h5>
              </div>
              <div
                className="modal-body text-center"
                style={{ maxHeight: "calc(100vh - 210px)", overflowY: "auto" }}
              >
                {this.props.reviews.length == 0 ? (
                  <span className="text-center text-secondary">
                    No reviews for this coach
                  </span>
                ) : (
                  this.props.reviews.map((value) => {
                    let nb = value.rate;
                    const rate = [];
                    for (let i = 0; i < 5; i++) {
                      if (nb > 0) {
                        rate.push(
                          <FontAwesome
                            className="fas fa-star text-warning"
                            name="star"
                          ></FontAwesome>
                        );
                        nb--;
                      } else {
                        rate.push(
                          <FontAwesome
                            className="far fa-star "
                            name="star"
                            style={{ color: "#d9d9d9" }}
                          ></FontAwesome>
                        );
                      }
                    }
                    var date = new Date(value.date);
                    return (
                      <Container
                        className=" border  bg-light shadow"
                        style={{ margin: "10px", borderRadius: "30px" }}
                      >
                        <Row style={{ marginTop: "10px" }}>
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
                                <h6>Name {rate}</h6>
                              </Row>
                              <Row>{value.text==""? <smallNo text review" : value.text} </Row>
                            </Col>
                          
                        </Row>
                        <Row style={{ marginBottom: "10px" }}>
                          <Col lg="6"></Col>
                          <Col lg="6">
                            <small
                              className="text"
                              style={{ color: "#0b505b" }}
                            >
                              {new Intl.DateTimeFormat("en-GB", {
                                year: "numeric",
                                month: "long",
                                day: "2-digit",
                              }).format(date)}
                            </small>
                          </Col>
                        </Row>
                      </Container>
                    );
                  })
                )}
              </div>

              <div className="modal-footer">
                <Button
                  className="btn-link"
                  color="default"
                  type="button"
                  onClick={this.toggleModal}
                >
                  Back
                </Button>
              </div>
            </Modal>
          </Col>
        </Row>
      </div>
    );
  }
}
