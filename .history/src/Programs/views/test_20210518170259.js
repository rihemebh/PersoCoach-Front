import React, { Component } from "react";
import ProgramModal from "Programs/components/programModal";
import { Container, Row } from "reactstrap";
class Test extends Component {
    state = {  }
    render() { 
        return ( 
        <Container>
<Row
            <ProgramModal />
        </Container> );
    }
}
 
export default Test;