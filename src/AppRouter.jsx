import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from './components/Home'
const AppRouter = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>}/>


        </Routes>

    </div>
  )
}

export default AppRouter