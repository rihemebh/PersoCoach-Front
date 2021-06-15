import React, { Component } from 'react';
import { AvForm, AvField } from "availity-reactstrap-validation";
import { Button, Col, Container, Modal, Row ,Table, FormGroup } from "reactstrap";
import FontAwesome from "react-fontawesome";

export default class Experience extends Component {
    constructor(props){
        super(props);
        this.state={
           nb: this.props.nb,
           desc: "",
        }

    }
    handlechange(e){
        this.props.addExp(e.target.value);
      
      }
 
    render() {
        return (
            <div>
               <div className="form-inline ">    
               <h6 className="">
                   Experience name 
               <AvField  name="exp" className="" type="text" label=""  style={{marginTop: "3px", marginRight: "20px"}}/>
            
                  
                      </h6>

                    <h6 className=""  >
                    Description 
                      <AvField  name="expdesc" className="c"  type="textarea" label="" 
                       onChange={this.handlechange}
                       style={{marginTop: "3px", marginRight: "20px"}} />
                      </h6>
              
             <Button type="submit"></Button>
             <Button type="reset"></Button>
                
                      </div> 
                    
            </div>
        )
    }
}
