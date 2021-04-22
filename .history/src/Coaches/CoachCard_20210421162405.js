import React, { Component } from 'react'
import { Card, CardBody, CardImg, CardTitle ,CardText, Col} from 'reactstrap'

export default class CoachCard extends Component {
    render() {
        return (
            <Col
     <Card>
         <CardImg src={require("assets/img/coach3.jpeg").default}>
</CardImg>
         <CardBody>
         <CardTitle tag="h5"></CardTitle>
         <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
          <CardText>
            <small className="text-muted">Last updated 3 mins ago</small>
            </CardText>
         </CardBody>
                    
                    
    </Card>
               
                
            
        )
    }
}
