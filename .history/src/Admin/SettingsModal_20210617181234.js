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
import axios from "axios";
import { toast, ToastContainer, Zoom, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import authHeader from "Authentification/AuthHeader";
import AuthService from "Authentification/AuthService";

export default class SettingsModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: JSON.parse(localStorage.getItem("user")),
      loading: true,

      editedPwd: false,
    };

    this.showtoastSuccess = this.showtoastSuccess.bind(this);
    this.handleValidSubmit = this.handleValidSubmit.bind(this);
    this.handleInvalidSubmit = this.handleInvalidSubmit.bind(this);
  }

  toggleModal = () => {
    this.setState({
      modal: !this.state.modal,
    });
  };

  showtoastSuccess = () => {
    return toast("Wow so easy!");
  };

  showtoastFail = () => {
    return toast("Wow so easy!");
  };

  async componentDidMount() {
    AuthService.getCurrentUser()
      .then((response) => {
        this.setState(() => ({
          user: response,
          loading: false,
        }));
      })
      .catch((error) => {
        console.log(error);
      });
  }

  handleInvalidSubmit(event, errors, values) {
    this.setState({ name: values.name, error: true });
  }

  closeModal() {
    this.setState({ name: false, error: false });
  }

  async handleValidSubmit(e, values) {
    axios
      .post(
        "http://localhost:8080/api/admin/update/" +
          this.state.user.id +
          "?username=" +
          values.name +
          "&email=" +
          values.email +
          "&password=" +
          values.password
      )
      .then((response) => console.log(response))
      .catch((error) => console.log(error));

    this.toggleModal();
  }

  render() {


    //console.log(this.state.userInfo)
    return (
      <Container>
        <Row id="modals">
          <Col>
            {/* Button trigger modal */}
            <Button
              className="btn-round"
              color="danger"
              outline
              type="button"
              onClick={this.toggleModal}
            >
              <i className="fa fa-cog" /> Settings
              <div>
                <ToastContainer
                  draggable={false}
                  transition={Zoom}
                  autoClose={4000}
                  position="bottom-right"
                  hideProgressBar={false}
                />
              </div>
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
                  <i className="fa fa-cog" /> My Settings
                </h5>
              </div>
              <div
                className="modal-body"
                style={{ maxHeight: "calc(100vh - 210px)", overflowY: "auto" }}
              >
                <div class="container">
                  <Container>
                    <AvForm onValidSubmit={this.handleValidSubmit}>
                      <h6>
                        <AvField
                          name="name"
                          label=" Name "
                          type="text"
                          value={this.state.user.username}
                        />
                      </h6>
                      <h6>
                        <AvField
                          name="email"
                          label="Email"
                          type="email"
                          value={this.state.user.email}
                        />
                      </h6>

                      <h6>
                        <AvField
                          name="password"
                          label="Password"
                          type="password"
                          onChange={()}
                        />
                      </h6>
                      <br></br>

                      <Container className="text-right"></Container>
                      <br></br>

                      <div className="modal-footer">
                        <div className=""></div>
                        <FormGroup>
                          <Button type="submit">Save modifications</Button>
                        </FormGroup>

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
              </div>
            </Modal>
          </Col>
        </Row>
      </Container>
    );
  }
}
