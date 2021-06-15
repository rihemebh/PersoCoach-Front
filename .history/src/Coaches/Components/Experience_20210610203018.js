import React, { Component } from 'react';
import { AvForm, AvField } from "availity-reactstrap-validation";
import { Button, Col, Container, Modal, Row ,Table, FormGroup } from "reactstrap";
import FontAwesome from "react-fontawesome";

export default class Experience extends Component {
    render() {
        return (
            <div>
               <div className="form-inline ">    
               <h6 className="">
                   Experience name 
               <AvField  name="expname"className="" type="text" label="" required style={{marginTop: "3px", marginRight: "20px"}}/>
            
                  
                      </h6>

                    <h6 className=""  >
                    Description 
                      <AvField  name="expdesc" className="c"  type="textarea" label="" required style={{marginTop: "3px", marginRight: "20px"}} />
                      </h6>
               
                
                      </div> 
            </div>
        )
    }
}
