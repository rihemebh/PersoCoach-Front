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
            <div>
                <CatalogNav />
                <div style={{height: "100px"}}></div>
                <Jumb />

                <div className="container">
                <div className="col-3" >
                    <p> text here text tex e</p>
                </div>
                <div className="col-9">
                    <div className="row">
                    <CoachCard />
                    <CoachCard />
                    <CoachCard />
                    <CoachCard />
                    </div>
                </div>
               
            </div>
                $
                <DemoFooter />
            </div>
        )
    }
}
