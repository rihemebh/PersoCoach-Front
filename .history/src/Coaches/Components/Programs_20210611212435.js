import axios from 'axios';
import React, { Component } from 'react'
import { Container,Button , Table,  } from 'react-bootstrap'


export default class Programs extends Component {
    constructor(props){
        super(props);
    
        this.state= {
        
          programs : [],
          id: this.props.coach.id,
         
        }
      }
       componentDidMount() {
           
         axios.get("http://localhost:8080/api/programs/"+this.props.coach.id).then(function (response) {
          this.setState({programs: response.data});
          console.log(response.data);
        }.bind(this))
        .catch(function (error) {
          // handle error
          console.log("error"+ error);
        });
       }
    render() {
        var programs = this.state.programs;
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
          
          <th>Program Id </th>
          <th >Client </th>
          <th></th>
        
       

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
