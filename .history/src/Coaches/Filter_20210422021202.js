import React, { Component } from 'react'
import FontAwesome  from "react-fontawesome";

export default class Filter extends Component {
    render() {
        const style = {
            color: "#d9d9d9", 
            fontSize : "25px",
            marginRight: "5px"
        }
        return (
            <div  className="border" >
                <br></br>
                    <div><b>Rate</b>
                    <br></br>
                    
                    
                    <FontAwesome className="far fa-star " style={style}></FontAwesome>
         <FontAwesome className=" fa-star " style={style}></FontAwesome>
         <FontAwesome className="far fa-star " style={style}></FontAwesome>
         <FontAwesome className=" fa-star " style={style}></FontAwesome>
         <FontAwesome className="far fa-star " style={style}></FontAwesome>
        
         </div>
                    <hr></hr>
                    <div>Gender</div>
                    <hr></hr>
                    <div>Experience</div>
                    <hr></hr>
                    <div>Specialty </div>
                    <hr></hr>
            </div>
        )
    }
}
