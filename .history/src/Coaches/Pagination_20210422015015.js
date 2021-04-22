import React, { Component } from 'react'
import {}

export default class Pagination extends Component {
    render() {
        return (
            <Pagination>
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
