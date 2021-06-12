import React, { Component } from "react";
import FontAwesome from "react-fontawesome";
import {
  Card,
  CardBody,
  CardImg,
  CardTitle,
  CardText,
  Col,
  CardFooter,
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

    const rate = [];

    let nb = 0;
    const length = this.state.reviews.length;
    console.log( this.state.reviews[0]);
    var TotalReviews = 0;
    length == 0
      ? (TotalReviews = [])
      : (TotalReviews = this.state.reviews[0].coach.rate
        );

    TotalReviews.forEach((element) => {
      nb = nb + element;
    });
    length == 0 ? (nb = 0) : (nb = nb / length);
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

    return (
      <Col height="auto">
        <Card className="" style={{ height: "300px", width: "250px" }}>
          <CardImg src={url}  alt="coach's picture" style={{ height: "160px" }} />
          <CardBody>
            <CardTitle tag="h6">{this.state.name} </CardTitle>
            <ReviewModal
              reviews={this.state.reviews}
              rate={rate}
              name={this.props.name}
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
            >
              See More <FontAwesome name="chevron" className="fa-chevron-circle-right" />
            </a>
          </CardFooter>
        </Card>
      </Col>
    );
  }
}
