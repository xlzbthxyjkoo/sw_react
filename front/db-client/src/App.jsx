import './App.css'
import { Routes, Route } from 'react-router-dom';
import ApiGetJson from './apitest/R110_ApiGetJson';
import RootPath from './apitest/R109_root';
import ApiPostJson from './apitest/R111_ApiPostJson';

function App() {

  return (
    <div>
      <Routes>
        <Route exact path='/' element={<RootPath/>}/>
        <Route exact path='/getJson' element={<ApiGetJson/>}/>
        <Route exact path='/postJson' element={<ApiPostJson/>}/>
      </Routes>
    </div>
  )
}

export default App
