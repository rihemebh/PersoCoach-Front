import React, { Component } from "react";
import FontAwesome from "react-fontawesome";
import {
  Card,
  CardBody,
  CardImg,
  CardTitle,
  CardText,
  Col,
  CardLink,
  Row,
  CardSubtitle,
  CardFooter,
  Container,
} from "reactstrap";
import { Link } from "react-router-dom";
import ReviewModal from "./ReviewModal";
export default class CoachCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      reviews: [],
      id: props.id,
      name: props.name ?? "unnamed",
      img: props.img,
      rate: props.rate,
    };
  }
  async componentDidMount() {
    const response1 = await fetch(
      "http://localhost:3000/catalog/coach/" + this.state.id + "/review"
    );

    const body1 = await response1.json();
    this.setState({ reviews: body1 });
  }

  render() {
    const url = this.state.img;
    let nb = this.state.rate;
    const rate = [];
    for (let i = 0; i < 5; i++) {
      if (nb > 0) {
        rate.push(
          <FontAwesome
            className="fas fa-star text-warning"
            name="star"
          ></FontAwesome>
        );
        nb--;
      } else {
        rate.push(
          <FontAwesome
            className="far fa-star "
            name="star"
            style={{ color: "#d9d9d9" }}
          ></FontAwesome>
        );
      }
    }
    const divStyle = {};
    return (
      <Col height="auto">
        <Card className="" style={{ height: "275px", width: "218px" }}>
     
          <CardImg src={url} style={{ height: "130px" }}/> 
          <CardBody>
           
            <CardTitle tag="h6">{this.state.name}   </CardTitle>
            <ReviewModal
              reviews={this.state.reviews}
              rate={rate}
      
            />
            <CardText className="text-left">
              <small>{this.props.type} Coach</small>
            </CardText>
          </CardBody>
          <CardFooter>
            <a
              href={"/coach/" + this.state.id}
              tag={Link}
              className="btn-link mr-1 btn text-center text-secondary"
              style={{ textDecoration: "underline" }}
            >
              See More <FontAwesome className="fas fa-chevron-circle-right" />
            </a>
          </CardFooter>
        </Card>
      </Col>
    );
  }
}
