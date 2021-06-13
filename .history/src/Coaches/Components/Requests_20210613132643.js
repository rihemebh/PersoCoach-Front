import axios from "axios";
import ProgramModal from "Programs/components/programModal";
import React, { Component } from "react";
import FontAwesome from "react-fontawesome";
import { Button, Col, Container, Modal, Row, Table } from "reactstrap";
import Details from "./detailsModal";

import { Link, useHistory } from "react-router-dom";

export default class Requests extends Component {
  constructor(props) {
    super(props);

    this.state = {
      request: {},
      requests: [],
      briefProgram: [],
      id: 0
    };
  }

  createProg(request){
    var detailedProgram = {

      name: "no name",
      duration: 0,
      frequency: 0,
      coach: request.coach,
      client: request.client,
      complexity: 0,
    
  }


 axios.put("http://localhost:3000/api/program/add", detailedProgram).then(function (response) {
 // const notify = () => toast.success("Your day program was successfully added !");
 // notify();
  //var button = document.getElementById(this.state.id);
  //console.log(response.data);
return response.data;
  //button.disabled = true;
}.bind(this))
.catch(function (error) {
 // const notify = () => toast.error("We can't send your submission !");
 // notify();
  console.log(error);
})

}  
  

  componentDidMount() {
    axios
      .get(
        "http://localhost:8080/catalog/coach/" +
          this.props.coach.id +
          "/requests"
      )
      .then(
        function (response) {
          this.setState({ requests: response.data });
          console.log(response.data);
        }.bind(this)
      )
      .catch(function (error) {
        console.log(error);
      });
  }
  handelreq() {
    return this.props.req;
  }
  render() {
    var idProg;
    var requests = this.state.requests;
    // requests = this.props.requests;
    var rows = [];
    requests.forEach((request) => {
      rows.push(
        <tr>
          <td>{request.id}</td>
          <td style={{ width: "300px" }}>{request.client.name}</td>
          <td>{request.age}</td>
          <td>{request.gender}</td>
          <td>{request.weight}</td>
          <td>{request.height}</td>
          <td>{request.practice}</td>
          <td>{request.goal}</td>

          {request.status == "pending" ? (
            <>
              <td className="text-secondary">Pending</td>{" "}
              <td>
                <ProgramModal
                  request={request}
                  coach={request.coach}
                  client={request.client}
                />
              </td>
            </>
          ) : request.status == "Waiting for response" ? (
            <>
              <td className="text-warning">Waiting for response</td>
              <td>
                <Details request={request} />
              </td>
            </>
          ) : request.status == "accepted" ? (
            <>
              <td className="text-success">Accepted</td>
              <td>
                { idProg = this.createProg(request)}
                <Link
                  className="text-secondary"
                  to={{ pathname: "/program", request: request , id : this.createProg(request)}}
                >
                  <Button color="link" >
                    <u> Send A Detailed Program</u>
                  </Button>
                </Link>
              </td>
            </>
          ) : (
            <>
              <td className="text-danger">Refused</td>
              <td>
                <Details request={request} />
              </td>
            </>
          )}
          {/** 
  <td className="text-warning">Waiting for response</td>
  <td className="text-success">Accepted</td>
  */}

          <td></td>
        </tr>
      );

      return rows;
    });

    //console.log(this.props.req);
    return (
      <>
        <br></br>
        <br></br>
        <button
          className="text-secondary btn btn-link"
          onClick={this.props.profile}
        >
          Profile
        </button>
        /
        <button className="disabled bg-white text-secondary btn btn-link">
          {" "}
          Requests
        </button>
        <br></br>
        <br></br>
        <Container>
          <Table>
            <thead>
              <tr>
                <th>Request Id </th>
                <th>Client </th>
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
      </>
    );
  }
}
