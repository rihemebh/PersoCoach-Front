import React from 'react';
import CarouselCoach from "views/accueil/CarouselCoach.js";
import {
    Container,
    Row,
    Col,
    Button
  } from "reactstrap";
  
const BecomeCoach = () =>{
    return(
        <div style={{backgroundColor:'#D5EDF2'}}>
        <Container>
        <Row >
            <Col>
        <CarouselCoach/>
        </Col>
        <Col>
        <br></br> <br></br><br></br><br></br> <br></br>
        <div className="typography-line">
                <p className="mb-0" >
                 The whole fitness industry is undergoing an evolution.<br></br>
                 So it is your cue to join the biggest Personal Coaches's network and let everyone hear about you. <br>
                  </br> We give you the chance to offer your services to all our customers. <br>
               </br> Persuade them with the best of your programs on the free trial.
               <br></br>
               <br></br>
               <br></br>
                     
                <Button
                  className="btn-round mr-1"
                  color="danger"
                  outline
                  type="button"
                  style={{alignContent:'center'}}
                >
                  Apply to coach
                </Button>
                </p>
                <br />
              
            </div>
            
        </Col>
        </Row>
        </Container>
        </div>
    )
}
export default BecomeCoach;