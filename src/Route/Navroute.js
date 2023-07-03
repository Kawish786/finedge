import React from 'react'
import { BrowserRouter, Route,Routes } from 'react-router-dom'
import Home from '../Component/Home'
import Services from '../Component/Services'
import Nav from '../Component/Nav'
import About from '../Component/About'
import Contact from '../Component/Contact'

function Navroute() {
  return (
    <BrowserRouter>
    <>
    <div>
        <Nav/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/services' element={<Services/>}/>
          <Route path='/about-us' element={<About/>}/>
          <Route path='/contact-us' element={<Contact/>}/>
          
          
        </Routes>
    </div>
    </>
    </BrowserRouter>
  )
}

export default Navroute