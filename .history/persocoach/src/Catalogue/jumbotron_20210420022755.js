import React, { Component } from 'react'
import {Jumbotron} from 'react-bootstrap';
//linear-gradient(,#FFFFFF)
export default class Jumb extends Component {
    render() {
        return (
            <Jumbotron style={{background : "#ECE8F7 ", height: "300px"}}>

            <p style={{color: "#707070" , paddingLeft: "15px" , paddingTop: "0px"  , paddingBottom: "3px"}}> Home / Coaches </p>
            <div className="topCoaches Container">
                <div className="row">
                <div className="topcoach"><img src=""</div>
                <div className="topcoach"></div>
                <div className="topcoach"></div>
                </div>

                <div className="row text-center bg-dark" style={{ paddingTop: "0px" }}>
                    <p > Top three Coaches </p>
                </div>

            </div>
           </Jumbotron>
        )
    }
}
