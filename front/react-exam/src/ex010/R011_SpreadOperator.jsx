import React, { Component } from 'react';

class R011_SpreadOperator extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        //javascript Array
        let varArray1 = ['num1', 'num2'];
        let varArray2 = ['num3', 'num4'];
        let sumVarArr = [varArray1[0], varArray1[1], varArray2[0], varArray2[1]];
        // let sumVarArr = [].concat(varArray1, varArray2);
        console.log('1. sumVarArr : ' + sumVarArr)
        //ES6 Array
        let sumLetArr = [...varArray1, ...varArray2];
        console.log('2. sumLetArr : ' + sumLetArr)
        const [sum1, sum2, ...remain] = sumLetArr;
        console.log('3. sum1 : ' + sum1 + ', sum2 : ' + sum2 + ', remain : ' + remain)

        let varObj1 = { key1: 'val1', key2: 'val2' }
        let varObj2 = { key2: 'new2', key3: 'val3' }
        //javascript Object
        let sumVarObj = Object.assign({}, varObj1, varObj2)
        console.log('4. sumVarObj : ' + JSON.stringify(sumVarObj))
        //ES6 Object
        let sumLetObj = { ...varObj1, ...varObj2 }
        console.log('5. sumLetObj : ' + JSON.stringify(sumLetObj))
        let { key1, key3, ...others } = sumLetObj;
        console.log('6. key1 : ' + key1 + ', key3 : ' + key3 + ', others : ' + JSON.stringify(others));
    }

    render() {
        return (
            <h2>[ THIS IS SpreadOperator ]</h2>
        )
    }
}

export default R011_SpreadOperator;