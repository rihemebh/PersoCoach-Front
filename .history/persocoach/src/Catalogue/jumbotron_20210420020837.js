import React, { Component } from 'react'
import {Jumbotron} from 'react-bootstrap';

export default class Jumb extends Component {
    render() {
        return (
            <Jumbotron style={{background : " ", paddingTop: "30px" }}>

            <p style={{color: "#707070" , paddingLeft: "15px" , paddingBottom: "3px"}}> Home / Coaches </p>
            <div className="topCoaches">
                
            </div>
           </Jumbotron>
        )
    }
}
