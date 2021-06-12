import React, { Component } from 'react'
import FontAwesome  from "react-fontawesome";
import ''
import { Label , FormGroup ,Input } from "reactstrap";

export default class Filter extends Component {
    render() {
        const style = {
            color: "#d9d9d9", 
            fontSize : "25px",
            marginRight: "10px"
        }
        return (
            <div   >
              
                <hr></hr>
                    <div style={{ margin: "10px"}}><b>Rate</b></div>
                    
                    
                    
        <FontAwesome className="far fa-star " style={style}></FontAwesome>
         <FontAwesome className=" fa-star " style={style}></FontAwesome>
         <FontAwesome className="far fa-star " style={style}></FontAwesome>
         <FontAwesome className=" fa-star " style={style}></FontAwesome>
         <FontAwesome className="far fa-star " style={style}></FontAwesome>
         
                    <hr></hr>
                    <div style={{ margin: "10px"}}>Gender</div>

                    <FormGroup check>
                <Label check>
                  <Input defaultValue="" type="checkbox" />
                  Man <span className="form-check-sign" />
                 </Label>
                 </FormGroup>
                 <FormGroup check>
                <Label check>
                  <Input defaultChecked defaultValue="" type="checkbox" />
                  Women <span className="form-check-sign" />
                </Label>
              </FormGroup>
                    <hr></hr>
         
                    <div style={{ margin: "10px"}}>Specialty </div>
                    <div className="form-check-radio">
                <Label check>
                  <Input
                    defaultChecked
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
                    defaultChecked
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
                    defaultChecked
                    defaultValue="option2"
                    id="exampleRadios2"
                    name="exampleRadios"
                    type="radio"
                  />
                  Both <span className="form-check-sign" />
                </Label>
              </div>
                    <hr></hr>
            </div>
        )
    }
}
