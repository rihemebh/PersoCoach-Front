import React, { Component } from 'react'
import FontAwesome from 'react-fontawesome'
import { Card, CardBody, CardImg, CardTitle ,CardText, Col, CardLink, Row, CardSubtitle, CardFooter} from 'reactstrap'

export default class CoachCard extends Component {
    render() {
        return (
            <Col>
            <Card>
         <CardImg src={require("assets/img/coach3.jpeg").default}>
        </CardImg>
         <CardBody>
         <CardTitle tag="h6">Coach Name</CardTitle>
         <CardSubtitle>something</CardSubtitle>
         <FontAwesome className="fas fa-star warning"></FontAwesome>
         <FontAwesome className="fas fa-star"></FontAwesome>
         <FontAwesome className="fas fa-star"></FontAwesome>
         <FontAwesome className="far fa-star"></FontAwesome>
         <FontAwesome className=" fa-star"></FontAwesome>

         </CardBody>
         <CardFooter> <a href="#" className="btn-link mr-1 btn " style={{textDecoration: "underline"}}>See More</a></CardFooter>        
                    
    </Card>
    </Col>
               
                
            
        )
    }
}
