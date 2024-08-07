import React from "react";

function R072_OnSubmit() {
    let submit = (e) => {
        let inputValue = document.querySelector('#inputId').value;
        console.log('inputValue: ' + inputValue);
        e.preventDefault();
    }
    return(
        <form onSubmit={submit}>
            <input type='text' name='inputName' id="inputId" />
            <input type='submit' value='Submit' />
        </form>
    )
}
export default R072_OnSubmit;