

import ProgramModal from "Programs/components/programModal";
import React, { Component } from "react";
import FontAwesome from "react-fontawesome";
import { Button, Col, Container, Modal, Row ,Table } from "reactstrap";

export default class RequestModal extends Component {
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
      <Button  className="btn-round "  color="danger" outline  style={{fontSize: "10px" , margin: "5px"}}>
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
                <Table>
  <thead>
  <tr>
          
          <th>Request Id </th>
          <th>Client </th>
          <th>Age</th>
          <th>Gender</th>
          <th>Weight</th>
          <th>Height</th>
          <th>Exercices</th>
          <th>Goal</th>
          <th></th>
        </tr>


  </thead>
  <tbody>
<tr>
    <td>
    <ProgramModal />
    </td>
</tr>
  </tbody>
</Table>
                   
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
