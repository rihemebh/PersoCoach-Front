import React, { Component } from 'react'
import { Container } from 'react-bootstrap'


export default class Programs extends Component {
    render() {
        return (
            <div>
             
                    <Container> 
      <button className="text-secondary btn btn-link" onClick={this.props.profile(false)} >Profile</button>
     /<button className="disabled bg-white text-secondary btn btn-link">   Edit Profile </button>
      
      </Container>
                
            </div>
        )
    }
}
