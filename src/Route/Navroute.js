import React, { useState } from 'react'
import { BrowserRouter, Route,Routes } from 'react-router-dom'
import Home from '../Component/Home'
import Services from '../Component/Services'
import Nav from '../Component/Nav'
import About from '../Component/About'
import Contact from '../Component/Contact'
import Alert from '../Component/Alert'

function Navroute() {
  //set alert
  const [alert, setAlert]= useState(null)

  const showAlert= (message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{setAlert(null)},2000)
  }
//set dark and light mode
  const [mode,setMode]=useState('dark')
  const toggleMode=()=>{
    if(mode==='dark'){
      setMode('light')
      document.body.style.backgroundColor ='white'
    }
    else{
      setMode('dark')
      document.body.style.backgroundColor ='black'

    }
  }
 
  return (
    <BrowserRouter>
    <>
    <div>
        <Nav mode={mode} toggleMode={toggleMode}/>
        <Alert alert={alert}/>
        <Routes>
          <Route path='/' element={<Home mode={mode}/>}/>
          <Route path='/services' element={<Services/>}/>
          <Route path='/about-us' element={<About/>}/>
          <Route path='/contact-us' element={<Contact showAlert={showAlert}/>}/>
          
          
        </Routes>
    </div>
    </>
    </BrowserRouter>
  )
}

export default Navroute