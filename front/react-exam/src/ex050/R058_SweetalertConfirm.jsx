import React from "react";
import Swal from 'sweetalert2';

function R058_SweetalertConfirm() {

    let deleteAlert = (e) => {
        Swal.fire({
            title: '정말 삭제하시겠습니다까?',
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#4B088A',
            cancelButtonColor: '#01DF01',
            confirmButtonText: 'Yes',
            cancelButtonText: 'No'
        }).then((result => {
            if(result.value) {
                document.querySelector('#deleteId').remove();
                Swal.fire(
                    'Deleted',
                    'sweetalert 삭제완료',
                    'success'
                )
            }
        }))
    }
    return (
        <>
        <h1 id = 'deleteId'>Sweetalert</h1>
        <button onClick={e => deleteAlert()}>삭제</button>
        </>
    )
}
export default R058_SweetalertConfirm;