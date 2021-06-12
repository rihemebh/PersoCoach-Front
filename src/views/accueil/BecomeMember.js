import React from 'react';
import CarouselCoach from "views/accueil/CarouselCoach.js";
import {
    Container,
    Row,
    Col,
    Button
  } from "reactstrap";
  
const BecomeMember = () =>{
    return(
        <div >
        <Container>
        <Row >
            <Col>
        <img alt=".." src={require("assets/img/coach3.jpg").default}  />
        </Col>
        <Col>
        <br></br> <br></br><br></br><br></br> <br></br>
        <div className="typography-line">
                <p className="mb-0" >
                    Tired of searching so hard and looking up the so many websites of personal coaches?<br></br> Here you'll find everyone of them in one place and it is up to you to choose the one for you.
                </p>
                <br />
              
            <Button
                  className="btn-round mr-1"
                  color="info"
                  outline
                  type="button"
                >
                  Find a coach
                </Button>
            </div>
        </Col>
        </Row>
        </Container>
        </div>
    ) }
export default BecomeMember;