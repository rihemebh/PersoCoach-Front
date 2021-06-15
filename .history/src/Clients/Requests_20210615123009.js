import axios from "axios";
import ProgramModal from "Programs/components/programModal";
import React, { Component } from "react";
import FontAwesome from "react-fontawesome";
import { Button, Col, Container, Modal, Row, Table } from "reactstrap";
import Details from "../Coaches/Components/detailsModal";
import AuthService from "Authentification/AuthService";



export default class Requests extends Component {
  constructor(props) {
    super(props);

    this.state = {
      request: {},
      requests: [],
      briefProgram: [],
      id: 0,
      progId: 0, 
      currentUserInfo: { id : this.props.client.id}
   

    };

    this.createProg = this.createProg.bind(this)
  }


  componentDidMount() {

    AuthService.getCurrentUser()
    .then(
      response => {
      
        if(response.roles[0].name==="ROLE_COACH"){
          console.log("redirecting..")
                    this.props.history.push({
                     pathname: '/coach-profile/'+response.id});
                    window.location.reload(); 
        }
        this.setState( () => (
          {
            currentUserInfo: response,
          
          }), ()=>{
            axios.get("http://localhost:8080/api/client/"+this.state.currentUserInfo.id+"/requests").then(function (response) {
                this.setState({requests: response.data});
                console.log(response.data);
              }.bind(this))
              .catch(function (error) {
                // handle error
                console.log("error"+ error);
              });

          }) 
      
      }
    )
    .catch(
      error => {
        console.log(error)
      }
    );


     
      console.log(this.props.client)
   
  }
  handelreq() {
    return this.props.req;
  }
  
  createProg(request){
  var id=0;
      var detailedProgram = {

        name: "no name",
        duration: 0,
        frequency: 0,
        request : request,
        coach: request.coach,
        client: request.client,
        complexity: 0,
      
    }
  
  
   axios.put("http://localhost:3000/api/program/add", detailedProgram).then(function (response) {

    console.log(response.data);
   id= response.data;

  }.bind(this))
  .catch(function (error) {
 
    console.log(error);
  })
}

handleResponse(rep,id){
axios.put("http://localhost:8080/api/bprogram/"+id+"/response",{rep : rep}).then(function (response) {

    console.log(response.data);
    window.location.reload();
  }.bind(this))
  .catch(function (error) {
 
    console.log(error);
  })

 // window.location.reload();

}
  render() {
    var requests = this.state.requests;

    var rows = [];
    var id = 0;
    requests.forEach((request) => {
   
      rows.push(
        <tr>
          <td>{request.id}</td>
          <td >  <a href={"/coach/"+prog.coach.id} style={{fontWeight: "bold"}}  >{prog.coach.name} </a>{request.coach.name}</td>
          <td>{request.age}</td>
          <td>{request.gender}</td>
          <td>{request.weight}</td>
          <td>{request.height}</td>
          <td>{request.practice}</td>
          <td>{request.goal}</td>

          {request.status == "pending" ? (
            <>
              <td className="text-secondary">Waiting for response from coach</td>{" "}
              <td>
           
              </td>
            </>
          ) : request.status == "Waiting for response" ? (
            <>
              <td className=""> <Button color="link" className="text-success border-bottom"
               onClick={()=>this.handleResponse("accepted",request.id)}>Accept</Button>
              or<Button color="link "  className="text-danger border-bottom"
              onClick={()=>this.handleResponse("refused",request.id)}
              >Refuse</Button></td>
              <td>
              <Details request={request} />
              </td>
            </>
          ) : request.status == "accepted" ? (
            <>
              <td className="text-success">Accepted</td>
              <td>
              <Details request={request} />
                
               
              </td>
            </>
          ) : request.status == "closed" ? <>
          <td className="">Closed</td>
          <td><Button className="w-75" onClick={this.props.programs}>Go to programs</Button></td> 
          
          </>: (
            <>
              <td className="text-danger">Refused</td>
              <td>
                <Details request={request} />
              </td>
            </>
          )}


          <td></td>
        </tr>
      );

      return rows;
    });
console.log(this.state.requests.length == 0)
    //console.log(this.props.req);
    return (
      <>
   {this.state.requests.length === 0 ? <>
    <div className="text-center">
                        <h6>You haven't subscribed or requested any program yet ! </h6>
                        <br></br>
                        <Button
                          className="btn-round"
                          color="default"
                          outline
                          href="/coaches"
                          type="button"
                          onClick={ () => {this.props.history.push({pathname: '/Coaches'})} }>
                          Consult our coaches catalog </Button>
                    </div>  
   
   </> : 
        <Container style={{
                        background: "inherit",
                       backgroundColor: "rgba(255, 255, 255, .2)",
                      
                    borderRadius: "8px",
                 
                    maxWidth: "1200px",
                    margin:" 20px 0 70px",
                    minWidth: "500px",
                  
                 
                   
                    overflowX: "auto"}}>
          <Table     >
            <thead>
              <tr>
                <th>Request Id </th>
                <th>Coach</th>
                <th>Age</th>
                <th>Gender</th>
                <th>Weight</th>
                <th>Height</th>
                <th>Exercices</th>
                <th>
                  <span style={{ color: "transparent" }}>..............</span>
                  Goal
                  <span style={{ color: "transparent" }}>
                    .........................
                  </span>
                </th>
                <th>status</th>
                <th></th>
              </tr>
            </thead>
            <tbody>{rows}</tbody>
          </Table>
        </Container>
        }
      </>
    );
  }
}