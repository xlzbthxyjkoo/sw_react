import React from "react";
import {Route, Routes} from 'react-router-dom';
import ReactRouter from './R089_reactRouter';
import ReactRouter2 from './R089_reactRouter2';

function App() {
    return(
        <div className="App">
            <Routes>
                <Route exact path="/" element={<ReactRouter/>}/>
                <Route exact path="/reactRouter2" element={<ReactRouter2/>}/>
            </Routes>
        </div>
    )
}

export default App;