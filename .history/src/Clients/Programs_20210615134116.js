import axios from "axios";
import React, { Component } from "react";
import { Container, Button, Table } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import AuthService from "Authentification/AuthService";
import ReviewModam from "./ReviewModal";
import ReviewModal from "./ReviewModal";
import FontAwesome from "react-fontawesome";

export default class Programs extends Component {
  constructor(props) {
    super(props);

    this.state = {
      programs: [],

      currentUserInfo: { id: this.props.client.id },
    };
  }
  componentDidMount() {
    AuthService.getCurrentUser()
      .then((response) => {
        if (response.roles[0].name === "ROLE_COACH") {
          console.log("redirecting..");
          this.props.history.push({
            pathname: "/coach-profile/" + response.id,
          });
          window.location.reload();
        }
        this.setState(
          () => ({
            currentUserInfo: response,
          }),
          () => {
            axios
              .get(
                "http://localhost:8080/api/programs/" +
                  this.state.currentUserInfo.id
              )
              .then(
                function (response) {
                  this.setState({ programs: response.data });
                  console.log(response.data);
                }.bind(this)
              )
              .catch(function (error) {
                // handle error
                console.log("error" + error);
              });
          }
        );
      })
      .catch((error) => {
        console.log(error);
      });
  }
  render() {
    var programs = this.state.programs;
    console.log(programs);
    // requests = this.props.requests;
    var rows = [];
    programs.forEach((prog) => {
      rows.push(
        <tr>
          <td>{prog.id}</td>
          <td>
            <a
              href={"/coach/" + prog.coach.id}
              style={{ fontWeight: "bold" }}
              className="text-secondary"
            >
              {prog.coach.name}{" "}
            </a>
          </td>
          <td className="text-secondary ">
           In progress
          </td>

          <td>
            <ReviewModal coach={prog.coach} />
            <Button
              color="link"
              href={"/tracking/" + prog.id}
              className="btn-outline-info"
              outline
            >
              Tracking
            </Button>
          </td>
        </tr>
      );

      return rows;
    });

    return (
      <div>
        <Container>
          <button
            className="text-secondary btn btn-link"
            onClick={this.props.profile}
          >
            Profile
          </button>
          /
          <button className="disabled bg-white text-secondary btn btn-link">
            {" "}
            Programs{" "}
          </button>
        </Container>

        <Container
          style={{
            background: "inherit",
            backgroundColor: "rgba(255, 255, 255, .2)",

            borderRadius: "8px",
            maxWidth: "1200px",
            margin: " 20px 0 70px",
            minWidth: "500px",
            overflowX: "auto",
          }}
        >
          <Table>
            <thead>
              <tr>
                <th>Program Id </th>
                <th>Coach</th>
                <th>Status</th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>{rows}</tbody>
          </Table>
        </Container>
      </div>
    );
  }
}
