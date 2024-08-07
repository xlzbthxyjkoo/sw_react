import React from "react";
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";

function R050_ReactstrapPagination() {
    let pagination = (type) => {
        alert("Go " + type);
    }

    return (
        <>
        <Pagination size="lg" aria-label="Page navigation example">
            <PaginationItem>
                <PaginationLink previous onClick={e => pagination('previous')} />
            </PaginationItem>
            <PaginationItem>
                <PaginationLink onClick={e => pagination('1')}>1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
                <PaginationLink onClick={e => pagination('2')}>2</PaginationLink>
            </PaginationItem>
            <PaginationItem>
                <PaginationLink last onClick={e => pagination('last')} />
            </PaginationItem>
        </Pagination>
        </>
    )
}

export default R050_ReactstrapPagination;