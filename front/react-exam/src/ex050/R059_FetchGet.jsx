import React, {useEffect} from "react";

function R059_FetchGet() {
    useEffect(async () => {
        const response = await fetch('http://date.jsontest.com/?a=react&b=java');
        const body = await response.json();
        alert(body.time);
    }, [])

    return (
        <h1>fetch get</h1>
    )

}
export default R059_FetchGet;