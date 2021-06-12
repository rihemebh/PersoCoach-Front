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
           exp  : {
            name : "",
            description : ""
        }
        }

    }
handlenamechange(e){
    var exper = this.state.exp;
    exper.name = e.target.value;
this.setState({exp : exper})}

handledescchange(e){
    var exper = this.state.exp;
    exper.description = e.target.value;
this.setState({exp : exper})

}
    handlechange(){
    
       console.log(this.props);
      
      }

      handlereset(e){

      }
 
    render() {
     
        return (
            <div>
               <div className="form-inline ">    
               <h6 className="">
                   Experience name 
               <AvField  name="exp" className="" type="text" label=""  onBlur={this.handlenamechange} style={{marginTop: "3px", marginRight: "20px"}}/>
            
                  
                      </h6>

                    <h6 className=""  >
                    Description 
                      <AvField  name="expdesc" className="c"  type="textarea" label="" 
                       onBlur={this.handledescchange}
                       style={{marginTop: "3px", marginRight: "20px"}} />
                      </h6>
              
            
                <Button 
                      </div> 
                    
            </div>
        )
    }
}
