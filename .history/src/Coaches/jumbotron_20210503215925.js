import React, { Component } from "react";
import { Jumbotron } from "react-bootstrap";
import FontAwesome from "react-fontawesome";
import {
  Button,
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
    this.updateInputValue=this.updateInputValue.bind(this);
    this.handleSearch= this.handleSearch.bind(this);
  }
  handleSearch = ()=>{
    this.props.updatekey(this.state.key)}

updateInputValue = (e)=>
{ const x = e.target.value;

  this.setState({
    key : x,
  });

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
                    <Input placeholder="Search.." onChange={this.updateInputValue} />
                   <button className="btn-sm " style={{color:"lightgray"}} outline >
                  <FontAwesome className="text-secondary fa-search" >
                    </FontAwesome>
                        
                     </Button> 
                  </InputGroup>
                      
      <small className="" style={{color: '#d9d9d9'}}>You can search by names or keys</small>
        
        </Container>
      </Jumbotron>
    );
  }
}
   
