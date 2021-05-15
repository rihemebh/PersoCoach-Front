import React, {Component} from 'react';
import CheckButton from "react-validation/build/button";
import { isEmail } from "validator";

import AuthService from "../services/auth.service"
import ProfileNav from "../../components/Navbars/ProfileNav";
import { Button, Card, Form, Input, Container, Row, Col } from "reactstrap";



const required = value => {
    if (!value){
        return(
            <div className="alert alert-danger" role="alert">
                This field is required!
            </div>
        )
    }
};

const validEmail = value => {
    if (isEmail(value)){
        return (
            <div className="alert alert-danger" role="alert">
                This is not a valid email.
            </div>
        )
    }
};

const validUsername = value => {
    if (value.length <3 || value.length>20){
        return(
            <div className="alert alert-danger" role="alert">
                The username must be between 3 and 20 caracters
            </div>
        )
    }
};

const validPassword = value => {
    if (value.length <6 || value.length>35){
        return(
            <div className="alert alert-danger" role="alert">
                The username must be between 6 and 35 caracters
            </div>
        )
    }
};



class Register extends Component {

    constructor(props) {
        super(props);
        this.handleRegister = this.handleRegister.bind(this);
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);

        this.state = {
            username: "",
            email: "",
            password: "",
            successful: false,
            message:""
        };
    }

    onChangeUsername(e){
        this.setState({
            username: e.target.value
        });
    }

    onChangeEmail(e){
        this.setState({
            email: e.target.value
        });
    }

    onChangePassword(e){
        this.setState({
            password: e.target.value
        });
    }

    handleRegister(e){
        e.preventDefault();

        this.setState({
            message: "",
            successful: false
        });

        this.form.validateAll();

        if(this.checkBtn.context._errors.length === 0) {
            AuthService.register(
                this.state.username,
                this.state.email,
                this.state.password
            ).then(
                response => {
                    this.setState({
                        message: response.data.message,
                        successful: true
                    });
                },
                error => {
                    const msg = (error.response && error.response.data && error.response.data.message) ||
                        error.message || error.toString();

                    this.setState({
                        successful: false,
                        message: msg
                    });
                }
            )
        }
        }


    render() {
        return (
                <div>
                    <ProfileNav />
                    <div
                        className="page-header"
                        style={{
                            backgroundImage:
                                "url(https://www.heart.org/-/media/healthy-living-images/fitness/runner_tying_shoe.jpg)",
                        }}
                    >
                        <div className="filter" />
                        <Container>
                            <Row>
                                <Col className="ml-auto mr-auto" lg="4">
                                    <Card className="ml-auto mr-auto" style={{backgroundColor: "#ffffff",
                                        borderRadius: "8px",
                                        color: "black",
                                        maxWidth: "350px",
                                        margin:" 20px 0 70px",
                                        minHeight: "500px",
                                        padding: "30px" }}>

                                        <img  className="mx-auto" src={require("assets/img/11.png").default} width="250px" height="128px"></img>
                                        <br></br>
                                        <h3 className=" text-info text-center"style={{textDecoration:"bold"}} > <b>Singn Up </b></h3>
                                        <br></br>
                                        <div className="social-line text-center">


                                            {/* <Button
                    className="btn-neutral btn-just-icon mr-1"
                    color="facebook"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    <i className="fa fa-facebook-square" />
                  </Button>
                  <Button
                    className="btn-neutral btn-just-icon mr-1"
                    color="google"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    <i className="fa fa-google-plus" />
                  </Button>
                  <Button
                    className="btn-neutral btn-just-icon"
                    color="twitter"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    <i className="fa fa-twitter" />
                  </Button>*/}
                                        </div>
                                    <Form
                                        onSubmit={this.handleRegister}
                                        ref={c => {
                                            this.form = c;
                                        }}>

                                        {!this.state.successful && (
                                            <div>
                                        <label
                                            htmlFor="email"
                                            style={{marginTop: "15px"}}>Email</label>
                                        <Input
                                            placeholder="Email"
                                            type="text"
                                            name="email"
                                            value={this.state.email}
                                            onChange={this.onChangeEmail}
                                            validations={[required,validEmail]}
                                            />

                                        <label
                                            htmlFor="username"
                                            style={{marginTop: "15px"}}>Username</label>
                                        <Input
                                            placeholder="Email"
                                            type="text"
                                            name="username"
                                            value={this.state.username}
                                            onChange={this.onChangeUsername}
                                            validations={[required,validUsername]}
                                        />

                                        <label
                                            htmlFor="password"
                                            style={{marginTop: "15px"}}>Password</label>
                                        <Input
                                            placeholder="Password"
                                            type="password"
                                            name="password"
                                            value={this.state.password}
                                            onChange={this.onChangePassword}
                                            validations={[required,validPassword]}
                                        />

                                        <Button block className="btn-round" style={{marginTop: "30px" }}color="info">
                                            Register
                                        </Button>
                                            </div>
                                            )}

                                        {this.state.message && (
                                            <div className="form-group">
                                                <div
                                                    className={
                                                        this.state.successful
                                                        ? "alert alert-success"
                                                        : "alert alert-danger"
                                                    }
                                                    role="alert">
                                                    {this.state.message}
                                                </div>
                                            </div>
                                        )}

                                        <CheckButton
                                            style={{display: "none"}}
                                            ref={c => {
                                                this.checkBtn = c;
                                            }}
                                        />

                                    </Form>
                                        <div className="forgot">
                                            <Button
                                                className="btn-link"
                                                color=""
                                                href="#pablo"
                                                onClick={(e) => e.preventDefault()}
                                                style={{textAlign: 'center'}}
                                            >
                                                Already a member? <a href='/login' className='link' style={{textDecoration:"underline"}}>Sign in</a>
                                            </Button>
                                        </div>
                                </Card>
                            </Col>
                        </Row>
                    </Container>
                    <div className="footer register-footer text-center">
                        <h6>
                            © {new Date().getFullYear()}, made with{" "}
                            <i className="fa fa-heart heart" /> by PersoCoach Team          </h6>
                    </div>
                </div>
                </div>
        );
    }
}

export default Register;