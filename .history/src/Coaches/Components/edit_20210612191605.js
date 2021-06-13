import { AvForm, AvField } from "availity-reactstrap-validation";
import ProgramModal from "Programs/components/programModal";
import React, { Component } from "react";
import FontAwesome from "react-fontawesome";
import { toast, ToastContainer,Zoom , Bounce } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
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
      works: this.props.coach.workExp, 
      exp1  : {
        id : "",
        name : "",
        description : ""
    },
    work1 : {
      name : "",
      description : ""
  },
      exp: this.props.coach.acadamicExp,
      work: [],
      coach: this.props.coach,

    };

    this.addExp = this.addExp.bind(this);
    this.addWork = this.addWork.bind(this);
    this.clearWork = this.clearWork.bind(this);
    this.clearExp = this.clearExp.bind(this);
    this.handleDelete = this.handleDelete.bind(this)
    this.handleValidSubmit = this.handleValidSubmit.bind(this)
 
  }
  handleValidSubmit(event, values){
    event.preventDefault()
   const url =this.state.coach.url;
   const experience = this.state.exp;
  const work = this.state.work;   

console.log("update");
  axios.put("http://localhost:8080/catalog/coach/update/"+this.state.coach.id,{
    id: this.state.coach.id,
    name: values.name,
    type: values.type,
    gender: values.gender,
    description : values.desc,
    url : url,
    acadamicExp: experience,
    workExp: work,
  }).then(function (response) {
     
      const notify = () => toast.success("Your profile was updated successfully !");
      notify();
      this.props.profile();
      console.log(response);
    }.bind(this))
    .catch(function (error) {
      const notify = () => toast.error("Your profile failed to update ");
      notify();
      console.log(error);
    });

  
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
  handlenamechange(e){
    var exper = this.state.exp1;
    exper.name = e.target.value;
    exper.description = this.state.exp1.description;
 
    console.log(exper)

this.setState({exp1 : exper})


}
handleworknamechange(e){
  var w = this.state.work1;
  w.name = e.target.value;
  w.description = this.state.work1.description;

  console.log(w)

this.setState({work1 : w})
}

handledescchange(e){
    var exper = this.state.exp1;
    exper.description = e.target.value;
    exper.id = Date.now()+"0";
    var exper1 = this.state.exp;
    exper1.push(exper); 
this.setState({exp1 : exper, exp : exper1, experience: this.state.experience -1})

}
handleworkdescchange(e){
  var w = this.state.work1;
  w.description = e.target.value;
  w.id = Date.now()+"1";
  var w2 = this.state.works;
  w2.push(w);
  console.log(w)
this.setState({work1 : w, works : w2 , work: this.state.work-1});

}

handleDelete(id){

 console.log("delete "+id);

 var exp = this.state.works;
 exp.forEach(e => {
   if(e.id == id)  exp.remove(e): ;
 });

}

  render() {
    var experiences = [];
    for (let i = 0; i < this.state.experience; i++) {
      experiences.push(<div>
        <div className="form-inline ">    
        <h6 className="">
            Experience name 
            <br></br>
        <input  name={"exp"+i} className="form-control" type="text"   onBlur={this.handlenamechange.bind(this)} style={{marginTop: "3px", marginRight: "20px"}}/>
     
           
               </h6>

             <h6 className=""  >
             Description  <br></br>
               <input  name={"expdesc"+i} className="form-control"  type="textarea" label="" 
                onBlur={this.handledescchange.bind(this)}
                style={{marginTop: "3px", marginRight: "20px"}} />
               </h6>
       
               </div> 
             
     </div>);

    
    }
    var works = [];
    for (let i = 0; i < this.state.work; i++) {
      works.push( <div className="form-inline ">
      <h6 className="">
        Work :
        <AvField
          name={"workname"+i}
          className="form-controle"
          onBlur={this.handleworknamechange.bind(this)}
          type="textarea"
          label=""
          style={{ marginTop: "3px", marginRight: "20px" }}
        />
      </h6>

      <h6 className="">
        Description
        <AvField
          name={"workdesc"+i}
          className="form-controle"
          onBlur={this.handleworkdescchange.bind(this)}
          type="textarea"
       
          style={{ marginTop: "3px", marginRight: "20px" }}
        />
      </h6>
    </div>);
    }


    return (
      <>
           <ToastContainer 
        draggable={false} 
        transition={Zoom}
        autoClose={4000}
        position="bottom-center"
        hideProgressBar={false}
        />
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
                  <option selected="selected">Female</option>
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
             <AvField  name="expname" className=""  width="200px" type="textarea" label="" value={exp.name}  style={{marginTop: "3px", marginRight: "20px"}}/>
          
                
                    </h6>

                  <h6 className=""  >
                  Description 
                    <AvField  name="expdesc" className="c" value={exp.description}  type="textarea" label=""  style={{marginTop: "3px", marginRight: "20px"}} />
                    </h6>
            
           
         <Button color="link" onClick={()=>this.handleDelete(exp.id)} >
           <FontAwesome className="fa-minus-square"></FontAwesome>
         </Button>
              
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
             <AvField  name="expname"className=""  width="200px" type="textarea" label="" value={exp.name}  style={{marginTop: "3px", marginRight: "20px"}}/>
          
                
                    </h6>

                  <h6 className=""  >
                  Description 
                    <AvField  name="expdesc" className="c" value={exp.description}  type="textarea" label=""  style={{marginTop: "3px", marginRight: "20px"}} />
                    </h6>
            
                    <Button color="link" onClick={()=>this.handleDelete(exp.id)} >
           <FontAwesome className="fa-minus-square"></FontAwesome>
         </Button>
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
