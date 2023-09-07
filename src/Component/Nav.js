import React from 'react'
import { useNavigate } from 'react-router-dom'


function Nav(props) {
    const nav = useNavigate()
    const handleHome=()=>{
        nav('/')
    }
    const handleService=()=>{
        nav('/services')
    }
    const handleText=()=>{
        nav('/')
    }
    const handleAbout=()=>{
      nav('/about-us')
  }
  const handleContact=()=>{
    nav('/contact-us')
}
  return (
    <nav className={`navbar navbar-expand-lg bg-${props.mode}`}>
  <div className="container-fluid">
    <label className="navbar-brand" onClick={handleText} style={{fontSize:"30px ",color:props.mode==='dark'?'whitesmoke':'black',cursor:"pointer"}}>FinEdge</label>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon bg-light"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarText">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0" >
        <li className="nav-item">
          <label className="nav-link active" style={{cursor:"pointer",color:props.mode==='dark'?'whitesmoke':'black'}} onClick={handleHome} aria-current="page">Home</label>
        </li>
        <li className="nav-item">
          <label className="nav-link active" style={{cursor:"pointer",color:props.mode==='dark'?'whitesmoke':'black'}} onClick={handleService} >Services</label>
        </li>
        <li className="nav-item">
          <label className="nav-link active" style={{cursor:"pointer",color:props.mode==='dark'?'whitesmoke':'black'}}  onClick={handleAbout}>About Us</label>
        </li>
        <li className="nav-item">
          <label className="nav-link active" style={{cursor:"pointer",color:props.mode==='dark'?'whitesmoke':'black'}}  onClick={handleContact} >Contact Us</label>
        </li>
      </ul>
      <div className="form-check form-switch">
        <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode}/>
        <label className="form-check-label" for="flexSwitchCheckDefault"></label>
      </div>
      <span className="navbar-text" style={{color:props.mode==='dark'?'whitesmoke':'black'}} >
        Connect Safe with us
      </span>
    </div>
  </div>
</nav>
  )
}

export default Nav