import React, { Component } from 'react'
import { Card, Button, CardHeader, CardFooter, CardBody,
    CardTitle, CardText } from 'reactstrap';

export default class DayCard extends Component {
    render() {
        return (
            <div>
               <Card className="text-white" style={{
                        background: "inherit",
                       backgroundColor: "rgba(255, 255, 255, .2)",
                      
                    borderRadius: "8px",
                    color: "black",
                    maxWidth: "1200px",
                  
                    minHeight: "500px",
                    padding: "70px" ,
                    marginTop: "40px",  
                  
                   }}>
        <CardHeader tag="h6" >Day 1 </CardHeader>
        <CardBody>
          <CardTitle  className="text-white" tag="h5">Special Title Treatment</CardTitle>
          <CardText  className="text-white">With supporting text below as a natural lead-in to additional content.</CardText>
          <Button>Go somewhere</Button>
        </CardBody>
        <CardFooter>Footer</CardFooter>
      </Card> 
            </div>
        )
    }
}
