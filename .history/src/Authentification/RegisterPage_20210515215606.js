
import React from "react";

import { Button, Card, Form, Input, Container, Row, Col, NavbarBrand ,NavLink} from "reactstrap";

import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import ProfileNav from "components/Navbars/ProfileNav";
import { Link } from "react-router-dom";

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
                <h3 className=" text-info text-center"style={{textDecoration:"bold"}} > <b>Sign Up </b></h3>
                   <br></br>

                <img  className="mx-auto" src={require("assets/img/Perso.png").default} width="250px" height="128px"></img>
            
      
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
                    Sign up
                  </Button>
                </Form>
                <div className="forgot">
                  <Button
                    className="btn-link"
                    color=""
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                    style={{textAlign: 'center'}}
                  >
                  <NavLink to='/login'  tag={Link} className='link' >
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
  );
}

export default RegisterPage;
