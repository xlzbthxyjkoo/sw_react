import React, {useEffect} from "react";

function R060_FetchPost() {
    useEffect(() => {
        async function postFetch() {
            const response = await fetch('http://date.jsontest.com/', {
                method: 'POST', 
                headers: {'Content-Type': 'application/json'}, 
                body: {a: 'react', b: 'java'},
            });
            const body = await response.json();
            alert(body.time);    
        }
        postFetch();
    }, [])

    return (
        <h1>fetch post</h1>
    )

}
export default R060_FetchPost;