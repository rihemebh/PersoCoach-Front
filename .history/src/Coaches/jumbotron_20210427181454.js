import React, { Component } from "react";
import { Jumbotron } from "react-bootstrap";
import FontAwesome from "react-fontawesome";
import {
  Container,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
} from "reactstrap";
//linear-gradient(#ECE8F7,#FFFFFF)
export default class Jumb extends Component {

  constructor(props){
    super(props);
    this.state={
      key: "",
    }
  }

  render() {
    const picStyle = {
      height: "90px",
      width: "90px",
      margin: "10px",
    };
    //text-shadow: 2px 2px #ff0000;
    return (
      <Jumbotron
        className=""
        style={{ background: "url(ssets/img/coach3.jpeg)", paddingTop: "0px" }}
      >
        <p
          style={{
            color: "#707070",
            paddingLeft: "30px",
            paddingTop: "0px",
            paddingBottom: "3px",
          }}
        >
          {" "}
          Home / Coaches{" "}
        </p>
        <br></br>
        <Container>
          {" "}
          <h2
            className="text-center text-info "
            style={{ textShadow: "3px 5px 5px #F9F9F9" }}
          >
            Hello PersoCoachers !
          </h2>
          <br></br>
      <InputGroup className="form-group-no-border">
                    <InputGroupAddon addonType="prepend">
                    </InputGroupAddon>
                 
                    <Input placeholder="Search.." />
                    <InputGroupText className="border">
                        <FontAwesome className="text-info fa-search"><a></a></FontAwesome>
                        
                      </InputGroupText>
                  </InputGroup>
                      
      <small className="" style={{color: '#d9d9d9'}}>You can search by names and types</small>
         
        </Container>
      </Jumbotron>
    );
  }
}
/*      <div className="topCoaches Container mr-auto" style={{paddingTop: "50px", paddingLeft: "0px"}}>
                <div className="row d-flex justify-content-center ">
                <div className="topcoach "><img className="img-circle img-no-padding img-responsive" src={require("assets/img/coach3.jpeg").default}  style={picStyle}></img></div>
                <div className="topcoach "><img className="img-circle img-no-padding img-responsive" src={require("assets/img/Coach.jpeg").default} style={picStyle}></img></div>
                <div className="topcoach"><img className="img-circle img-no-padding img-responsive" src={require("assets/img/coach2.jpeg").default} style={picStyle}></img></div>
                 </div>
<br></br>
          

            </div>
            <h5 className="text-center" style={{color : "#707070" }} > Top Coaches </h5>*/
