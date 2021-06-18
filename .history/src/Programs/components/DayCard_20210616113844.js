import React, { Component } from 'react'
import { Table } from 'react-bootstrap';
import { Card, Button, CardHeader, CardFooter, CardBody,
    CardTitle, CardText } from 'reactstrap';


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
                  
                    minHeight: "500px",
                    padding: "70px" ,
                    marginTop: "50px",  
                  
                   }}>
        <CardHeader tag="h6" >Day 1 </CardHeader>
        <CardBody>
          <CardTitle  className="text-white" tag="h5">

          </CardTitle>
          <CardText  className="text-white">
<Table>
<thead>
<tr>
    <th>Meals</th>
</tr>
</thead>
<tbody>
<tr>
    <td>Breakfast : coffee <br/></td>
</tr>
</tbody>

</Table>

          </CardText>
          <Button>View details</Button>
        </CardBody>
        <CardFooter>Footer</CardFooter>
      </Card> 
            </div>
        )
    }
}
