import axios from 'axios';
import React, { Component } from 'react'
import { Container,Button , Table,  } from 'react-bootstrap'


export default class Programs extends Component {
    constructor(props){
        super(props);
    
        this.state= {
          request : {
    
          },
          requests : [],
         
        }
      }
       componentDidMount() {
           
         axios.get("http://localhost:8080/catalog/coach/60ad0f846fc93706c0edab81/requests").then(function (response) {
          this.setState({requests: response.data});
          console.log(response.data);
        }.bind(this))
        .catch(function (error) {
          // handle error
          console.log(error);
        });
       }
    render() {
        var programs = this.state.requests;
        // requests = this.props.requests;
      var rows = [];
      programs.forEach((prog)=>
      { 
        rows.push(
          <tr>
        <td>{prog.id}</td>
        <td style={{width: "300px"}}> 
         
          
          {prog.client.name}
       
          
         </td>
        <td><Button color="link">Tracking</Button></td>
        
        
        <td></td>
       
      
      </tr>);
      
      return rows });
        
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
