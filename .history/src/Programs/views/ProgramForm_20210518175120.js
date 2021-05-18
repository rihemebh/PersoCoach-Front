import React, { Component } from "react";
import PropTypes from 'prop-types';


import { 
  Alert,
  Button, 
  Card, 
  Form, 
  Input, 
  Container, 
  Row, 
  Col, 
  } from "reactstrap";

import ProfileNav from "components/Navbars/ProfileNav";
import AuthService from "./AuthService";

export class Login extends Component{
    constructor(props){
        super(props);

        this.onLogin = this.onLogin.bind(this)
        this.state={
            username: "",
            password: "",
            accessToken: '',
            loading: false,
            message: "",
            errMsg:"",
            successful: false
        };
    }

   

    render(){
        return(
            <>
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
              <Card className="ml-auto mr-auto" 
                    style={{backgroundColor: "#ffffff",
                    borderRadius: "8px",
                    color: "black",
                    maxWidth: "350px",
                    margin:" 20px 0 70px",
                    minHeight: "500px",
                    padding: "30px" }}>
               
                <img  className="mx-auto" src={require("assets/img/Perso.png").default} alt="user.img" width="250px" height="128px"></img>
            


                { this.state.errMsg != undefined ? (
                    <Alert color="danger">
                  {this.state.errMsg}
                  </Alert>
                  ) :  <div></div> }


                <Form className="custom-font" onSubmit={this.onLogin}>
                

                <label style={{marginTop: "15px"}}>Username</label>
                <Input placeholder="Username" 
                       type="text" 
                       name="username"
                       value={this.state.username}
                       onChange={(e) => this.setState({username: e.target.value})}
                       required                          

                       />

                <label style={{marginTop: "15px"}}>Password</label>
                <Input placeholder="Password" 
                       type="password" 
                       name="password"
                       value={this.state.password}
                       onChange={(e) => this.setState({password: e.target.value})}
                       required    

                        />
                  <Button block className="btn-round" style={{marginTop: "30px" }}color="info">
                    Sign in
                  </Button>
                </Form>
                
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

Login.propTypes = {
  setToken: PropTypes.func.isRequired
}

export default Login