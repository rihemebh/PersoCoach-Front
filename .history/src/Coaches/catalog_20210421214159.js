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
                <Row className="auto-mr" style={{marginBottom: "20px"}}>
                    <p className="d-flex justify-content-start">Sorted By the Best Rated</p>
                    <p className="d-flex justify-content-center">Showing 6 of 50 Coaches</p>
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
