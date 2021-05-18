import React, { Component } from "react";
import ProgramModal from "Programs/components/programModal";
import { Container, Row ,Col} from "reactstrap";
class Test extends Component {
    state = {  }
    render() { 
        return ( 
        <Container>
<Row><Col> <ProgramModal /></Col><
    Col></Col></Row>
           
        </Container> );
    }
}
 
export default Test;