import React from "react";
import {increase, decrease} from './actions';
import { connect } from "react-redux";

// let gProps;

function Counter(props) {
    // gProps = props;
    let count  = props.count;
    return(
        <div>
            <h1>{count}</h1>
            <button onClick={props.addNumber}>+1</button>
            <button onClick={props.subNumber}>-1</button>
        </div>
    )
}

let mapStateToProps = (state, props) => {
    return {count: state.data.count};
}

let mapDispatchToProps = (dispatch, props) => {
    return {
        addNumber: () => dispatch(increase()),
        subNumber: () => dispatch(decrease()),
 
    };
}

// let addNumber = () => {
//     gProps.store.dispatch(increase());
// }
// let subNumber = () => {
//     gProps.store.dispatch(decrease());
// }

Counter = connect(mapStateToProps, mapDispatchToProps)(Counter);

export default Counter;