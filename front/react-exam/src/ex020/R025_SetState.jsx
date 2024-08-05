import React, {Component} from "react";

class R025_SetState extends Component {
    constructor(props) {
        super(props);
        this.state = {
            StateString: 'react',
        }
    }

    stateChange = (flag) => {
        //render 함수 호출되지 않기 때문에 화면 갱신 x
        if(flag == 'direct') {
            this.state.StateString = "리액트";
        }
        //render 함수 호출되기 때문에 화면이 바뀜
        if(flag == 'setState') {
            this.setState({StateString: "리액트"});
        }
    }

    render() {
        return(
            <div style={{padding: "0px"}}>
                <button onClick={(e) => this.stateChange("direct", e)}>
                    state 직접 변경
                </button>
                <button onClick={(e) => this.stateChange("setState", e)}>
                    setState로 변경
                </button><br/>
                [state 변경하기] StateString: {this.state.StateString}
                
            </div>
        )
    }

}

export default R025_SetState;