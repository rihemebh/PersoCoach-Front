
import React from "react";

import { Button, Card, Form, Input, Container, Row, Col } from "reactstrap";

import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import ProfileNav from "components/Navbars/ProfileNav";

function RegisterPage() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("register-page");
    return function cleanup() {
      document.body.classList.remove("register-page");
    };
  });
  return (
    <>
      <ProfileNav />
      <div
        className="page-header"
        style={{
          backgroundImage:
            "url(" + require("assets/img/login-image.jpg").default + ")",
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
                <h3 className="text-black text-info text-center">  Welcome Back ! </h3>
                   
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
                <Form className="">
                  <label style={{marginTop: "15px"}}>Email</label>
                  <Input placeholder="Email" type="text" />
                  <label style={{marginTop: "15px"}}>Password</label>
                  <Input placeholder="Password" type="password" />
                  <Button block className="btn-round" style={{marginTop: "30px" }}color="info">
                    Login
                  </Button>
                </Form>
                <div className="forgot">
                  <Button
                    className="btn-link text-center"
                    color=""
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                    style={{textAlign: 'center'}}
                  >
                    Forgot password?
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
  );
}

export default RegisterPage;
