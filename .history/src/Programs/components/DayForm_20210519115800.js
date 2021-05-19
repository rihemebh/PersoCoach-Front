import { AvForm, AvField } from "availity-reactstrap-validation";
import axios from "axios";
import React, { Component } from "react";
import FontAwesome from "react-fontawesome";
import { toast, ToastContainer,Zoom , Bounce } from "react-toastify";
import { 
    Alert,
    Button, 
    Card, 
    Form, 
    Input, 
    Container, 
    Row, 
    Col, 
    Label,
    FormGroup,
    NavLink
    } from "reactstrap";
class DayForm extends Component {

    constructor(props){
        super(props);
        this.state = { 
            nb : this.props.day ,
            restrictionNb: 0,
            extra: false,
            id: "submit"+this.props.day,
            other: false,
            
        
        }
        this.handleValidSubmit = this.handleValidSubmit.bind(this);
        this.handleSelectChange = this.handleSelectChange.bind(this);
    }
  
    handleSelectChange(value){
      console.log(value)
      value == "other" ??
      this.setState({
        other : true
      })

    }
handleValidSubmit(event,values){
  console.log(values.water)
var detailedProgram = {

        name: "no name",
        duration: 0,
        frequency: 0,
        coach: {},
        client: {},
        complexity: values.complexity,
        dailyprogram: [
            {
                day: this.state.nb % 7,
                week: this.state.nb < 7 ? 1 : this.state.nb /7 ,
                breakfast: values.breakfast,
                lunch: values.lunch,
                 dinner: values.dinner,
                extra: this.state.extra ? values.extra : "",
                WaterQuantity: values.water,
                restrictions:values.restrictions,
                videos: values.video,
                activitydesritpion: values.desc
            }
        ]
    }
console.log(detailedProgram);

this.state.nb == 1 ? axios.put("http://localhost:3000/api/program/add", detailedProgram).then(function (response) {
    const notify = () => toast.success("Your day program was successfully added !");
    notify();
    var button = document.getElementById(this.state.id);
 
    button.disabled = true
  }.bind(this))
  .catch(function (error) {
    const notify = () => toast.error("We can't send your submission !");
    notify();
    console.log(error);
  })
  : console.log("not now");
}  
clearDay(){
this.props.clearDay(this.state.nb);
}


render() { 
    console.log(this.state.id);
   console.log(document.getElementById(this.state.id));
        return ( <>
<hr></hr>
              
<ToastContainer 
        draggable={false} 
        transition={Zoom}
        autoClose={4000}
        position="bottom-right"
        hideProgressBar={false}
        />  
                <Row>
                  <Col xs="11" className="text-left">   <h6 className="text-center text-white"><b>Day {this.state.nb}</b> 
                  </h6></Col>
                  {this.state.nb != 1 ? <Col xs="1">
                      <FontAwesome className="far fa-times-circle" name="clear" onClick={this.clearDay.bind(this)}> </FontAwesome></Col>
                      : <></>}
                </Row>
          
                <br></br>
                <AvForm
                backgroundColor="white"
                    onValidSubmit={this.handleValidSubmit}
                    onInvalidSubmit={this.handleInvalidSubmit}
                  >
                          <h6 className="text-white"  >
                    Complexity <span className='text-danger'>*</span> 
                      <AvField  name="complexity" type="number" label="" required />
                      </h6>
                       <h5 className="text-white">Meals</h5>
               <div className="form-inline ">    
               <h6 className="text-white">
                   Breakfast<span className='text-danger'>*</span> 
               <AvField  name="breakfast"className="" type="textarea" label="" required style={{marginTop: "3px", marginRight: "20px"}}/>
              {/** <AvField  name="breakfast"className="" type="" label="" required style={{marginTop: "3px", marginRight: "20px"}}/>
               <AvField  name="breakfast"className="" type="" label=""   style={{marginTop: "3px", marginRight: "20px"}} />*/} 
                  
                      </h6>

                    <h6 className="text-white"  >
                    Lunch <span className='text-danger'>*</span> 
                      <AvField  name="lunch" className="c"  type="textarea" label="" required style={{marginTop: "3px", marginRight: "20px"}} />
                      </h6>
                 
                      <h6 className="text-white"  >
                    Dinner <span className='text-danger'>*</span> 
                      <AvField  name="dinner" className=""  type="textarea" label="" required style={{marginTop: "3px", marginRight: "20px"}} />
                      </h6>
                  { this.state.extra==true ?
                     <h6 className="text-white" style={{marginTop: "10px"}}  >
                        Extra <span className='text-danger'>*</span> 
                      <AvField  name="extra" className=""  type="textarea" label="" required style={{marginTop: "10px", marginRight: "20px"}} />
                      </h6>  :

                     <Button className="btn-round" onClick={()=>{this.setState({extra: true})}} style={{marginTop: "20px",marginLeft: "0px"}} > 
                      <FontAwesome className="fas fa-plus"></FontAwesome> </Button>
                       }
                      </div> 
                   <br></br>
                   <FormGroup>
                      <Label for="exampleSelect">
                        <h6 className="text-white">Water / <small>Day</small> (L) <span className="text-danger">*</span></h6>
                      </Label>
                      <AvField
                      onChange={this.handleSelectChange()}
                        type="select"
                        name="water"
                        id="exampleSelect"
                        required
                      >
                        <option>-- Not selected --</option>
                        <option value="1">1</option>
                        <option value="1.5">1.5</option>
                        <option value="2">2</option>
                        <option value="2.5">2.5</option>
                        <option value="3">3</option>
                        <option value="3.5">3.5</option>
                        <option value="other">other</option>
                      </AvField>
                    </FormGroup>
                   {this.state.other == true ?? <div class="form-inline">
                   <h6 className="text-white">
                   Add water quantity <span className='text-danger'>*</span>
                      <AvField
                        name="other"
                        className="col-lg-12"
                         placeholder=""
                        type="text"
                        required
                        style={{marginTop: "5px", marginRight: "20px", marginBottom: "10px"}}
                      />
                    </h6>
                    {/** <Button className="btn-round"  style={{marginTop: "10px",marginLeft: "10px"}} > 
                      <FontAwesome className="fas fa-plus"></FontAwesome> </Button>    */}  
                   </div>}
                   <div class="form-inline">
                   <h6 className="text-white">
                    Restrictions <span className='text-danger'>*</span>
                      <AvField
                        name="restrictions"
                        className="col-lg-12"
                         placeholder=""
                        type="text"
                        required
                        style={{marginTop: "5px", marginRight: "20px", marginBottom: "10px"}}
                      />
                    </h6>
                    {/** <Button className="btn-round"  style={{marginTop: "10px",marginLeft: "10px"}} > 
                      <FontAwesome className="fas fa-plus"></FontAwesome> </Button>    */}  
                   </div>
                   <h6 className="text-white" >
                    <span style={{marginBottom: "50px"}}>Activity<span className='text-danger'>*</span> <br></br></span>  </h6>
                    <span  className="text-white"><AvField
                        name="video"
                        label="Upload a video"
                         placeholder=""
                         accept="video/*"
                        type="file"

                       
                        required
                        style={{marginTop: "5px", marginRight: "20px", marginBottom: "10px"}}
                         /> </span>  
                 <span  className="text-white">  <AvField
                      name="desc"
                      label= "Or describe it "
                         placeholder=""
                        type="textarea"
                        required
                        style={{marginTop: "5px", marginRight: "20px", marginBottom: "10px"}}
                      />  
                   </span> 
                
                      <div className="">
                        <Button type="submit" id={this.state.id} onValidSubmit={this.handleValidSubmit} >
                          Send the program
                        </Button>
                      </div>
                      <div className="">
           
                      </div>
                    
                 </AvForm>
                 <br></br>
                 

        </> 
            
            
            );
    }
}
 
export default DayForm;