import React, { Component } from 'react'
import FontAwesome from 'react-fontawesome'
import { Card, CardBody, CardImg, CardTitle ,CardText, Col, CardLink, Row, CardSubtitle, CardFooter} from 'reactstrap'
import { Link } from "react-router-dom";
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
         <CardFooter> <a href="/Coach" tag={Link} className="btn-link mr-1 btn text-center text-danger" style={{textDecoration: "underline"}}>
             <small>See More</small></a></CardFooter>                     
    </Card>


    </Col>
               
                
            
        )
    }
}
