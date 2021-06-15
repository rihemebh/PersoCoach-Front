import axios from "axios";
import TrackNav from "components/Navbars/trackNav";
import React, { Component } from "react";
import FontAwesome from "react-fontawesome";
import { toast, ToastContainer,Zoom , Bounce } from "react-toastify";

export default class Tracking extends Component {
constructor(props){
    super(props);
    this.state={
        prog : {}
    }
}
    componentDidMount(){
        axios.get("http://localhost:8080/api/program/"+this.props.match.params.id).then(function (response) {
            console.log(response)
            this.setState({prog : response.data});
            }.bind(this))
            .catch(function (error) {
              
              console.log(error);
            })
    }
  

    render() {
        var days= [];
        console.log(this.state.prog)
        console.log(this.state.prog.dailyprogram)
       var program = this.state.prog.dailyprogram;
program.forEach((day)=>{
days.push(<><hr class="my-2" /> 
              
<h6 className="text-center">Day {day.day}</h6>
<hr class="my-2" />

</> )
});
        return (
            <div>
              <TrackNav />
              <div class="jumbotron text-center bg-white" >
                  <h1 class="display-4" style={{marginTop: "150px"}}>Jumbo heading</h1>
                  <p class="lead">Jumbo helper text</p>
                  <hr class="my-2" /> 
                  <p>More info</p>
             
              </div>
{days}
              
            </div>
        )
    }
}
