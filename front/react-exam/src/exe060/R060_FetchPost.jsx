import React, {useEffect} from "react";

function R060_FetchPost() {
    useEffect(async () => {
        const response = await fetch('http://date.jsontest.com/', {
            method: 'POST', 
            headers: {'Content-Type': 'application/json'}, 
            body: {a: 'react', b: 'java'},
        });
        const body = await response.json();
        alert(body.time);
    })

}
export default R060_FetchPost;