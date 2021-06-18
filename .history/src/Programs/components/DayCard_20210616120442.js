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
        }
    }

    handleCheck()
    render() {
        return (
            <div>
               <Card className="text-white" style={{
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
        <CardHeader tag="h6" >Day 1 </CardHeader>
        <CardBody>
          <CardTitle  className="text-white" tag="h5">

          <div className="text-center">50% Completed</div>
          <br/>
          <Progress color="warning" value="50"></Progress>
     
    
          </CardTitle>
          <CardText  className="text-white">
            <br/>
                  <Row className="text-white">
                      <Col>
                      <Table className="text-white">
<thead>
<tr>
    <th>Meals</th>
</tr>
</thead>
<tbody>
<tr>
    <td><input type="checkbox"></input> Breakfast : coffee <br/></td>
</tr>
<tr>
    <td><input type="checkbox"></input> Lunch : salad <br/></td>
</tr>
<tr>
    <td><input type="checkbox"></input>Dinner : Tea <br/></td>
</tr>
<tr>
    <td><input type="checkbox"></input>Extra : No extra <br/></td>
</tr>
</tbody>

</Table>

                      </Col>
                      <Col>
                      <Table className="text-white">
<thead>
<tr>
    <th>Water</th>
</tr>
</thead>
<tbody>
<tr>
    <td><input type="checkbox"></input> 2L <br/></td>
</tr>

</tbody>

</Table>
<Table className="text-white">
<thead>
<tr>
    <th>Restrictions</th>
</tr>
</thead>
<tbody>
<tr>
    <td><input type="checkbox"></input>No restriction <br/></td>
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
    <td><input type="checkbox"></input> <Button color="link" className="text-danger">Watch th video</Button> <br/>
    desc
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
