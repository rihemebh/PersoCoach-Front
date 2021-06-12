import DemoFooter from 'components/Footers/DemoFooter'
import CatalogNav from 'components/Navbars/CatalogNav'
import ExamplesNavbar from 'components/Navbars/ExamplesNavbar'
import React, { Component } from 'react'
import CoachCard from './CoachCard'
import Jumb from './jumbotron'
import { Container, Row, Col , UncontrolledCollapse,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    UncontrolledDropdown, } from 'reactstrap';
import FontAwesome from 'react-fontawesome'
import Filter from './Filter'
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
                    <FontAwesome className="fa-sliders"> </FontAwesome> Filter
                   <Filter />
                </Col>
                <Col xs="9">
                <Row className="mr-auto" style={{marginBottom: "20px"}}>
                    <Col className="text-left">
                        
                        <UncontrolledDropdown >
                      <DropdownToggle
                        aria-expanded={false}
                        aria-haspopup={true}
                        caret
                      
                        data-toggle="dropdown"
                        href="#pablo"
                        id="dropdownMenuButton"
                        color="secondary"
                        nav
                        onClick={(e) => e.preventDefault()}
                        role="button"
                      >
                       Sorted By Best Rated
                      </DropdownToggle>
                        <DropdownMenu
                        aria-labelledby="dropdownMenuButton"
                        className="dropdown-info" >
                        <DropdownItem header tag="span">
                          Best Rated
                        </DropdownItem>
                        <DropdownItem
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          Action
                        </DropdownItem>
                        <DropdownItem
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          Another action
                        </DropdownItem>
                        <DropdownItem
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          Something else here
                        </DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          Separated link
                        </DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          Another separated link
                        </DropdownItem>
                      </DropdownMenu>
                      </UncontrolledDropdown>
                       </Col>
                    <Col className="text-center ">Showing 8 of 50 Coaches</Col>
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
