import React, { Component } from 'react'
import ProfileNav from "components/Navbars/ProfileNav";
import { 
  Alert,
  Button, 
  Card, 
  Form, 
  Input, 
  Container, 
  Row, 
  Col, 
  NavLink} from "reactstrap";
  import AuthNav from "components/Navbars/AuthNav";
import { Link } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "C:/Users/rihem/Desktop/PersoCoach1/PersoCoach-Front/node_modules/react-multi-carousel/lib/styles.css";
import "react-multi-carousel/lib/styles.css";
import TouchCarousel from 'react-touch-carousel'


export default class Track extends Component {
  
  componentDidMount(){
    document.documentElement.classList.remove("nav-open");
    document.body.classList.add("register-page");
 }
 componentWillUnmount(){
    document.body.classList.remove("register-page");
 } 
componentDidUpdate(){
    console.log(this.state.nbForm);
    document.body.classList.add("register-page");
}

    render() {
      const listOfData = [
        // your data array here
        <Card></Card>
      ]
      
      function CarouselContainer (props) {
        // render the carousel structure
      }
      
      function renderCard (index, modIndex, cursor) {
        const item = listOfData[modIndex]
        // render the item
      }
        return (
            <>
                  <ProfileNav />
      <div
        className="page-header"
        style={{
            //opacity: 0.8,
         // backgroundColor: "rgba(0, 0, 0, 0.9)",
          backgroundImage:
            "url(https://www.heart.org/-/media/healthy-living-images/fitness/runner_tying_shoe.jpg)",
        }}
      >
        
        <div className="filter" />
        <Container>
          <Row>
            <Col className="ml-auto mr-auto" >
              <Card className="ml-auto mr-auto" 
                    style={{
                   backgroundColor: "rgba(255, 255, 255, .2)",
                    borderRadius: "8px",
                    minWidth: "550px",
                    margin:" 20px 20px ",
                    minHeight: "500px",
                    overflowY: "auto",
                    overflowX: "auto",
                    padding: "30px" }}>
               
               
              
               <TouchCarousel
  component={CarouselContainer}
  cardCount={listOfData.length}
  cardSize={375}
  renderCard={renderCard}
  loop
  autoplay={3000}
/>
             
              </Card>
            </Col>
          </Row>
        </Container>
        <div className="footer register-footer text-center">
          <h6>
            © {new Date().getFullYear()}, made with{" "}
            <i className="fa fa-heart heart" /> by PersoCoach Team          </h6>
        </div>
        
        
        </div> 


            </>
        )
    }
}
