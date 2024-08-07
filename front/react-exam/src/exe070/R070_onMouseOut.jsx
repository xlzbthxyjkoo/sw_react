import React from "react";

function R070_OnMouseOut() {
    let mouseOut = (tag) => {
        console.log('Tag: ' + tag);
    }
    return (
        <>
        <div onMouseOut={e => mouseOut('div')}>
            <h3>DIV onMouseMove</h3>
        </div>
        <input type='text' onMouseOut={e => mouseOut('input')} />
        <select onMouseOut={e => mouseOut('select')}>
            <option value="react">react</option>
            <option value="java">java</option>
        </select>
        </>
    )

}
export default R070_OnMouseOut;