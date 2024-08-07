import React, { useEffect } from "react";
import Swal from "sweetalert2";

function R056_SweeetalertBasic() {
    useEffect(() => {
        //fire 비동기 호출 방식
        //Swal.fire('1.SweetAlert');
        //alert('2. alert()');
        Swal.fire('1.SweetAlert').then(result => {
            alert('2. result.value: ' + result.value);
        });

    }, []);

    return (
        <>
        <h1>SweetAlert2</h1>
        </>
    )

}
export default R056_SweeetalertBasic;