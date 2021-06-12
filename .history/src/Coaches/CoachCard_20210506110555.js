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
      "http://localhost:3000/catalog/coach/" +this.state.id+"/review"
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
          <FontAwesome className="fas fa-star text-warning" name="star"></FontAwesome>
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
    const divStyle = {
      display: 'flex',
      alignItems: 'center'
    };
    return (
      <Col height="auto">
        <Card className="rounded" style={{ height: "275px", width: "183px" }}>
          <CardImg src={url} style={{ height: "130px" }}></CardImg>
          <CardBody>
            <CardTitle tag="h6">{this.state.name}</CardTitle>
            <CardText> <Container style={divStyle}> <Row> <Col lg="8">{rate} </Col>
            <Col lg="4"><small><ReviewModal reviews={this.state.reviews} /></small></Col> 
            </Row></Container>
           
            <small>{this.props.type} Coach</small></CardText>
          </CardBody>
          <CardFooter>
            <a
              href={"/coach/" + this.state.id}
              tag={Link}
              className="btn-link mr-1 btn text-center text-secondary"
              style={{ textDecoration: "underline" }}
            >
              <small>See More</small>
            </a>
          </CardFooter>
        </Card>
      </Col>
    );
  }
}
