import React, { Component } from 'react'
import FontAwesome from 'react-fontawesome'
import { Card, CardBody, CardImg, CardTitle ,CardText, Col, CardLink, Row, CardSubtitle, CardFooter} from 'reactstrap'

export default class CoachCard extends Component {
    render() {
        return (
            <Col height="100px">
            <Card className="rounded" style={{height: "230px", width:"182px"}} >
         <CardImg src={require("assets/img/coach3.jpeg").default}>
        </CardImg>
         <CardBody>
         <CardTitle tag="h6">Coach's Name</CardTitle>
         <FontAwesome className="fas fa-star text-warning"></FontAwesome>
         <FontAwesome className="fas fa-star  text-warning"></FontAwesome>
         <FontAwesome className="fas fa-star  text-warning"></FontAwesome>
         <FontAwesome className="far fa-star " style={{color: "#d9d9d9"}}></FontAwesome>
         <FontAwesome className=" fa-star " style={{color: "#d9d9d9"}}></FontAwesome>

         </CardBody>
         <CardFooter> <a href="#" className="btn-link mr-1 btn text-center" style={{textDecoration: "underline"}}><smallSee More</a></CardFooter>                     
    </Card>

    <Card body>
        <CardTitle tag="h5">Special Title Treatment</CardTitle>
        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
       
      </Card>
    </Col>
               
                
            
        )
    }
}
