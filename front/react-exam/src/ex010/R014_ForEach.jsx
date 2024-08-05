import React, {Component} from "react";

class R014_ForEach extends Component {
    componentDidMount() {
        let Es5_Arr = [3,2,8,8];
        let Es5_newArr = [];

        for(let i = 0; i < Es5_Arr.length; i++) {
            Es5_newArr.push(Es5_Arr[i]);
        }
        console.log("1. Es5_newArr: [" + Es5_newArr + "]");

        let Es6_Arr = [3,3,9,8];
        let Es6_newArr = [];
        Es6_Arr.forEach((result) => {
            Es6_newArr.push(result);
        })
        console.log("2. Es6_newArr: [" + Es6_newArr + "]");
    }

    render() {
        return (
            <h2>[This is forEach]</h2>
        )
    }
}

export default R014_ForEach;