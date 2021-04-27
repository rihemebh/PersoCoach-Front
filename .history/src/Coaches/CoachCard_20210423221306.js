import React, { Component } from 'react'
import FontAwesome from 'react-fontawesome'
import { Card, CardBody, CardImg, CardTitle ,CardText, Col, CardLink, Row, CardSubtitle, CardFooter} from 'reactstrap'
import { Link } from "react-router-dom";
export default class CoachCard extends Component {
    constructor(props){
        super(props);

        this.state = {
            name : props.name,
            img : props.img
        }
    }
    render() {
       
        const url="assets/img/Coach.jpeg";
        return (
            <Col height="100px">
            <Card className="rounded" style={{height: "230px", width:"182px"}} >
         <CardImg src={require("assets/img/Coach.jpeg").default}style={{height: "130px"}} >
        </CardImg>
         <CardBody>
         <CardTitle tag="h6">{this.state.name}</CardTitle>

         for (let index = 0; index <rray.len<; index++) {
<    const element = array[index];
 
         }
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
