import CatalogNav from 'components/Navbars/CatalogNav'
import ExamplesNavbar from 'components/Navbars/ExamplesNavbar'
import React, { Component } from 'react'
import Jumb from './jumbotron'

export default class Catalog extends Component {
    render() {
        return (
            <div>
                <CatalogNav />
                <br>
                <br></br>
                <Jumb />
            </div>
        )
    }
}
