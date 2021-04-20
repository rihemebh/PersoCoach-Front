import React, { Component } from 'react'
import {Jumbotron} from 'react-bootstrap';

export default class Jumb extends Component {
    render() {
        return (
            <Jumbotron style={{background : " linear-gradient(#ECE8F7,#FFFFFF)", paddingTop: "30px" }}>

            <p style={{color: "#707070" , paddingLeft: "px" , paddingBottom: "3px"}}> Home / Coaches </p>
            <div className="topCoaches">
                
            </div>
           </Jumbotron>
        )
    }
}
