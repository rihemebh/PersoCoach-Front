import React, { Component } from 'react'
import {Jumbotron} from 'react-bootstrap'
//linear-gradient(#ECE8F7,#FFFFFF)
export default class Jumb extends Component {
    render() {

        const picStyle = {

            height : "90px",
            width : "90px",
            margin : "10px"
        };
        return (
            <Jumbotron style={{height: "300px", backgroundColor: "white", paddingTop: "0px"}}>
                
            <p style={{color: "#707070" , paddingLeft: "30px" , paddingTop: "0px"  , paddingBottom: "3px"}}> Home / Coaches </p>
           
        <Hh
            <div className="topCoaches Container mr-auto" style={{paddingTop: "50px", paddingLeft: "0px"}}>
                <div className="row d-flex justify-content-center ">
                <div className="topcoach "><img className="img-circle img-no-padding img-responsive" src={require("assets/img/coach3.jpeg").default}  style={picStyle}></img></div>
                <div className="topcoach "><img className="img-circle img-no-padding img-responsive" src={require("assets/img/Coach.jpeg").default} style={picStyle}></img></div>
                <div className="topcoach"><img className="img-circle img-no-padding img-responsive" src={require("assets/img/coach2.jpeg").default} style={picStyle}></img></div>
                 </div>
<br></br>
          

            </div>
            <h5 className="text-center" style={{color : "#707070" }} > Top Coaches </h5>
           </Jumbotron>
        )
    }
}
