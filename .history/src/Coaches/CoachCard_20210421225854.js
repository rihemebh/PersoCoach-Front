import React, { Component } from 'react'
import FontAwesome from 'react-fontawesome'
import { Card, CardBody, CardImg, CardTitle ,CardText, Col, CardLink, Row, CardSubtitle, CardFooter} from 'reactstrap'

export default class CoachCard extends Component {
    render() {
        return (
            <Col height="100px">
            <Card style={{height: "230px", width="50px"}} >
         <CardImg src={require("assets/img/coach3.jpeg").default}>
        </CardImg>
         <CardBody>
         <CardTitle tag="h6">Coach's Name</CardTitle>
         <FontAwesome className="fas fa-star text-warning"></FontAwesome>
         <FontAwesome className="fas fa-star  text-warning"></FontAwesome>
         <FontAwesome className="fas fa-star  text-warning"></FontAwesome>
         <FontAwesome className="far fa-star  text-light"></FontAwesome>
         <FontAwesome className=" fa-star text-light border-dark"></FontAwesome>

         </CardBody>
         <CardFooter> <a href="#" className="btn-link mr-1 btn " style={{textDecoration: "underline"}}>See More</a></CardFooter>                     
    </Card>
    </Col>
               
                
            
        )
    }
}
