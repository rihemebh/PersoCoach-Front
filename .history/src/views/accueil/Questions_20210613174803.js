import React from 'react';
import {
    Container,
    Row,
    Col,
  } from "reactstrap";
const Questions =() =>{
    return(
        <div className="section"  >
        <Container className="text-center" style={{height: ""}}>
          <Row>
            <Col className="ml-auto mr-auto text-center" md="8">
              <h2 className="title">Have Questions?</h2>
              <p className="description">
                Cause if you do, it can be yours for Free. Hit the button below
                and download it. Start a new project or give an old Bootstrap 4
                project a new look.
              </p>
            </Col>
</Row>
</Container>
        </div>
    )
}
export default Questions;