import React from "react";

function R066_onClick() {
    let buttonClick = (param) => {
        if(typeof param != 'string') {
            param = 'Click a'
        }
        console.log('param: ' + param);
    };

    return(
        <>
        <button onClick={e => buttonClick('Click button')}>Click button</button>
        <div onClick={e => buttonClick('Click div')}>Click div</div>
        <a href="#" onClick={buttonClick}>Click a</a>
        </>
    )
}
export default R066_onClick;