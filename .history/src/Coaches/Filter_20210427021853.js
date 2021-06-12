import React, { Component } from "react";
import FontAwesome from "react-fontawesome";
import "assets/css/filter.css";
import { Label, FormGroup, Input, Button } from "reactstrap";
import { IconCheckbox } from "react-icon-checkbox";
export default class Filter extends Component {

  constructor(props){
    super(props);

    this.state={
        rate: 5,
        checkedRate : [false, false,false,false,false] ,
        checkedGender: [false,false],
        checkedGender: [false,false],
        gender:'',
        type:'',

    }

    this.state.handleFilter=this.handleFilter.bind(this);
    this.state.handleRate=this.handleRate.bind(this);
    this.state.handleGender=this.handleGender.bind(this);
    this.state.handleType=this.handleType.bind(this);
  }
handleFilter(){
  
}

handleRate(){

}
handleGender(){

}
handleType(){

}
  render() {
    const style = {
      color: "#d9d9d9",
      fontSize: "25px",
      marginRight: "10px",
    };

    return (
      <div>
        <hr></hr>
        <div style={{ margin: "10px" }}>
          <b>Rate</b>
        </div>
        <FormGroup check>
          <Label check>
            <Input defaultValue="" type="checkbox" />
            <FontAwesome className="fa-star form-check-sign" style={style}></FontAwesome>
          </Label>
        </FormGroup>

        <FontAwesome className="fa-star" style={style}></FontAwesome>
        <FontAwesome className="fa-star " style={style}></FontAwesome>
        <FontAwesome className="fa-star " style={style}></FontAwesome>
        <FontAwesome className="fa-star " style={style}></FontAwesome>
        <FontAwesome className="fa-star " style={style}></FontAwesome>

        <hr></hr>
        <div style={{ margin: "10px" }}>Gender</div>

        <FormGroup check>
          <Label check>
            <Input defaultValue="" type="checkbox" />
            Man <span className="form-check-sign" />
          </Label>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input defaultValue="" type="checkbox" />
            Women <span className="form-check-sign" />
          </Label>
        </FormGroup>
        <hr></hr>

        <div style={{ margin: "10px" }}>Specialty </div>
        <div className="form-check-radio">
          <Label check>
            <Input
              defaultValue="option2"
              id="exampleRadios2"
              name="exampleRadios"
              type="radio"
            />
            Sport <span className="form-check-sign" />
          </Label>
        </div>
        <div className="form-check-radio">
          <Label check>
            <Input
              defaultValue="option2"
              id="exampleRadios2"
              name="exampleRadios"
              type="radio"
            />
            Nutrition <span className="form-check-sign" />
          </Label>
        </div>
        <div className="form-check-radio">
          <Label check>
            <Input
              defaultValue="option2"
              id="exampleRadios2"
              name="exampleRadios"
              type="radio"
            />
            Both <span className="form-check-sign" />
          </Label>
        </div>
        <hr></hr>
        <Button className="btn-sm " color="default" outline onClick={()=>this.handleFilter()}>
          Filter
        </Button>
      </div>
    );
  }
}
