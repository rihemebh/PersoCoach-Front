import React, { Component } from 'react'

export default class Filter extends Component {
    render() {
        return (
            <div  className="border" >
                <br></br>
                    <div><b>Rate</b></div>
                    <FontAwesome className="fas fa-star text-warning"></FontAwesome>
                    <FontAwesome className="fas fa-star  text-warning"></FontAwesome>
                    <FontAwesome className="fas fa-star  "></FontAwesome>
                    <FontAwesome className="far fa-star " style={{color: "#d9d9d9"}}></FontAwesome>
                    <FontAwesome className=" fa-star " style={{color: "#d9d9d9"}}></FontAwesome>
                    <FontAwesome className="far fa-star " style={{color: "#d9d9d9"}}></FontAwesome>
                    <FontAwesome className=" fa-star " style={{color: "#d9d9d9"}}></FontAwesome>
                    <FontAwesome className="far fa-star " style={{color: "#d9d9d9"}}></FontAwesome>
                    <FontAwesome className=" fa-star " style={{color: "#d9d9d9"}}></FontAwesome>
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
