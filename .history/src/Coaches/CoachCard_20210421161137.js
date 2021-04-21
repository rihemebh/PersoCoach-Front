import React, { Component } from 'react'
import { Card, CardBody, CardImg, CardTitle } from 'reactstrap'

export default class CoachCard extends Component {
    render() {
        return (
     <Card>
         <CardImg src={require("assets/img/coach3.jpeg").default}>

         </CardImg>
         <CardBody>
         <CardTitle> Coach 1</CardTitle>
         </CardBody>
                    
                    
    </Card>
               
                
            
        )
    }
}
