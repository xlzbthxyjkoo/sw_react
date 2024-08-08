import React, {Component} from "react";
import {add} from './actions';
import { connect } from "react-redux";

class StrAddButton extends Component {
    render() {
        return (
            // <input value='Add200' type='button' onClick={this.addString} />
            <input value='Add200' type="button" onClick={this.props.addString} />
        )
    }
    // addString = () => {
    //     this.props.store.dispatch(add());
    // }
}

let mapDispatchToProps = (dispatch, props) => {
    console.log('Props from App.jsx in mapDispatchToProps: ' + props.AppProp);
    return {addString: () => dispatch(add())};
}
StrAddButton = connect(null, mapDispatchToProps)(StrAddButton);
export default StrAddButton;