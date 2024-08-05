import React, { Component } from "react";

class R007_LifecycleEx extends Component {
    //가장 먼저 실행해야 하는 작업
    constructor(props) {
        super(props);
        this.state = {};
        console.log('1. constructor call');
    }

    static getDerivedStateFromProps(props,state) {
        console.log('2. getDerivedStateFromProps call: ' + props.prop_value);
        return {
            tmp_state: props.prop_value
        };
    }

    //화면이 그려진 이후에 해야하는 작업
    componentDidMount() {
        console.log('4. componentDidMount call');
        console.log('5. tmp_state: ' + this.state.tmp_state);
    }
    
    render () {
        console.log('3. render call');
        return (
            <h2>[This is componentDidMount function]</h2>
        )
    }
}

export default R007_LifecycleEx;