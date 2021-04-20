import React, { Component } from 'react'
import {Jumbotron} from 'react-bootstrap';
//linear-gradient(,#FFFFFF)
export default class Jumb extends Component {
    render() {

        const picStyle = {

            height : "90px",
            width : "90px",
            margin : "10px"
        };
        return (
            <Jumbotron style={{background : "linear-gradient(#ECE8F7,#FFFFFF) ", height: "300px"}}>

            <p style={{color: "#707070" , paddingLeft: "15px" , paddingTop: "0px"  , paddingBottom: "3px"}}> Home / Coaches </p>
            <div className="topCoaches Container mr-auto" style={{paddingTop: "50px", paddingLeft: "0px"}}>
                <div className="row d-flex justify-content-center">
                <div className="topcoach "><img className="rounded-circle"src="Coach1.jpeg" style={picStyle}></img></div>
                <div className="topcoach "><img className="rounded-circle"src="Coach.jpeg" style={picStyle}></img></div>
                <div className="topcoach"><img className="rounded-circle"src="Coach.jpeg" style={picStyle}></img></div>
                 </div>
<br></br>
                <div className="row text-center" style={{   }}>
                <p className="text-center"> Top Three Coaches </p>
                </div>

            </div>
           </Jumbotron>
        )
    }
}
