/*!

=========================================================
* Paper Kit React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import Progress from "react-circle-progress-bar";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

// reactstrap components
import {
  Card,
  Container,
  Row,
  Col,
  Carousel,
  CarouselItem,
  CarouselIndicators,
  CarouselCaption,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  CardText,
  CardSubtitle,
  Button,
} from "reactstrap";

// core components

const items = [
  {
    src: require("assets/img/soroush-karimi.jpg").default,
    altText: "Somewhere",
    caption: "Somewhere",
  },
  {
    src: require("assets/img/federico-beccari.jpg").default,
    altText: "Somewhere else",
    caption: "Somewhere else",
  },
  {
    src: require("assets/img/joshua-stannard.jpg").default,
    altText: "Here it is",
    caption: "Here it is",
  },
];

function SectionCarousel() {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [animating, setAnimating] = React.useState(false);
  const onExiting = () => {
    setAnimating(true);
  };
  const onExited = () => {
    setAnimating(false);
  };
  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };
  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };
  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };
  const percentage = 66;
  return (
    <>
      <div className="" id="carousel">
        <Container>
          <Row>
            <Col className="ml-auto mr-auto" md="12">
              <Card className="page-carousel">
                <Carousel
                  activeIndex={activeIndex}
                  next={next}
                  previous={previous}
                >
                  <CarouselIndicators
                    items={items}
                    activeIndex={activeIndex}
                    onClickHandler={goToIndex}
                  />
                  {items.map((item) => {
                    return (
                      <CarouselItem
                        onExiting={onExiting}
                        onExited={onExited}
                        key={item.src}
                      >
                        <Card
                          className=""
                          style={{
                            backgroundColor: "",

                            borderRadius: "8px",
                            color: "black",

                            height: "500px",

                            width: "1200px",
                          }}
                        >
                          <CardHeader className=""> Day 1</CardHeader>
                          <CardBody>
                            <CardTitle tag="h5">
                              <div style={{ width: 200, height: 200 }}>
                                <CircularProgressbar value={66} text="66"/>
                              </div>
                            </CardTitle>
                            <CardSubtitle tag="h6" className="mb-2 text-muted">
                              Card subtitle
                            </CardSubtitle>
                            <CardText>
                              Some quick example text to build on the card title
                              and make up the bulk of the card's content.
                            </CardText>
                            <Button>Button</Button>
                          </CardBody>
                        </Card>

                        <CarouselCaption captionText="day" captionHeader="" />
                      </CarouselItem>
                    );
                  })}
                  <a
                    className="left carousel-control carousel-control-prev"
                    data-slide="prev"
                    href="#pablo"
                    onClick={(e) => {
                      e.preventDefault();
                      previous();
                    }}
                    role="button"
                  >
                    <span className="fa fa-angle-left" />
                    <span className="sr-only">Previous</span>
                  </a>
                  <a
                    className="right carousel-control carousel-control-next"
                    data-slide="next"
                    href="#pablo"
                    onClick={(e) => {
                      e.preventDefault();
                      next();
                    }}
                    role="button"
                  >
                    <span className="fa fa-angle-right" />
                    <span className="sr-only">Next</span>
                  </a>
                </Carousel>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>{" "}
    </>
  );
}

export default SectionCarousel;
