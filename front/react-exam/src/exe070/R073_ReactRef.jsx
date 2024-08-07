import React, {useState} from "react";

function R073_ReactRef() {
    const [inputRef, setInputRef] = useState(React.createRef());

    let refFocus = (e) => {
        inputRef.current.focus();
    }
    let javascriptFocus = () => {
        document.querySelector('#id').focus();
    }

    return(
        <>
        <input id='id' type='text' ref={inputRef}></input>
        <input type='button' value = 'Ref Focus' onClick={refFocus}></input>
        <input type = 'button' value = 'Javascript Focus' onClick={javascriptFocus}></input>
        </>
    )

}
export default R073_ReactRef;