import React, { Component } from 'react'
import {Jumbotron} from 'react-bootstrap'
import { Container, Input, InputGroup ,InputGroupAddon? } from 'reactstrap';
//linear-gradient(#ECE8F7,#FFFFFF)
export default class Jumb extends Component {
    render() {

        const picStyle = {

            height : "90px",
            width : "90px",InputGroupAddon
            margin : "10px"
        };
        return (
            <Jumbotron className=""style={{ backgroundColor: "#F9F9F9", paddingTop: "0px"}}>
                
            <p style={{color: "#707070" , paddingLeft: "30px" , paddingTop: "0px"  , paddingBottom: "3px"}}> Home / Coaches </p>
           <br></br>
           <Container>   <h2 className="text-center text-info">
            Choose Your New life Style
        </h2>
        <br></br>
        <InputGroup className="form-group-no-border">
                    <InputGroupAddon addonType="prepend">
                    <InputGroupAddon/>
                    <Input placeholder="Search" />
                  </InputGroup>
                      <InputGroupText>
                        <i className="nc-icon nc-email-85" />
                      </InputGroupText>
                    
        <Input placeholder="Search.. "></Input>
      </Container>
      
           </Jumbotron>
        )
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