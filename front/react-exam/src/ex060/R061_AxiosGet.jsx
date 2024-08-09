import React, {useEffect} from "react";
import axios from "axios";

function R061_AxiosGet() {
    useEffect(() => {
        axios.get('http://date.jsontest.com/?a=react&b=java').then(response => {alert(response.data.time)});

    }, [])
    return (
        <h1>axios get</h1>
    )

}
export default R061_AxiosGet;