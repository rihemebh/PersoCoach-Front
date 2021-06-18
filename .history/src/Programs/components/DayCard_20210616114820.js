import { AvCheckbox } from 'availity-reactstrap-validation';
import React, { Component } from 'react'
import { Table } from 'react-bootstrap';
import { Card, Button, CardHeader, CardFooter, CardBody,
    CardTitle, CardText, Col, Row, Container } from 'reactstrap';


export default class DayCard extends Component {
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

          </CardTitle>
          <CardText  className="text-white">
              <Container>
                  <Row>
                      <Col>
                      <Table>
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
    <td>Dinner : Tea <br/></td>
</tr>
<tr>
    <td>Extra : No extra <br/></td>
</tr>
</tbody>

</Table>

                      </Col>
                      <Col>
                      <Table>
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
                      </Col>
                      <Col>
                      <Table>
<thead>
<tr>
    <th>Activities</th>
</tr>
</thead>
<tbody>
<tr>
    <td><input type="checkbox"></input> Descripton <br/></td>
</tr>
<tr>
    <td><input type="checkbox"></input> Lunch : salad <br/></td>
</tr>
<tr>
    <td>Dinner : Tea <br/></td>
</tr>
<tr>
    <td>Extra : salad <br/></td>
</tr>
</tbody>

</Table>
                      </Col>
                  </Row>
              </Container>

          </CardText>
          <Button>View details</Button>
        </CardBody>
        
      </Card> 
            </div>
        )
    }
}
