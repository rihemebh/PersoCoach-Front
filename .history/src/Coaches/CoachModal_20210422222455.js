import React from 'react'
import   {Modal,Row , Col ,Container, Button
} from "reactstrap";
export default function CoachModal() {
    const [modal, setModal] = React.useState(false);
    const toggleModal = () => {
      setModal(!modal);
    };
  
    return (
      
            
        <Container>
         
          <Row id="modals">
            <Col md="6">
              
              {/* Button trigger modal */}
              <Button
                className="btn-round"
                color="danger"
                outline
                type="button"
                onClick={toggleModal}
              >
               Choose this Coach
              </Button>
              {/* Modal */}
              <Modal isOpen={modal} toggle={toggleModal}>
                <div className="modal-header">
                  <button
                    aria-label="Close"
                    className="close"
                    type="button"
                    onClick={toggleModal}
                  >
                    <span aria-hidden={true}>×</span>
                  </button>
                  <h5
                    className="modal-title text-center"
                    id="exampleModalLabel"
                  >
                    Subscribe for a personalize program
                  </h5>
                </div>
                <div className="modal-body">
                  Welcome to the journey
                  Once you fill this form with your real data you will get a brief personalized program from the coach 
                  in 2 or 3 days  
               <br></br>
                  <small>DontYour data is totally secure</small>
                </div>
                <div className="modal-footer">
                  <div className="left-side">
                    <Button
                      className="btn-link"
                      color="default"
                      type="button"
                      onClick={toggleModal}
                    >
                      Back
                    </Button>
                  </div>
                  <div className="divider" />
                  <div className="right-side">
                    <Button className="btn-link" color="danger" type="button">
                      Delete
                    </Button>
                  </div>
                </div>
              </Modal>

            </Col>
            </Row>
            </Container>
         
        
    )
}
