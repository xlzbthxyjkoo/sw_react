import React, {useState, useEffect} from "react";

function R031_ReactHook(props) {
    const [count, setCount] = useState(0);
    const [flag, setFlag] = useState(1);

    let buttonClick = () => {
        let temp = count;
        temp++;
        setCount(temp);
    }

    let buttonFlag = () => {
        let temp = flag;
        temp *= -1;
        setFlag(temp);
    }

    useEffect(() => {
        console.log('useEffect');
    }, [flag])

    return (
        <div style={{padding: "0px"}}>
            <h2>{count}</h2>
            <button onClick={buttonClick}>
                count
            </button>
            <button onClick={buttonFlag}>
                flag
            </button>
        </div>
    )
}

export default R031_ReactHook;