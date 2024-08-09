import React, {useEffect} from "react";
import axios from "axios";

function R062_AxiosPost() {
    useEffect(() => {
        axios.post('http://date.jsontest.com/', {
            a: 'react',
            b: 'java'
        }).then(response => {alert(response.data.time)});
    })

    return (
        <h1>axios post</h1>
    )
}

export default R062_AxiosPost;