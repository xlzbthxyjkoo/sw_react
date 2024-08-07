import React from "react";

function R071_OnKey() {
    let onKey = (str, e) => {
        let val = e.target.value;
        console.log('event: ' + str + ', value: ', + val);
    }
    return( 
        <>
        onKeyDown: <input type='text' onKeyDown={e => onKey('onKeyDown', e)}></input><br/>
        onKeyUp: <input type='text' onKeyUp={e => onKey('onKeyUp', e)}></input>
        </>
    )
}
export default R071_OnKey;