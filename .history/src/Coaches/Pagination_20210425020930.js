import React, { Component } from 'react'
//import {Pagination,PaginationLink,PaginationItem} from 'reactstrap'
import Pagination from "react-js-pagination";
export default class Pagin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activePage: this.props.current,

    };
  }
  handlePageChange(pageNumber) {
    console.log(`active page is ${pageNumber}`);
    this.setState({activePage: pageNumber});


  }
    render() {
        return (
           
        )
    }
}
