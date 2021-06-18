import { AvCheckbox } from 'availity-reactstrap-validation';
import React, { Component } from 'react'
import { Table } from 'react-bootstrap';
import { Card, Button, CardHeader, CardFooter, CardBody,
    CardTitle, CardText, Col, Row, Container ,Progress} from 'reactstrap';


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
          <div className="text-center">With Labels</div>
      <Progress multi>
        <Progress bar value="15">Meh</Progress>
        <Progress bar color="success" value="35">Wow!</Progress>
        <Progress bar color="warning" value="25">25%</Progress>
        <Progress bar color="danger" value="25">LOOK OUT!!</Progress>
      </Progress>
      <div className="text-center">Stripes and Animations</div>
      <Progress multi>
        <Progress bar striped value="15">Stripes</Progress>
        <Progress bar animated color="success" value="30">Animated Stripes</Progress>
        <Progress bar color="info" value="25">Plain</Progress>
      </Progress>
    
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
    <td><input type="checkbox"></input> <Button color="danger" outline>Watch th video</Button> <br/>
    desc
    </td>
</tr>

</tbody>

</Table>
                      </Col>
                  </Row>
              </Container>

          </CardText>
          
        </CardBody>
        
      </Card> 
            </div>
        )
    }
}