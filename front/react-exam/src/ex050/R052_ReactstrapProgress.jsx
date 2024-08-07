import React, {useState, useEffect} from 'react'
import { Progress } from 'reactstrap'

function R052_F_ReactstrapProgress() {
    const [progress, setProgress] = useState(0);

    let doProgress = () => {
        if(progress != 100) {
            setTimeout(() => {
                setProgress(progress + 1);
            }, 100);
        }
    }
    useEffect(doProgress);


    return (
        <>
        <Progress color='info' value={progress}>
            {progress}% 
        </Progress>
        <Progress multi>
            <Progress bar color='warning' value='25'>25%</Progress>
            <Progress bar color='success' value='35'>react</Progress>
            <Progress bar value='20'>Hello</Progress>
            <Progress bar color='danger' value='20'>20%</Progress>
        </Progress>
        </>
    )

}
export default R052_F_ReactstrapProgress;