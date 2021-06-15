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
days.push(<><hr class="my-2" /> 
              
<h6 className="text-center">Day {prog.day}</h6>
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
          
          <th>Complexity</th>
          <th ></th>
          <th>Status</th>
          <th></th>
          <th></th>
        
       

</tr>
  </thead>
  <tbody>

  </tbody>
</Table>
               </Container> 
              
<hr class="my-2" />

</> )
});
        return (
            <div>
              <TrackNav />
              <div class="jumbotron text-center bg-white" >
                  <h3 class="display-4" style={{marginTop: "130px"}}>Track <span>{name + "'s"}</h6> Progress</h3>
                 
                  <hr class="my-2" /> 
                  <p>More info</p>
             
              </div>
{days}
              
            </div>
        )
    }
}
