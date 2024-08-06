import React, {Component} from "react";

class R033_ReturnMap extends Component {
    render() {
        const element_array = ['react', '200', 'array'];
        return (
            <ul>
                {element_array.map((val) => <li key={val}>{val}</li>)}
            </ul>
        )
    }
}

export default R033_ReturnMap;