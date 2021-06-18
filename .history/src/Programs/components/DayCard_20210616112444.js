import React, { Component } from 'react'
import { Card, Button, CardHeader, CardFooter, CardBody,
    CardTitle, CardText } from 'reactstrap';

export default class DayCard extends Component {
    render() {
        return (
            <div>
               <Card  style={{
                        background: "inherit",
                       backgroundColor: "rgba(255, 255, 255, .2)",
                      
                    borderRadius: "8px",
                    color: "black",
                    maxWidth: "1200px",
                    margin:" 20px 0 70px",
                    minHeight: "500px",
                    padding: "70px" ,
                    marginTop: "40px",  
                  
                   }}>
        <CardHeader tag="h6" >Day 1 </CardHeader>
        <CardBody>
          <CardTitle tag="h5">Special Title Treatment</CardTitle>
          <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
          <Button>Go somewhere</Button>
        </CardBody>
        <CardFooter>Footer</CardFooter>
      </Card> 
            </div>
        )
    }
}
