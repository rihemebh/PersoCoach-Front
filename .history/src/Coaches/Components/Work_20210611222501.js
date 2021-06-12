import React, { Component } from "react";
import { AvField } from "availity-reactstrap-validation";
import { Col, Row } from "reactstrap";
import FontAwesome from "react-fontawesome";

export default class Work extends Component {

    clear(){
        console.log("clear");
    }
    handlechange(event,value){
      //this.props.addExp(value);
      console.log()
    }
  render() {
    return (
      <div>
 
        <br></br>
        <div className="form-inline ">
          <h6 className="">
            Work :
            <AvField
              name="workname"
              className=""
              type="text"
              label=""
              style={{ marginTop: "3px", marginRight: "20px" }}
            />
          </h6>

          <h6 className="">
            Description
            <AvField
              name="workdesc"
              className="c"
              onChange={this.handlechange}
              type="textarea"
              label=""
              style={{ marginTop: "3px", marginRight: "20px" }}
            />
          </h6>
        </div>
      </div>
    );
  }
}
