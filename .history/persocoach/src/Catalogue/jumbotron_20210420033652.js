import React, { Component } from 'react'
import {Jumbotron} from 'react-bootstrap';
//linear-gradient(#ECE8F7,#FFFFFF)
export default class Jumb extends Component {
    render() {

        const picStyle = {

            height : "90px",
            width : "90px",
            margin : "10px"
        };
        return (
            <Jumbotron style={{height: "300px", backgroundColor: "white"}}>
                <hr></hr>
            <p style={{color: "#707070" , paddingLeft: "15px" , paddingTop: "0px"  , paddingBottom: "3px"}}> Home / Coaches </p>
           
            <hr></hr>
            <div className="topCoaches Container mr-auto" style={{paddingTop: "50px", paddingLeft: "0px"}}>
                <div className="row d-flex justify-content-center">
                <div className="topcoach "><img className="rounded-circle"src="Coach3.jpeg" style={picStyle}></img></div>
                <div className="topcoach "><img className="rounded-circle"src="Coach2.jpeg" style={picStyle}></img></div>
                <div className="topcoach"><img className="rounded-circle"src="Coach.jpeg" style={picStyle}></img></div>
                 </div>
<br></br>
          

            </div>
            <h5 className="text-center" style={{color : "#707070" }} > Top Three Coaches </h5>
           </Jumbotron>
        )
    }
}
