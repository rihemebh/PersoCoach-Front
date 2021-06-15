import React, { Component } from 'react'
import { Container } from 'react-bootstrap'


export default class Programs extends Component {
    render() {
        return (
            <div>
             
                    <Container> 
      <button className="text-secondary btn btn-link" onClick={this.props.profile} >Profile</button>
     /<button className="disabled bg-white text-secondary btn btn-link">   Edit Profile </button>
      
      </Container>
      <Container>
             <Table>
  <thead>
  <tr>
          
          <th>Request Id </th>
          <th style={{width: "300px"}}>Client </th>
          <th>Age</th>
          <th>Gender</th>
          <th>Weight</th>
          <th>Height</th>
          <th>Exercices</th>
          <th>Goal</th>
          <th>status</th>
          <th></th>
          <th> <FontAwesome className="far fa-times-circle" name="clear" onClick={this.props.req}> </FontAwesome></th>
        </tr>


  </thead>
  <tbody>
{rows}
  </tbody>
</Table>
               </Container> 
              
            </div>
        )
    }
}
