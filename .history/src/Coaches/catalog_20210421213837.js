import DemoFooter from 'components/Footers/DemoFooter'
import CatalogNav from 'components/Navbars/CatalogNav'
import ExamplesNavbar from 'components/Navbars/ExamplesNavbar'
import React, { Component } from 'react'
import CoachCard from './CoachCard'
import Jumb from './jumbotron'
import { Container, Row, Col } from 'reactstrap';

export default class Catalog extends Component {
    render() {
        return (
            <div className="" style={{backgroundColor: "#F9F9F9"}}>
                <CatalogNav />
                <div style={{height: "100px"}}></div>
                <Jumb />

                <div><Container >
                    <Row>
                <Col xs="3" >
                    <p> Filter</p>
                    <div> </div>
                </Col>
                <Col xs="9">
                <Row style={{marginBottom: "10px"}}>
                    Sorted By the Best Rated
                </Row>
                    <Row>
                    <CoachCard />
                    <CoachCard />
                    <CoachCard />
                    <CoachCard />
                    </Row>
                    </Col>
                    </Row>
                </Container>
                </div>
            
                <DemoFooter />
            </div>
        )
    }
}
