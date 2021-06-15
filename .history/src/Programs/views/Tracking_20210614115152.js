import axios from "axios";
import TrackNav from "components/Navbars/trackNav";
import React, { Component } from "react";
import FontAwesome from "react-fontawesome";
import { toast, ToastContainer,Zoom , Bounce } from "react-toastify";
import { Container,Button , Table, Row ,Col} from 'react-bootstrap'

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
 <Container>
     <Row>
         <Col xs="5"></Col>
         <Col xs="3" className="text-center" >
             <h6 className="text-center  display-4 " style={{verticalAlign: "middle", display: "table-cell", marginTop: "50px"}}>Day {prog.day}</h6></Col>
         <Col xs="4"></Col>
     </Row>
 </Container>
<Container className="shadow w-75 " style={{borderRadius : "20px 20px 20px 20px"}}>
              <div className="" style={{height: "50PX", width: "100%" , display:"table"}}>
              
              </div>


<Container  style={{
                        background: "inherit",
                       backgroundColor: "rgba(255, 255, 255, .2)",
                      
                    borderRadius: "8px",
                    maxWidth: "1200px",
                    margin:" 20px 0 70px",
                    minWidth: "500px",
                    overflowX: "auto"}}>
                        <h5>Meals</h5>
                        <br></br>
<Row className="justify-content-center">
             <Table >
  <thead>
  <tr>
          
          <th>breakfast</th>
          <th >Lunch</th>
          <th>Dinner</th>
          <th>Extra</th>
          <th>Water (L)</th>
        
        
       

</tr>
  </thead>
  <tbody>
<tr>
    <td>{prog.breakfast}</td>
    <td>{prog.lunch}</td>
    <td>{prog.dinner}</td>
    <td>{prog.extra== ""? "No extra" : prog.extra}</td>
    <td>{prog.waterQuantity}</td>
</tr>
  </tbody>
</Table>
</Row>
               </Container> 

<h5>Activities</h5>
{}
</Container>
</> )
});
        return (

            <div class="  bg-light">
              <TrackNav />
              <div class="jumbotron  bg-light" >
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
