import React, { Component } from 'react'
import Mynavbar from '../Navbar/Mynavbar';
//import {Mynavbar} from '../Mynavbar';
import Jumb from './jumbotron';
export default class Catalog extends Component {
    render() {
        return (
            <div>
             <Mynavbar />
             <Jumb />
            </div>
        )
    }
}
