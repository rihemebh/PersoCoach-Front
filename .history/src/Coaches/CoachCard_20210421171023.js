import React, { Component } from 'react'
import FontAwesome from 'react-fontawesome'
import { Card, CardBody, CardImg, CardTitle ,CardText, Col, CardLink, Row} from 'reactstrap'

export default class CoachCard extends Component {
    render() {
        return (
            <Row>
            <Card>
         <CardImg src={require("assets/img/coach3.jpeg").default}>
        </CardImg>
         <CardBody>
         <CardTitle tag="h5">Coach Name</CardTitle>
         <FontAwesome className <i class="fas fa-star"></i>
          <CardText>
          <a href="#" className="btn-link mr-1 btn underline">See More</a>
            
            </CardText>
         </CardBody>
                    
                    
    </Card>
    </Row>
               
                
            
        )
    }
}
