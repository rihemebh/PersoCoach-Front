import React from "react";

// reactstrap components
import { Container } from "reactstrap";

// core components

function AccueilHeader() {
  return (
    <>
      <div
        className="page-header section-dark"
        style={{
          backgroundImage:
            "url(" + require("assets/img/twoTraining.jpg").default + ")",
        }}
      >
        <div className="filter" />
        <div className="content-center">
          <Container>
            <div className="title-brand">
              <h1 className="presentation-title">PersoCoach</h1>
          
            
              </div>
            </div>
            <h2 className="presentation-subtitle text-center">
              All the personal coaches in just one place and it's up to you to choose!
            </h2>
          </Container>
        </div>
        </div>
    </>
  );
}

export default AccueilHeader;