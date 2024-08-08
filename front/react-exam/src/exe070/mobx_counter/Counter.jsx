import React, {Component} from "react";
import { makeObservable, observable, action } from "mobx";
import { observer } from "mobx-react";

class Counter extends Component {
    // number = 0;

    // constructor(props) {
    //     super(props);
    //     makeObservable(this, {
    //         number: observable,
    //         increase: action,
    //         decrease: action,
    //     });
    // }

    // increase = () => {
    //     this.number++;
    // }
    // decrease = () => {
    //     this.number--;
    // }

    render() {
        let counter = this.props.counter;
        return (
            <div>
                <h1>{counter.number}</h1>
                <button onClick={counter.increase}>+1</button>
                <button onClick={counter.decrease}>-1</button>
            </div>
        )
    }
}

export default observer(Counter);