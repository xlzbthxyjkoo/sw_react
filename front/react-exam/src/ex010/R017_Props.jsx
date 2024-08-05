import React, {Component} from "react";

class R017_Props extends Component {
    render() {
        let props_value = this.props.props_value;
        props_value += ' from App.jsx';
        return(
            <div>{props_value}</div>
        )
    }
}

export default R017_Props;