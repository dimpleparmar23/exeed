import React from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"
import "./Login"


function Navbar() {
  return (
    <div>
         
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
<div className="container-fluid">
  <a className="navbar-brand" href="/"><b>JOBHUNT</b></a>
  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <li className="nav-item">
        <Link to="/" className="nav-link active" aria-current="page" >Home</Link>
      </li>
      <li className="nav-item">
        <Link to="/Jobs" className="nav-link" >Jobs</Link>
      </li>
      {/* <li className="nav-item">
       <Link to="/Assessmate" className="nav-link" >AssessMate</Link>
      </li> */}
      <li className="nav-item">
        <Link to="/Contact" className="nav-link" >Contact Us</Link>
      </li>
      <li className="nav-item">
       <Link to="/About" className="nav-link" >About</Link>
      </li>
      <li>
      <Link to="/Login" className="nav-link" >Admin</Link>
     </li>
      
      
    </ul>
    <form className="d-flex" role="search">
      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-success" type="submit">Search</button>
    </form>
  </div>
</div>
</nav>
    </div>

  )
}

export default Navbar
