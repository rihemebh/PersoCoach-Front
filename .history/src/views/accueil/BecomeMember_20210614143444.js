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
        <Container style={{marginTop: "100px"}}>
        <Row >
            <Col xs="1"></Col>
            <Col xs="3" >
            <img className="img-thumbnail img-responsive"
            src="https://i.pinimg.com/564x/6f/ab/f1/6fabf16b1ce45c39fa3a796032ac967c.jpg?fbclid=IwAR2sk95NkyWVo69UitOplMIs2p5sNxCZHhP3f2A8CFJ39sYrRRrt1flYexA" alt="pic"
             style={{width:'280px', height:'280px'}} />
        </Col>
        <Col xs="8">
      
        <div className="typography-line"  style={{marginTop: "80px"}}>
                <p className="mb-0" >
                    Tired of searching so hard and looking up the so many websites of personal coaches? Here you'll find everyone of them in one place and it is up to you to choose the one for you.
                </p>
                <br />
              
            <Button
                  className="btn-round mr-1"
                  color="info"
                  outline
                  type="button"
                  o,
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