<Table>
  <thead>
  <tr>
          <th>#</th>
          <th></th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
  </thead>
  <tbody>

  </tbody>
</Table>

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
         <Button  className="btn-round text-danger"  color="link"  style={{fontSize: "11px" , margin: "5px"}}>
                 <FontAwesome  className="fas fa-users"  ></FontAwesome>Requests</Button>
       
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
                  
                 
                    <h7
                      className="text-uppercase"
                      style={{ fontWeight: "bold" }}
                    >
                     Your Requests
                    </h7>
                
                  <br></br>
                  
                </h5>
              </div>
              <div
                className="modal-body text-center"
                style={{ maxHeight: "calc(100vh - 210px)", overflowY: "auto" }}
              >
                
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
                              src={value.client.url}
                              alt="user-pic"
                              style={{ width: "60px", height: "60px" }}
                            ></img>
                          </Col>

                          
                            <Col lg="9" md="8" xs="6">
                              <Row>
                                <h6>{value.client.username != undefined ? value.client.username : "Unnamed"} {rate}</h6>
                              </Row>
                              <Row>{value.text==""? <small style={{color:"lightgray"}}>No text review</small> : value.text} </Row>
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
