import React from "react";

function R069_OnMouseOver() {
    let mouseOver = (tag) => {
        console.log('Tag: ' + tag);
    }
    return (
        <>
        <div onMouseOver={e => mouseOver('div')}>
            <h3>DIV onMouseMove</h3>
        </div>
        <input type='text' onMouseOver={e => mouseOver('input')} />
        <select onMouseOver={e => mouseOver('select')}>
            <option value="react">react</option>
            <option value="java">java</option>
        </select>
        </>
    )

}
export default R069_OnMouseOver;