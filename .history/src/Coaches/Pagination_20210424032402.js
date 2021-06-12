import React, { Component } from 'react'
//import {Pagination,PaginationLink,PaginationItem} from 'reactstrap'

export default class Pagin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activePage: 1
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
          itemsCountPerPage={10}
          totalItemsCount={30}
          pageRangeDisplayed={5}
          onChange={this.handlePageChange.bind(this)}>
            <PaginationItem>
              <PaginationLink
                aria-label="Previous"
                href="#pablo"
                onClick={(e) => e.preventDefault()}
              >
                <i aria-hidden={true} className="fa fa-angle-left" />
                <span className="sr-only">Previous</span>
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink
                href="#pablo"
                onClick={(e) => e.preventDefault()}
              >
                1
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink
                href="#pablo"
                onClick={(e) => e.preventDefault()}
              >
                2
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink
                href="#pablo"
                onClick={(e) => e.preventDefault()}
              >
                3
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink
                href="#pablo"
                onClick={(e) => e.preventDefault()}
              >
                4
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink
                href="#pablo"
                onClick={(e) => e.preventDefault()}
              >
                5
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink
                aria-label="Next"
                href="#pablo"
                onClick={(e) => e.preventDefault()}
              >
                <i aria-hidden={true} className="fa fa-angle-right" />
                <span className="sr-only">Next</span>
              </PaginationLink>
            </PaginationItem>
          </Pagination>
        )
    }
}
