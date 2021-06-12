import { AvForm, AvField } from "availity-reactstrap-validation";
import ProgramModal from "Programs/components/programModal";
import React, { Component } from "react";
import FontAwesome from "react-fontawesome";
import {
  Button,
  Col,
  Container,
  Modal,
  Row,
  Table,
  FormGroup,
} from "reactstrap";
import Experience from "Coaches/Components/Experience";
import Work from "Coaches/Components/Work";
import axios from "axios";

export default class Edit extends Component {
  constructor(props) {
    super(props);

    this.state = {
      experience: 0,
      work: 0,
      works: [], 
      coach: this.props.coach
    };

    this.addExp = this.addExp.bind(this);
    this.addWork = this.addWork.bind(this);
    this.clearWork = this.clearWork.bind(this);
    this.clearExp = this.clearExp.bind(this);
  }
  handleValidSubmit(){
    const coach={

    }

    axios.put("https://localhost/coach/update/")
  }
  addExp() {
    this.setState({ experience: this.state.experience + 1 });
  }

  clearWork(){
    
    this.setState({ work: this.state.work - 1 });
  }
  clearExp(){
    this.setState({ experience: this.state.experience - 1 });
  }
  addWork() {
   
    this.setState({ work: this.state.work + 1 });
  }
  handleProfile(){
    this.props.profile(false);
  }

  render() {
    var experiences = [];
    for (let i = 0; i < this.state.experience; i++) {
      experiences.push(<Experience />);
    }
    var works = [];
    for (let i = 0; i < this.state.work; i++) {
      works.push(<Work />);
    }


    return (
      <>
      <Container> 
      <button className="text-secondary btn btn-link" onClick={this.props.profile} >Profile</button>
     /<button className="disabled bg-white text-secondary btn btn-link">   Edit Profile </button>
      
      </Container>
      
        <AvForm
          backgroundColor="white"
          onValidSubmit={this.handleValidSubmit}
          onInvalidSubmit={this.handleInvalidSubmit}
        >
         
           
      
        
            
            <h4 className="text-center">Update Profile </h4>

        
          <hr></hr>
          <div className="form-inline ">
            <h6 className="">
              Email
              <AvField
                name="email"
                className=""
                type="text"
                label=""
                value={this.state.coach.email}
                style={{ marginTop: "3px", marginRight: "20px" }}
              />
            </h6>

            <h6 className="">
              Password
              <AvField
                name="password"
                className="c"
                type="password"
                value={this.state.coach.password}
                label=""
                style={{ marginTop: "3px", marginRight: "20px" }}
              />
            </h6>
          </div>

          <hr></hr>
          <div className="form-inline ">
            <h6 className="">
              Full Name
              <AvField
                name="name"
                className=""
                type="text"
                value={this.state.coach.name}
                label=""
                style={{ marginTop: "3px", marginRight: "20px" }}
              />
            </h6>

            <h6 className="">
              Coche type
              <AvField
                name="type"
                className="c"
                type="text"
                value={this.state.coach.type}
                label=""
                style={{ marginTop: "3px", marginRight: "20px" }}
              />
            </h6>

            <FormGroup>
              <h6>
                Gender
                <AvField type="select" name="select" id="exampleSelect">
                  <option>-- Not selected --</option>
                  <option >Male</option>
                  <option>Female</option>
                </AvField>
              </h6>
            </FormGroup>
          </div>

          <hr></hr>
          <h6 className="">
            Description
            <AvField
              name="desc"
              className="c"
              type="textarea"
              value={this.state.coach.description}
              label=""
              style={{ marginTop: "3px", marginRight: "20px" }}
            />
          </h6>
          <h5> Acadamic Experience </h5>

          {this.state.coach.acadamicExp.map((exp,index)=>{
           return  <div className="form-inline ">    
             <h6 className="">
                 Experience name 
             <AvField  name="expname"className=""  width="200px" type="textarea" label="" value={"Experience "+(index+1)}  style={{marginTop: "3px", marginRight: "20px"}}/>
          
                
                    </h6>

                  <h6 className=""  >
                  Description 
                    <AvField  name="expdesc" className="c" value={exp}  type="textarea" label=""  style={{marginTop: "3px", marginRight: "20px"}} />
                    </h6>
            
           
         
              
                    </div> 
                  
          })}

          {experiences}
          <Button
            className="btn-round"
            onClick={this.addExp}
            outline
            color="info"
            style={{ marginTop: "20px", marginLeft: "0px" }}
          >
            <FontAwesome className="fas fa-plus"></FontAwesome> Add another
            experience{" "}
          </Button>
          {this.state.experience > 0 ? 
               <Button color="link" className="" onClick={this.clearExp}>     
               <FontAwesome
                className="far fa-times-circle"
                name="clear"
                
                style={{marginTop :"28px"}}
              >
                {" "}
              </FontAwesome>clear</Button> : <></>
 }    

          <br></br>
          <hr></hr>
          <h5> Work Experience </h5>

          {this.state.coach.workExp.map((exp,index)=>{
           return  <div className="form-inline ">    
             <h6 className="">
                 Experience name 
             <AvField  name="expname"className=""  width="200px" type="textarea" label="" value={"Experience "+(index+1)}  style={{marginTop: "3px", marginRight: "20px"}}/>
          
                
                    </h6>

                  <h6 className=""  >
                  Description 
                    <AvField  name="expdesc" className="c" value={exp}  type="textarea" label=""  style={{marginTop: "3px", marginRight: "20px"}} />
                    </h6>
            
           
         
              
                    </div> 
                  
          })}

          {works}
          <Button
            className="btn-round"
            onClick={this.addWork}
            outline
            color="info"
            style={{ marginTop: "20px", marginLeft: "0px" }}
          >
            <FontAwesome className="fas fa-plus"></FontAwesome> Add another work{" "}
          </Button>
               {this.state.work > 0 ? 
               <Button color="link" className="" onClick={this.clearWork}>     
               <FontAwesome
                className="far fa-times-circle"
                name="clear"
                
                style={{marginTop :"28px"}}
              >
                {" "}
              </FontAwesome>clear</Button> : <></>
 }    
              <br></br>
              <div className=""> 
            <Button
              type="submit"
              id={this.state.id}
             
              onValidSubmit={this.handleValidSubmit}
              style={{ margin: "20px"}}
            >
              Update
            </Button>
          </div>
          <div className=""></div>
        </AvForm>
      </>
    );
  }
}
