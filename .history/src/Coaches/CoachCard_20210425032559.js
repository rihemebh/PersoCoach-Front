import React, { Component } from 'react'
import FontAwesome from 'react-fontawesome'
import { Card, CardBody, CardImg, CardTitle ,CardText, Col, CardLink, Row, CardSubtitle, CardFooter} from 'reactstrap'
import { Link } from "react-router-dom";
export default class CoachCard extends Component {
    constructor(props){
        super(props);

        this.state = {
            id: props.id,
            name : props.name?? "unnamed",
            img : props.img,
            rate : props.rate,
        }
    }
    render() {
       
        const url= this.state.img;
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
            <Col height="auto">
            <Card className="rounded" style={{height: "275px", width:"183px"}} >
         <CardImg src={url} style={{height: "130px"}} >
        </CardImg>
         <CardBody>
         <CardTitle tag="h6">{this.state.name}</CardTitle>
         {rate}
         <CardText><small>{this.props.type} Coach</small></CardText>
       </CardBody>
      
         <CardFooter> <a href={'/coach/'+ this.state.id} tag={Link} className="btn-link mr-1 btn text-center text-danger" style={{textDecoration: "underline"}}>
             <small>See More</small></a></CardFooter>                     
    </Card>


    </Col>
               
                
            
        )
    }
}
