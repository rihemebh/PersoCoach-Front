import { AvCheckbox } from 'availity-reactstrap-validation';
import React, { Component } from 'react'
import { Table } from 'react-bootstrap';
import { Card, Button, CardHeader, CardFooter, CardBody,
    CardTitle, CardText, Col, Row, Container ,Progress} from 'reactstrap';

import VideoPlayer from "./VideoPlayer";


export default class DayCard extends Component {
    constructor(props){
        super(props);
        this.state={
            level :0,
            breakfast : false,
            lunch : false,
            dinner : false ,
            extra : false, 
            water: false, 
            activity : false,
        }
    }

    handleCheck(e){
        var level ;
       if(e.target.checked == true)
       {
         level = this.state.level +  16.5 ;
        console.log()
              this.setState({
            level: level      });

       }
       else {
        level = this.state.level -  16.5 ;
        console.log()
              this.setState({
            level: level      });
       }
        
    }
    render() {
       
        return (
            <div>
               <Card className="" style={{
                        background: "inherit",
                       backgroundColor: "rgba(255, 255, 255, .2)",
                      
                    borderRadius: "8px",
                    color: "black",
                    maxWidth: "1200px",
                   width: "1000px",
                    maxHeight: "500px",
                    padding: "70px" ,
                    marginTop: "50px",
                    overflowY: "auto"  
                  
                   }}>
                       
                      
        <CardHeader tag="h6"  className="" >Day {this.props.program.day} </CardHeader>
        <CardBody>
          <CardTitle  className="" tag="h5">
          <br></br> {this.props.program.restrictions} <br></br>
          <div className="text-center text-white">{this.state.level == 99 ? "You did it !"  : this.state.level +"% Completed"} </div>
          <br/>
          {this.state.level < 25 ?  <Progress color="danger" value={this.state.level}></Progress>:
          this.state.level< 50 ? <Progress color="warning" value={this.state.level}></Progress> :
          this.state.level <75 ? <Progress color="info" value={this.state.level}></Progress> :
                <Progress color="success" value={this.state.level+1}></Progress>

          }
         
     
    
          </CardTitle>
          <CardText  className="text-white">
            <br/>
                  <Row className="text-white">
                      <Col>
                      <Table className="text-white">
<thead>
<tr>
    <th className="text-danger">Meals</th>
</tr>
</thead>
<tbody>
<tr>
    <td><input type="checkbox" className="form-check-???input"  onChange={this.handleCheck.bind(this)}></input> Breakfast : {this.props.program.breakfast} <br/></td>
</tr>
<tr>
    <td><input type="checkbox" onChange={this.handleCheck.bind(this)}></input> Lunch : {this.props.program.lunch}  <br/></td>
</tr>
<tr>
    <td><input type="checkbox" onChange={this.handleCheck.bind(this)} ></input> Dinner : {this.props.program.dinner}  <br/></td>
</tr>
<tr>
    <td><input type="checkbox" onChange={this.handleCheck.bind(this)}></input> Extra : {this.props.program.extra}  <br/></td>
</tr>
</tbody>

</Table>

                      </Col>
                      <Col>
                      <Table className="text-white">
<thead>
<tr>
    <th className="text-danger">Water</th>
</tr>
</thead>
<tbody>
<tr>
    <td><input type="checkbox"  onChange={this.handleCheck.bind(this)} ></input> {this.props.program.waterQuantity}  L <br/></td>
</tr>

</tbody>

</Table>

                      </Col>
                      <Col>
                      <Table className="text-white">
<thead>
<tr>
    <th>Activities</th>
</tr>
</thead>
<tbody>
<tr>
    <td>
 <span  className="text-info" >{this.props.program.activitydesritpion} <br></br></span>
    
    <br/>
    <input type="checkbox"  onChange={this.handleCheck.bind(this)}></input> Exercices   <br/>
    <br/>
    <VideoPlayer videoId={this.props.program.videos.fileId} ></VideoPlayer>
    </td>
</tr>

</tbody>

</Table>

                      </Col>
                      
                  </Row>
               
                 

          </CardText>
          
        </CardBody>
     
        
      </Card> 
      
            </div>
        )
    }
}
