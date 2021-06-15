import React from 'react';
import CarouselCoach from "views/accueil/CarouselCoach.js";
import {
    Container,
    Row,
    Col,
  } from "reactstrap";
  
const What = () =>{
    return(
        <>
        <Container style={{height: "200px"}}>
        <Row >
        
        <Col xs="6" >
       
        <div className="typography-line" style={{marginTop: "70px"}}>
            <h4>What is PersoCoach? </h4>
                <p className="mb-0" >
                PersoCoach is where coaches and fitness seekers meet and schedule their workout programs.<br></br>
                Tryout tips, success stories,or the best recipes- PersoCoach has you covered up.
                </p>
                <br />
              
            </div>
        </Col>
        <Col xs="2"></Col>
        <Col xs="4">
   
        <img
                  alt="..."
                  
                  src={require("assets/img/whatTransparentresized.png").default}
                />
            
        </Col>
        </Row>
        </Container>
        </>
    )
}
export default What;