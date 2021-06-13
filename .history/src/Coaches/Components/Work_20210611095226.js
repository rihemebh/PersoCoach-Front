import React, { Component } from "react";
import { AvField } from "availity-reactstrap-validation";
import { Col, Row } from "reactstrap";
import FontAwesome from "react-fontawesome";

export default class Work extends Component {

    clear(){
        console.log("clear");
    }
  render() {
    return (
      <div>
        <Row>
          <Col xs="11" className="text-left">
            {" "}
            <h6 className="text-center text-white"></h6>
          </Col>
         
            <Col xs="1">
              <FontAwesome
                className="far fa-times-circle"
                name="clear"
                onClick={this.clear.bind(this)}
              >
                {" "}
              </FontAwesome>
            </Col>
    
       
        </Row>

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
