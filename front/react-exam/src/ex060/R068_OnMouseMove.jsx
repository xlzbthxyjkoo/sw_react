import React from "react";

function R068_OnMouseMove() {
    let mouseMove = (tag) => {
        console.log('Tag: ' + tag);
    }

    return(
        <>
        <div onMouseMove={e => mouseMove('div')}>
            <h3>DIV onMouseMove</h3>
        </div>
        <input type='text' onMouseMove={e => mouseMove('input')} />
        <select onMouseMove={e => mouseMove('select')}>
            <option value="react">react</option>
            <option value="java">java</option>
        </select>
        </>
    )

}

export default R068_OnMouseMove;
