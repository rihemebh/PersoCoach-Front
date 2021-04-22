import React, { Component } from 'react'
import { Card, CardBody, CardImg, CardTitle ,CardText, Col, CardLink} from 'reactstrap'

export default class CoachCard extends Component {
    render() {
        return (
            <Col xs="4">
            <Card>
         <CardImg src={require("assets/img/coach3.jpeg").default}>
        </CardImg>
         <CardBody>
         <CardTitle tag="h5">Coach Name</CardTitle>
         <CardText>See more.</CardText>
         <CardLink></CardLink>
          <CardText>
            <small className="text-muted">Last updated 3 mins ago</small>
            </CardText>
         </CardBody>
                    
                    
    </Card>
    </Col>
               
                
            
        )
    }
}
