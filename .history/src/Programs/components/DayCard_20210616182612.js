import { AvCheckbox } from "availity-reactstrap-validation";
import React, { Component } from "react";
import { Table } from "react-bootstrap";
import AuthService from "Authentification/AuthService";
import {
  Card,
  Button,
  CardHeader,
  CardFooter,
  CardBody,
  CardTitle,
  CardText,
  Col,
  Row,
  Container,
  Progress,
} from "reactstrap";
import FontAwesome from "react-fontawesome";

import VideoPlayer from "./VideoPlayer";
import axios from "axios";

export default class DayCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      level: this.props.program.progress,
      status:  this.props.program.status,
      user: this.props.user,

    };
  }
  
  handleEdit(){

    this.setState({status: "editing", level: 0},()=> console.log(this.state.status));

  }

  handleSave() {
    axios.get(
      "http://localhost:3000/api/program/" +
        this.props.id +
        "/day/progress?progress=" +
        this.state.level+
        "&day=" + this.props.program.day
        
    ).then((response)=>{
        console.log(response)
        window.location.reload()
    }).catch((error)=> console.log("error",error));
  }

  handleCheck(e) {
    var level;
    if (e.target.checked == true) {
      level = this.state.level + 16.5;
      console.log();
      this.setState({
        level: level,
      });
    } else {
      level = this.state.level - 16.5;
      console.log();
      this.setState({
        level: level,
      });
    }
  }
  render() {
     console.log(this.state.user)
           
            
    return (
      <div>
        <Card
          className=""
          style={{
            background: "inherit",
            backgroundColor: "rgba(255, 255, 255, .2)",
            borderRadius: "8px 8px",
            color: "black",
            maxWidth: "1200px",
            width: "100%",
            height: "590px",
            maxHeight: "700",
            padding: "60px",
            marginTop: "40px",
            overflowY: "auto",
          }}
        >
     {this.state.user.roles[0].name === "ROLE_COACH"? <></>:this.state.status == "completed"? <>
     <Col className="text-right">
            <Button
              className="small text-white btn-round"
              color="danger"
              outline
              onClick={this.handleEdit.bind(this)}
            >
              Reset
            </Button>
          </Col>
     
     </>: <Col className="text-right">
            <Button
              className="small text-white btn-round"
              color="danger"
              outline
              onClick={this.handleSave.bind(this)}
            >
              Save
            </Button>
          </Col> }     
          <br></br>
          <CardHeader tag="h6" className="">
            Day {this.props.program.day}
          </CardHeader>
          <CardBody>
            <CardTitle className="" tag="h5">
              <div className="text-center text-white">
                {this.state.level == 99
                  ? "You did it !"
                  : this.state.level + "% Completed"}{" "}
              </div>
              <br />
              {this.state.level < 25 ? (
                <Progress color="danger" value={this.state.level}></Progress>
              ) : this.state.level < 50 ? (
                <Progress color="warning" value={this.state.level}></Progress>
              ) : this.state.level < 75 ? (
                <Progress color="info" value={this.state.level}></Progress>
              ) : (
                <Progress
                  color="success"
                  value={this.state.level + 1}
                ></Progress>
              )}
            </CardTitle>
            <CardText className="text-white">
              <br />
              <Row className="text-white">
                <Col>
                  <Table className="text-white">
                    <thead>
                      <tr>
                        <th>Meals</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                        {this.state.status == "completed"? <></>:  <input
                            type="checkbox"
                            className="form-check-​input"
                            onChange={this.handleCheck.bind(this)}
                          ></input>}{" "}
                          Breakfast : {this.props.program.breakfast} <br />
                        </td>
                      </tr>
                      <tr>
                        <td>
                        {this.state.status == "completed"? <></>: <input
                            type="checkbox"
                            onChange={this.handleCheck.bind(this)}
                          ></input>}{" "}
                          Lunch : {this.props.program.lunch} <br />
                        </td>
                      </tr>
                      <tr>
                        <td>
                        {this.state.status == "completed"? <></>:  <input
                            type="checkbox"
                            className="form-check-​input"
                            onChange={this.handleCheck.bind(this)}
                          ></input>}
                          Dinner : {this.props.program.dinner} <br />
                        </td>
                      </tr>
                      <tr>
                        <td>
                        {this.state.status == "completed"? <></>:  <input
                            type="checkbox"
                            className="form-check-​input"
                            onChange={this.handleCheck.bind(this)}
                          ></input>}
                          Extra :{" "}
                          {this.props.program.extra == ""
                            ? " No extra"
                            : this.props.program.extra}{" "}
                          <br />
                        </td>
                      </tr>
                      <tr>
                        <td>
                          {" "}
                          {this.state.status == "completed"? <></>:  <input
                            type="checkbox"
                            className="form-check-​input"
                            onChange={this.handleCheck.bind(this)}
                          ></input>}
                          Water: {this.props.program.waterQuantity} L
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </Col>
                <Col>
                  <Table className="text-white">
                    <thead>
                      <tr>
                        <th>Activities</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                        {this.state.status == "completed"? <></>:<>  <input
                            type="checkbox"
                            className="form-check-​input"
                            onChange={this.handleCheck.bind(this)}
                          ></input>
                          Exercices <br /></> }
                          <br />
                          <VideoPlayer
                            videoId={this.props.program.videos.fileId}
                            description={this.props.program.activitydesritpion}
                          ></VideoPlayer>
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </Col>
                <Col>
                  <Table className="text-white">
                    <thead>
                      <tr>
                        <th>Restrictions</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          {" "}
                          {this.props.program.restrictions} <br />
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </Col>
              </Row>
            </CardText>
          </CardBody>
        </Card>
      </div>
    );
  }
}
