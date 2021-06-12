import React from "react";
import { AvForm, AvField } from "availity-reactstrap-validation";
import {
  Modal,
  Row,
  Col,
  Container,
  Button,
  Form,
  Input,
  FormGroup,
  Label,
  FormText,
} from "reactstrap";
export default class CoachModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      name: "",
      gender: "",
      goal: "",
      age: 0,
      height: 0.0,
      weight: 0.0,
      pic: null,
      practice: "",
    };

    this.handleValidSubmit = this.handleValidSubmit.bind(this);
    this.handleInvalidSubmit = this.handleInvalidSubmit.bind(this);
  }

  toggleModal = () => {
    this.setState({
      modal: !this.state.modal,
    });
  };
  saveRequest = async () => {
    const response = await fetch(
      "http://localhost:3000/catalog/coach/" +
        this.props.id +
        "?gender=" +
        this.state.gender +
        "$goal=" +
        this.state.goal +
        "&age=" +
        this.state.age +
        "&height=" +
        this.state.height +
        "&weight=" +
        this.state.weight +
        "&pic=" +
        this.state.pic +
        "&practice=" +
        this.state.practice
    );
    console.log(response.json());
  };

  handleValidSubmit(event, values) {
    this.setState(
      {
        name: values.name,
        age: values.age,
        gender: values.select,
        weight: values.weight,
        height: values.height,
        goal: values.goal,
        //pic: values.file,
        practice: values.select1,
      },
     async()=> this.saveRequest()
    );
  }

  handleInvalidSubmit(event, errors, values) {
    this.setState({ name: values.name, error: true });
  }

  closeModal() {
    this.setState({ name: false, error: false });
  }
  render() {
    return (
      <Container>
        <Row id="modals">
          <Col>
            {/* Button trigger modal */}
            <Button
              className="btn-round"
              color="warning"
              outline
              type="button"
              onClick={this.toggleModal}
            >
              Choose this Coach
            </Button>
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
                  Subscribe
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
                  <AvForm
                    onValidSubmit={this.handleValidSubmit}
                    onInvalidSubmit={this.handleInvalidSubmit}
                  >
                    <h6>
                      <AvField name="Name" label=" Name *" type="" required />
                    </h6>
                    <h6>
                      <AvField name="age" label=" Age *" type="" required />
                    </h6>
                    <FormGroup>
                      <Label for="exampleSelect">
                        <h6>Gender *</h6>
                      </Label>
                      <AvField
                        type="select"
                        name="select"
                        id="exampleSelect"
                        required
                      >
                        <option>-- Not selected --</option>
                        <option>Male</option>
                        <option>Female</option>
                      </AvField>
                    </FormGroup>
                    <h6>
                      <AvField
                        name="weight"
                        label=" Weight *"
                        type=""
                        required
                      />
                    </h6>
                    <h6>
                      <AvField
                        name="height"
                        label=" Height *"
                        type="text"
                        required
                      />
                    </h6>
                    <FormGroup>
                      <Label for="exampleSelect1">
                        <h6>How often do you exercice ? *</h6>
                      </Label>
                      <AvField
                        type="select"
                        name="select1"
                        id="exampleSelect1"
                        required
                      >
                        <option>-- Not selected --</option>
                        <option>Always</option>
                        <option>Sometimes</option>
                        <option>Rarely</option>
                        <option>Never</option>
                      </AvField>
                    </FormGroup>
                    <FormGroup>
                      <h6>
                        {" "}
                        <AvField
                          name="goal"
                          label="Goal *"
                          type="textarea"
                          required
                        />
                      </h6>
                      <FormText>
                        Example: I want to change my lifestyle / I want to loose
                        weight ...
                      </FormText>
                    </FormGroup>
                    <br></br>

              {/*      <h6>
                      {" "}
                      <AvField
                        type="file"
                        name="file"
                        label="Upload a full picture of you"
                        id="exampleFile"
                      />
                    </h6>

                    {/* <AvField type="radio"  name="radio1" required></AvField> <span> I accept all the terms and conditions *</span>
                     */}

                    <Container className="text-right"></Container>
                    <br></br>
                    <div className="modal-footer">
                      <div className="">
                        <Button type="submit" onSubmit={this.handleValidSubmit}>
                          Submit your request
                        </Button>
                      </div>
                      <div className="">
                        <Button
                          className="btn-link"
                          color="default"
                          type="button"
                          onClick={this.toggleModal}
                        >
                          Back
                        </Button>
                      </div>
                    </div>
                  </AvForm>
                </Container>
              </div>
            </Modal>
          </Col>
        </Row>
      </Container>
    );
  }
}
