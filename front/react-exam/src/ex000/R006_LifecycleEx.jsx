import React, { Component } from "react";

class R006_LifecycleEx extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        console.log('1. constructor call');
    }

    static getDerivedStateFromProps(props,state) {
        console.log('2. getDerivedStateFromProps call: ' + props.prop_value);
        return {};
    }
    
    render () {
        console.log('3. render call');
        return (
            <h2>[This is getDerivedStateFromProps function]</h2>
        )
    }
}

export default R006_LifecycleEx;