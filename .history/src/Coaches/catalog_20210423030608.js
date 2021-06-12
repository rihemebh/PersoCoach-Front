import DemoFooter from 'components/Footers/DemoFooter'
import CatalogNav from 'components/Navbars/CatalogNav'
import ExamplesNavbar from 'components/Navbars/ExamplesNavbar'
import React, { Component } from 'react'
import CoachCard from './CoachCard'
import Jumb from './jumbotron'
import { Link } from "react-router-dom";
import { Container, Row, Col , UncontrolledCollapse,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    UncontrolledDropdown, } from 'reactstrap';
import FontAwesome from 'react-fontawesome'
import Filter from './Filter'
import Pagin from './Pagination'
//backgroundColor: "#F9F9F9"
export default class Catalog extends Component {
  emptyCoach={
    id : 0,
    name :"",
    gender : "",
    type : "",
    description : "",
    rate: 0,
    acadamicExp : [],
    workExp: [],
    reviews:{
        name: "",
        body: ""
    }

}
    constructor(props){
        super(props);

        this.state = {
            isLoading :true,
            coaches: [],
            coach: this.emptyCoach,
        }
    }

    async componentDidMount(){
        const response= await fetch("catalog/coaches");
        const body = await response.json();
        this.setState({coaches: body , isLoading : false});
        console.log(this.state.coaches[0]);

    }

    render() {
        return (
            <div className="" style={{}}>
                <CatalogNav />
                <div style={{height: "120px"}}></div>
                <Jumb />

                <div><Container >
                    <Row>
                <Col xs="3"  style={{marginTop: "57px"}}>
                <h6> <FontAwesome className="fa-sliders"> </FontAwesome> Filter</h6>
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
                          Worst Rated
                        </DropdownItem>
                        <DropdownItem
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          Newest
                        </DropdownItem>
                        <DropdownItem
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          Older
                        </DropdownItem>
                      
                      </DropdownMenu>
                      </UncontrolledDropdown>
                       </Col>
                    <Col className="text-center ">Showing 8 of 50 Coaches</Col>
                    <Col className="text-right"><FontAwesome className="fa-table" style={{width: "40px"}}></FontAwesome>
                    <FontAwesome className="fa-list"></FontAwesome></Col>
                </Row>
                    <Row>
                    <CoachCard name={this.state.coaches[0]}/>
                    <CoachCard name={this.state.coaches.name} />
                    <CoachCard name="name3"/>
                    <CoachCard />
                    <CoachCard />
                    <CoachCard />
                    <CoachCard />
                    <CoachCard />
                    <Pagin />
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
