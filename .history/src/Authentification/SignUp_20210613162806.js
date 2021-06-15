import React from "react";

import { 
  Alert,
  Button, 
  Card, 
  Form, 
  Input, 
  Container, 
  Row, 
  Col, 
  NavLink} from "reactstrap";
import AuthNav from "components/Navbars/AuthNav";
import { Link } from "react-router-dom";
import AuthService from "./AuthService";
import { Redirect } from "react-router-dom";


import "../assets/css/custom.css"

export class SignUp extends React.Component {

    constructor(props){
        super(props);
        this.onSignUp = this.onSignUp.bind(this)

        this.state={
            email: '',
            username: '',
            password: '',
            touched: {
              email: false,
              username: false,
              password: false
            },
            message:'',
            postSubmitMessage: false,
            successful: false,
            profileRedirect : "/client-profile"
        }
    }

     //isEnabled = this.state.email.length > 0 && this.state.password.length > 0;

    handleBlur = (field) => (evt) => {
      this.setState({
        touched: { ...this.state.touched, [field]: true },
      });
    } 

    passwordValidation(password){
      if (password.trim() === '') {
        return `Password is required`;
      }
      if (/[^a-zA-Z0-9 -]/.test(password)) {
        return 'Use only letters and numbers';
      }
      if (password.trim().length < 7) {
        return `Password needs to be at least seven characters`;
      }
      return null;
    } 


    emailValidation(email){
      if (
        /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
          email,
        )
      ) {
        return null;
      }
      if (email.trim() === '') {
        return 'Email is required';
      }
      return 'Please enter a valid email';
    }

    usernameValidation(username){
      if (username.trim() === '') {
        return `Username is required`;
      }
      if (/[^a-zA-Z0-9 -]/.test(username)) {
        return 'Invalid characters';
      }
      if (username.trim().length < 3) {
        return `Username needs to be at least three characters`;
      }
      return null;
    }

    validate(email, username, password){
      return {
        email: this.emailValidation(email),
        username: this.usernameValidation(username), 
        password: this.passwordValidation(password)
      };
    }

    canBeSubmitted(){
      const errors = this.validate(this.state.email, this.state.username, this.state.password);
      const isDisabled = Object.keys(errors).some(x => errors[x]);
      return !isDisabled;
    }

    onSignUp(e){
        e.preventDefault();
          console.log("signing up..");
        AuthService.register(
            this.state.username,
            this.state.email,
            this.state.password
            ).then(
                response => {
                    console.log("signed up!")
                    this.setState({
                        postSubmitMessage: true,
                        message: response.data,
                        successful: true
                    });
                  console.log("logging in..")  
                    AuthService.login(this.state.username,this.state.password)
                    .then(
                      response => {
                        console.log("logged in!")
                      }
                    
                    /*console.log("redirecting..") 
                        this.props.history.push({
                        pathname: '/client-profile',
                        state: { 
                          authenticated: true,
                          currentUserInfo: {
                            "username" : this.props.currentUserInfo.username,
                            "email" : this.props.currentUserInfo.email 
                          }
                        }
                      });*/
                      console.log("redirecting..")
                      this.props.history.push({
                       pathname: '/Coaches'});
                      window.location.reload(); 
                    )
                },
            ).catch(
              err => {
              //  console.log(err.response)
                this.setState({
                  postSubmitMessage: true,
                  message: err.response.data,
                  successful: false
              });
              console.log(this.state);
              }
            );
            //console.log(this.state);
    }

    componentDidMount(){
      document.documentElement.classList.remove("nav-open");
      document.body.classList.add("register-page");
   }
   componentWillUnmount(){
      document.body.classList.remove("register-page");
   } 
  componentDidUpdate(){
      console.log(this.state.nbForm);
      document.body.classList.add("register-page");
  }

    render() {
      const user = JSON.parse(localStorage.getItem("user"));
      console.log(user)
      if(user){
        this.props.history.push({pathname: '/index'});  
      }
        const errors = this.validate(this.state.email, this.state.username, this.state.password);
        //console.log(errors)
        const shouldMarkError = (field) => {
          const hasError = errors[field];
          const shouldShow = this.state.touched[field];
    
          return hasError ? shouldShow : false;
        };
        

        return (
            <>
            <AuthNav />
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
              <Card className="ml-auto mr-auto" 
                    style={{backgroundColor: "#ffffff",
                    borderRadius: "8px",
                    color: "black",
                    maxWidth: "350px",
                    margin:" 20px 0 70px",
                    minHeight: "500px",
                    padding: "30px" }}>
               
                <img  className="mx-auto" src={require("assets/img/Perso.png").default} alt="user.img" width="250px" height="128px"></img>
            
    

                { this.state.postSubmitMessage ? (
                    this.state.successful ? (
                      <Alert color="success">
                    {this.state.message}
                    </Alert>
                    ) : 
                        (
                          <Alert color="danger">
                          {this.state.message}
                          </Alert>
                        )
                ): <div></div> }

                <Form className="custom-font" onSubmit={this.onSignUp}>
                
                  <label style={{marginTop: "15px"}} >Email</label>
                  <Input placeholder="Email" 
                         type="email" 
                         name="email"
                         value= {this.state.email}
                         className={shouldMarkError('email') ? "error" : ""}
                         onBlur={this.handleBlur('email')}
                         required
                         onChange={(e) => this.setState({email: e.target.value})}                          
                          /><div className="error-msg">{this.state.touched.email && errors.email}</div>

                  <label style={{marginTop: "15px"}}>Username</label>
                  <Input placeholder="Username" 
                         type="text" 
                         name="username"
                         value={this.state.username}
                         className={shouldMarkError('username') ? "error" : ""}
                         onBlur={this.handleBlur('username')}
                         required
                         onChange={(e) => this.setState({username: e.target.value})}                          
                         /><div className="error-msg">{this.state.touched.username && errors.username}</div>


                  <label style={{marginTop: "15px"}}>Password</label>
                  <Input placeholder="Password" 
                         type="password" 
                         name="password"
                         value={this.state.password}
                         className={shouldMarkError('password') ? "error" : ""}
                         onBlur={this.handleBlur('password')}
                         required
                         onChange={(e) => this.setState({password: e.target.value})}                          

                        /><div className="error-msg">{this.state.touched.password && errors.password}</div>


                  <Button block disabled={!this.canBeSubmitted()}   className="btn-round" style={{marginTop: "30px" }}color="info">
                    Sign up
                  </Button>
                </Form>
                
                <div className="forgot">
                  <Button
                    className="btn-link"
                    color=""
                    
                    style={{textAlign: 'center'}}
                  >
                  <NavLink to='/login'  tag={Link} className='link custom-font' >
                  Already a member? <span style={{textDecoration:"underline"}}>Sign in</span>  </NavLink>
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

            </>
        )
    }
}

export default SignUp

