import axios from 'axios';
import React, { Component } from 'react'
import { Container,Button , Table,  } from 'react-bootstrap'
import { Link, useHistory } from "react-router-dom";

export default class Programs extends Component {
    constructor(props){
        super(props);
    
        this.state= {
        
          programs : [],
          id: this.props.client.id,
         
        }
      }
       componentDidMount() {

        axios.get("http://localhost:8080/api/client/"+this.state.id+"/requests").then(function (response) {
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
        console.log(programs)
        // requests = this.props.requests;
      var rows = [];
   /*   programs.forEach((prog)=>
      { 
        rows.push(
          <tr>
        <td>{prog.id}</td>
        <td> 
         
          
          <a href="" className='text-secondary' >{prog.client.name} </a>
       
          
         </td>
        <td className='text-secondary ' > <h6>In progress</h6> </td>
        <td>
        <a
              className="btn-outline-info"
              href={"/program/" + prog.id}
              tag={Link}
              
            >Add Days program</a>
         </td>
        <td><Button color="link"  className="btn-outline-info" outline>
          <a
          href={"/tracking/"+prog.id}
          
          >

Tracking
          </a>
         
          
          </Button></td>
        
        
        
       
      
      </tr>);
      
      return rows });*/
        
        return (
            <div>
             
                    <Container> 
      <button className="text-secondary btn btn-link" onClick={this.props.profile} >Profile</button>
     /<button className="disabled bg-white text-secondary btn btn-link">   Programs </button>
      
      </Container>
   
      <Container style={{
                        background: "inherit",
                       backgroundColor: "rgba(255, 255, 255, .2)",
                      
                    borderRadius: "8px",
                    maxWidth: "1200px",
                    margin:" 20px 0 70px",
                    minWidth: "500px",
                    overflowX: "auto"}}>
             <Table>
  <thead>
  <tr>
          
          <th>Program Id </th>
          <th >Coach</th>
          <th>Status</th>
          <th></th>
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
