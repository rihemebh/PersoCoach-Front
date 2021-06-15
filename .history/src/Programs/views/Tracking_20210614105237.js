import axios from "axios";
import TrackNav from "components/Navbars/trackNav";
import React, { Component } from "react";
import FontAwesome from "react-fontawesome";
import { toast, ToastContainer,Zoom , Bounce } from "react-toastify";
import { Container,Button , Table,  } from 'react-bootstrap'

export default class Tracking extends Component {
constructor(props){
    super(props);
    this.state={
        prog : {},
        programs: [],
    }
}
    componentDidMount(){
        axios.get("http://localhost:8080/api/program/"+this.props.match.params.id).then(function (response) {
            console.log(response.data)
            this.setState({prog : response.data,programs : response.data.dailyprogram});
            }.bind(this))
            .catch(function (error) {
              
              console.log(error);
            })
    }
  

    render() {
        var name = "";
        if(this.state.prog.client != undefined)
        name = this.state.prog.client.name;
        var days= [];
       const program = this.state.programs;
      
      // Object.keys(program).map()
   //   program.forEach();
program.map((prog)=>{
days.push(<>
              <div className="bg-light" style={{height: "50PX", width: "100%" , display:"table", backgroundColor : "#51bcda"}}>
              <h6 className="text-center text-white  " style={{verticalAlign: "middle", display: "table-cell"}}>Day {prog.day}</h6>
              </div>


<Container style={{
                        background: "inherit",
                       backgroundColor: "rgba(255, 255, 255, .2)",
                      
                    borderRadius: "8px",
                    maxWidth: "1200px",
                    margin:" 20px 0 70px",
                    minWidth: "500px",
                    overflowX: "auto"}}>
                        <h5>Meals</h5>
                        <br></br>
             <Table>
  <thead>
  <tr>
          
          <th>breakfast</th>
          <th >Lunch</th>
          <th>Dinner</th>
          <th>Extra</th>
        
        
       

</tr>
  </thead>
  <tbody>

  </tbody>
</Table>
               </Container> 


</> )
});
        return (

            <div>
              <TrackNav />
              <div class="jumbotron  bg-white" >
                  <div style={{marginTop: "50px"}}>

                  <button className="text-secondary btn btn-link" onClick={this.props.profile} >Profile</button>
     /<button className="disabled bg-white text-secondary btn btn-link">   Programs </button>
                  <h3 class="display-4 text-info text-center " >Track <span style={{fontSize : "bold"}}>{name + "'s"}</span> Progress</h3>
              
                  </div>
             
               
             
              </div>
{days}
              
            </div>
        )
    }
}
