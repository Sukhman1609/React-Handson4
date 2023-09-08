import React from 'react'
import Home from './Home'
import Student from './Student'
import Contact from './Contact'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import LinkCompo from './LinkCompo'
function RouteComp() {
  return (
    <div>
      <BrowserRouter>
      <LinkCompo/>                                                     
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/student' element={<Student/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default RouteComp
