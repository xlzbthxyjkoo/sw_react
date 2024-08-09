import React from "react";

function R067_OnChange() {
    let change = (e) => {
        let val = e.target.value;
        console.log('param: ' + val);
    }

    return(
        <>
        <input type='text' onChange={change}></input>
        <select onChange={change}>
            <option value="react">react</option>
            <option value="java">java</option>
        </select>
        </>
    )

}

export default R067_OnChange;