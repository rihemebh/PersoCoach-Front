import React, { Component } from 'react'

export default class Filter extends Component {
    render() {
        return (
            <div  className="border" >
                    <div className="border-radius">Rate</div>
                    <div className="border">Gender</div>
                    <div className="border">Experience</div>
                    <div className="border">Specialty </div>
            </div>
        )
    }
}
