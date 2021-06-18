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
import MyCarousel from 'Programs/components/DaysCarousel';
import ProgramNav from "components/Navbars/ProgramNav";
import ProfilePageHeader from "components/Headers/ProfilePageHeader.js";
import DemoFooter from "components/Footers/DemoFooter.js";
import AuthService from "Authentification/AuthService";
import SectionCarousel from 'views/index-sections/SectionCarousel';
import DayCard from 'Programs/components/DayCard';

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
static get CARD_STYLE() {
  return {
    height: '200px',
    width: '200px',
    paddingTop: '80px',
    textAlign: 'center',
    background: '#52C0F5',
    color: '#FFF',
    fontSize: '12px',
    textTransform: 'uppercase',
    borderRadius: '10px',
  };
}
    render() {
    
    
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
        
        <div className="filter" style={{nimoverflowX: "auto"}}/>
     
  <DayCard />
  <DayCard />
  <DayCard />
            
        
<br />
<br />
{/**
 * 
 * <div className="footer register-footer text-center">
          <h6>
            © {new Date().getFullYear()}, made with{" "}
            <i className="fa fa-heart heart" /> by PersoCoach Team          </h6>
        </div>
 */}
        
        
        
        </div> 
<div className="filter">
<DayCard />
<DayCard />
  <DayCard />
             
</div>

            </>
        )
    }
}
