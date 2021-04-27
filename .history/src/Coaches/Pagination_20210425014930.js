import React, { Component } from 'react'
//import {Pagination,PaginationLink,PaginationItem} from 'reactstrap'
import Pagination from "react-js-pagination";
export default class Pagin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activePage: 1,

    };
  }
  handlePageChange(pageNumber) {
    console.log(`active page is ${pageNumber}`);
    this.setState({activePage: pageNumber});
  }
    render() {
        return (
            <Pagination
            activePage={this.state.activePage}
            itemsCountPerPage={this.props.nbPerPage}
            totalItemsCount={this.props.nb}
          //  pageRangeDisplayed={5}
            onChange={this.handlePageChange.bind(this)}>
           
          </Pagination>
        )
    }
}
