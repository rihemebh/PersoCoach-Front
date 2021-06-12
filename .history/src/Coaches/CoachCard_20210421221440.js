import React, { Component } from 'react'
import FontAwesome from 'react-fontawesome'
import { Card, CardBody, CardImg, CardTitle ,CardText, Col, CardLink, Row, CardSubtitle} from 'reactstrap'

export default class CoachCard extends Component {
    render() {
        return (
            <Col>
            <Card>
         <CardImg src={require("assets/img/coach3.jpeg").default}>
        </CardImg>
         <CardBody>
         <CardTitle >Coach Name</CardTitle>
         <CardSubtitle>something</CardSubtitle>
         <FontAwesome className="fas fa-star warning"></FontAwesome>
         <FontAwesome className="fas fa-star"></FontAwesome>
         <FontAwesome className="fas fa-star"></FontAwesome>
         <FontAwesome className="far fa-star"></FontAwesome>
         <FontAwesome className=" fa-star"></FontAwesome>

          <CardText>
          <a href="#" className="btn-link mr-1 btn " style={{textDecoration: "underline"}}>See More</a>
            
            </CardText>
            
         </CardBody>
                    
                    
    </Card>
    </Col>
               
                
            
        )
    }
}
