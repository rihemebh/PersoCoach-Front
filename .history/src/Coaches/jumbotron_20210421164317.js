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
           
        <h3 className="text-center">
            Choose Your New life Style
        </h3>
            
<br></br>
          

            </div>
            <h5 className="text-center" style={{color : "#707070" }} > Top Coaches </h5>
           </Jumbotron>
        )
    }
}
