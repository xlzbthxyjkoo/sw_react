import React, { Component } from "react";

class R008_LifecycleEx extends Component {
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
        //setState로 상태 변경 -> getDerivedStateFromProps 다시 실행
        this.setState({tmp_state2: true});
    }

    //상태값 변경되면 실행 됨(true: render 다시 호출 / false: render 다시 호출하지 않음)
    shouldComponentUpdate(props, state) {
        console.log('6. shouldComponentUpdate call - tmp_state2: ' + state.tmp_state2);
        return state.tmp_state2;
    }
    
    render () {
        console.log('3. render call');
        return (
            <h2>[This is componentDidMount function]</h2>
        )
    }
}

export default R008_LifecycleEx;