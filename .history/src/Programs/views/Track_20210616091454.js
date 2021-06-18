import React, { Component } from 'react'
import ProfileNav from "components/Navbars/ProfileNav";
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
//import AuthService from "./AuthService";
import { Redirect } from "react-router-dom";




export default class Track extends Component {
    render() {
        return (
            <>
                  <ProfileNav />
      <div
        className="page-header"
        style={{
            //opacity: 0.8,
         // backgroundColor: "rgba(0, 0, 0, 0.9)",
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
                         className=""
                     
                         required
                                              
                          /><div className="error-msg"></div>

                  <label style={{marginTop: "15px"}}>Username</label>
                  <Input placeholder="Username" 
                         type="text" 
                         name="username"
                         value={this.state.username}
                         className=""
                        
                         required
                                         
                         /><div className="error-msg"></div>


                  <label style={{marginTop: "15px"}}>Password</label>
                  <Input placeholder="Password" 
                         type="password" 
                         name="password"
                         value={this.state.password}
                         className={shouldMarkError('password') ? "error" : ""}
                         onBlur={this.handleBlur('password')}
                         required
                                              

                        /><div className="error-msg"></div>


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
