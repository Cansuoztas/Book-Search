import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Main from './components/Main'
import Modal from './components/Modal'

const Approuter = () => {
  return (
    <>
     <Routes>
        <Route path='/' element={<Main/>} />
        <Route path='modal' element={ <Modal/> } />
     </Routes>
    </>
  )
}

export default Approuter