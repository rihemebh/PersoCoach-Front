import { AvCheckbox } from 'availity-reactstrap-validation';
import React, { Component } from 'react'
import { Table } from 'react-bootstrap';
import { Card, Button, CardHeader, CardFooter, CardBody,
    CardTitle, CardText, Col, Row, Container ,Progress} from 'reactstrap';


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
         level = this.state.level +  14.5 ;
        console.log()
              this.setState({
            level: level      });

       }
       else {
        level = this.state.level -  14.5 ;
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
        <CardHeader tag="h6" >Day {this.props.program.day}</CardHeader>
        <CardBody>
          <CardTitle  className="" tag="h5">

          <div className="text-center">{this.state.level > 100 ? "You did it !"  : this.state.level +"% Completed"} </div>
          <br/>
          {this.state.level < 25 ?  <Progress color="danger" value={this.state.level}></Progress>:
          this.state.level< 50 ? <Progress color="warning" value={this.state.level}></Progress> :
          this.state.level <75 ? <Progress color="info" value={this.state.level}></Progress> :
                <Progress color="success" value={this.state.level}></Progress>

          }
         
     
    
          </CardTitle>
          <CardText  className="-white">
            <br/>
                  <Row className="-white">
                      <Col>
                      <Table className="-white">
<thead>
<tr>
    <th>Meals</th>
</tr>
</thead>
<tbody>
<tr>
    <td><input type="checkbox" className="form-check-???input"  onChange={this.handleCheck.bind(this)}></input> Breakfast : <br/></td>
</tr>
<tr>
    <td><input type="checkbox" onChange={this.handleCheck.bind(this)}></input> Lunch :  <br/></td>
</tr>
<tr>
    <td><input type="checkbox" onChange={this.handleCheck.bind(this)} ></input> Dinner :  <br/></td>
</tr>
<tr>
    <td><input type="checkbox" onChange={this.handleCheck.bind(this)}></input> Extra :   <br/></td>
</tr>
</tbody>

</Table>

                      </Col>
                      <Col>
                      <Table className="-white">
<thead>
<tr>
    <th>Water</th>
</tr>
</thead>
<tbody>
<tr>
    <td><input type="checkbox"  onChange={this.handleCheck.bind(this)} ></input>   L <br/></td>
</tr>

</tbody>

</Table>
<Table className="-white">
<thead>
<tr>
    <th>Restrictions</th>
</tr>
</thead>
<tbody>
<tr>
    <td><input type="checkbox"  onChange={this.handleCheck.bind(this)}></input>  <br/></td>
</tr>

</tbody>

</Table>
                      </Col>
                      <Col>
                      <Table className="-white">
<thead>
<tr>
    <th>Activities</th>
</tr>
</thead>
<tbody>
<tr>
    <td><input type="checkbox"  onChange={this.handleCheck.bind(this)}></input> <Button color="link" className="text-danger">Watch th video</Button> <br/>
   
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
