import DemoFooter from 'components/Footers/DemoFooter'
import CatalogNav from 'components/Navbars/CatalogNav'
import ExamplesNavbar from 'components/Navbars/ExamplesNavbar'
import React, { Component } from 'react'
import CoachCard from './CoachCard'
import Jumb from './jumbotron'
import { Container, Row, Col } from 'reactstrap';
import FontAwesome from 'react-fontawesome'
//backgroundColor: "#F9F9F9"
export default class Catalog extends Component {
    render() {
        return (
            <div className="" style={{}}>
                <CatalogNav />
                <div style={{height: "120px"}}></div>
                <Jumb />

                <div><Container >
                    <Row>
                <Col xs="3" >
                    <i className="fa-sliders-h"></i> <FontAwesome className="fas fa-sliders-h"></FontAwesome> <p>Filter</p>
                    <div  className="border" ></div>
                </Col>
                <Col xs="9">
                <Row className="mr-auto" style={{marginBottom: "20px"}}>
                    <Col className="text-left">Sorted By Best Rated</Col>
                    <Col className="text-center ">Showing 6 of 50 Coaches</Col>
                    <Col className="text-right"><FontAwesome className="fa-table" style={{width: "40px"}}></FontAwesome>
                    <FontAwesome className="fa-list"></FontAwesome></Col>
                </Row>
                    <Row>
                    <CoachCard />
                    <CoachCard />
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
