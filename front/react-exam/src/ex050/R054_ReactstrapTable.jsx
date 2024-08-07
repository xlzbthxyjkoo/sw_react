import React from "react";
import {Table} from 'reactstrap';

function R054_ReactstrapTable() {
    return(
        <Table>
            <thead>
                <tr>
                    <th>Number</th>
                    <th>Book Name</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td>java 실전</td>
                    <td>20.000원</td>
                </tr>
                <tr>
                    <th scope="row">2</th>
                    <td>react 실전</td>
                    <td>15.000원</td>
                </tr>
            </tbody>
        </Table>
    )
}

export default R054_ReactstrapTable;