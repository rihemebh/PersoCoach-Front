

import ProgramModal from "Programs/components/programModal";
import React, { Component } from "react";
import FontAwesome from "react-fontawesome";
import { Button, Col, Container, Modal, Row ,Table } from "reactstrap";

export default class Requests extends Component {
  
  render() {
    
    return (

                 
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
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
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
