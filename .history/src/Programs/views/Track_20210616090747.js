import React, { Component } from 'react'
import ProfileNav from "components/Navbars/ProfileNav";

export default class Track extends Component {
    render() {
        return (
            <>
                  <ProfileNav />
      <div
        className="page-header"
        style={{
            opacity: 0.8,
            backgroundColor
          backgroundImage:
            "url(https://www.heart.org/-/media/healthy-living-images/fitness/runner_tying_shoe.jpg)",
        }}
      ></div>  
            </>
        )
    }
}
