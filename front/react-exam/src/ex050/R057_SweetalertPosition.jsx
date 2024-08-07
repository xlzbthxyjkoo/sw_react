import React from "react";
import Swal from "sweetalert2";

function R057_SweetalertPosition() {
    let saveAlert = (flag, positionFlag, e) => {
        Swal.fire({
            position: positionFlag,
            icon: "success",
            title: flag + "완료",
            showConfirmButton: false,
            timer: 1500
        })
    }
    return (
        <>
        <h1>Sweetalert2</h1>
        <button onClick={e => saveAlert('저장', 'center')}>저장</button>
        <button onClick={e => saveAlert('수정', 'bottom-end')}>수정</button>
        </>
    )
}

export default R057_SweetalertPosition;