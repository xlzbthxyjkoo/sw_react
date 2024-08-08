import React from "react";
import {increase, decrease} from './actions';

let gProps;

function Counter(props) {
    gProps = props;
    let count  = gProps.store.getState().data.count;
    return(
        <div>
            <h1>{count}</h1>
            <button onClick={addNumber}>+1</button>
            <button onClick={subNumber}>-1</button>
        </div>
    )
}

let addNumber = () => {
    gProps.store.dispatch(increase());
}
let subNumber = () => {
    gProps.store.dispatch(decrease());
}

export default Counter;