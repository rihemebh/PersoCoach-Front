import DemoFooter from 'components/Footers/DemoFooter'
import CatalogNav from 'components/Navbars/CatalogNav'
import ExamplesNavbar from 'components/Navbars/ExamplesNavbar'
import React, { Component } from 'react'
import CoachCard from './CoachCard'
import Jumb from './jumbotron'

export default class Catalog extends Component {
    render() {
        return (
            <div>
                <CatalogNav />
                <div style={{height: "100px"}}></div>
                <Jumb />

                <div className="container">
                <div className="col-3" >

                </div>
                <div className="col-9">
                    <div className="row">
                    <Card>
                    
                    <CardTitle> Coach 1</CardTitle>
                </Card>
                <Card>
                    
                    <CardTitle> Coach 1</CardTitle>
                </Card>
                    </div>
                </div>
               
            </div>
                <CoachCard />
                <DemoFooter />
            </div>
        )
    }
}
