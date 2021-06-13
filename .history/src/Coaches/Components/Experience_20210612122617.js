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
    handlechange(event, values){
     var exp = {
         name : expname,
         description: expdesc,
     }
        this.props.addExp(exp);
      
      }

      handlereset(e){

      }
 
    render() {
        console.log(this.props.addExp());
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
                       
                       style={{marginTop: "3px", marginRight: "20px"}} />
                      </h6>
              
             <Button  type="submit" style = {{margin : "10px"}} onClick={this.handlechange}>Add</Button>
             <Button color="link" type="reset" onClick={this.handlereset}>Reset</Button>
                
                      </div> 
                    
            </div>
        )
    }
}
