import React, { Component } from 'react'
import { Card, CardBody, CardImg, CardTitle ,CardText, Col, CardLink} from 'reactstrap'

export default class CoachCard extends Component {
    render() {
        return (
            <Col xs="3">
            <Card>
         <CardImg src={require("assets/img/coach3.jpeg").default}>
        </CardImg>
         <CardBody>
         <CardTitle tag="h5">Coach Name</CardTitle>
       
          <CardText>
          <a href="#" className="btn-link mr-1 btn underline">See More</a>
            <small className="text-muted">Last updated 3 mins ago</small>
            </CardText>
         </CardBody>
                    
                    
    </Card>
    </Col>
               
                
            
        )
    }
}
