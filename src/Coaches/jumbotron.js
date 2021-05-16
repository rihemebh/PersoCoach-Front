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
     
    }
  
    this.handleSearch= this.handleSearch.bind(this);
  }
  handleSearch = (e)=>{
    this.props.updatekey(e.target.value)
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
        style={{ backgroundColor: 'white' , paddingTop: "0px" }}
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
                    <Input placeholder="Search.."  onChange={this.handleSearch} />
                   <button className="btn-sm btn-light border"  >
                  <FontAwesome className="text-secondary fa-search" >
                    </FontAwesome>
        
                     </button> 
                  </InputGroup>
                      
      <small className="" style={{color: '#d9d9d9'}}>You can search by names or keys</small>
        
        </Container>
      </Jumbotron>
    );
  }
}
   
