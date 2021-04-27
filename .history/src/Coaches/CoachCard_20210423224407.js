import React, { Component } from 'react'
import FontAwesome from 'react-fontawesome'
import { Card, CardBody, CardImg, CardTitle ,CardText, Col, CardLink, Row, CardSubtitle, CardFooter} from 'reactstrap'
import { Link } from "react-router-dom";
export default class CoachCard extends Component {
    constructor(props){
        super(props);

        this.state = {
            name : props.name?? "unnamed",
            img : props.img,
            rate : props.rate,
        }
    }
    render() {
       
        const url="assets/img/Coach.jpeg";
        let nb= this.state.rate;
        const rate= [];
     for (let i = 0; i < 5; i++) {
         if(nb>0){
            rate.push( <FontAwesome className="fas fa-star text-warning"></FontAwesome>);
            nb--;
         }
       else{
        rate.push( <FontAwesome className="far fa-star " style={{color: "#d9d9d9"}}></FontAwesome>);
       }

       
     }
     
        return (
            <Col height="100px">
            <Card className="rounded" style={{height: "230px", width:"182px"}} >
         <CardImg src={require("assets/img/Coach.jpeg").default}style={{height: "130px"}} >
        </CardImg>
         <CardBody>
         <CardTitle tag="h6">{this.state.name}</CardTitle>
            {rate}
       </CardBody>

         <CardFooter> <a href={require('/coach/'+props.id)} tag={Link} className="btn-link mr-1 btn text-center text-danger" style={{textDecoration: "underline"}}>
             <small>See More</small></a></CardFooter>                     
    </Card>


    </Col>
               
                
            
        )
    }
}
