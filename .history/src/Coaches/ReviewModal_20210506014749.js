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
  async componentDidMount() {
    console.log(this.state.id);
    const response = await fetch(
      "http://localhost:3000/catalog/coach/" + this.props.id+"/review"
    );

    const body = await response.json();
    this.setState({ reviews: body, isLoading: false });
  }

  render() {
    return (
      <Container>
        <Row id="modals">
          <Col onClick={this.toggleModal}>
            <span
              style={{ textDecoration: "underline" }}
              onClick={this.toggleModal}
            >
              {this.props.reviews.length}
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
                {this.props.reviews.length == 0
                  ? <span className="text-center text-secondary ">No reviews for this coach</span>
                  : this.props.reviews.map((value) => {
                      return value.text;
                    })}
              </div>
              
            </Modal>
          </Col>
        </Row>
      </Container>
    );
  }
}
