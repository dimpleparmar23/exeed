import React, { Component } from 'react'

import "./Jobnav.css"



export class Jobnav extends Component {

  render() {
    return (
     <div>
         
     <nav className="navbar navbar-expand-lg bg-body-tertiary">
<div className="container-fluid">


 <div className="collapse navbar-collapse" id="navbarSupportedContent">
   <ul className="navbar-nav me-auto mb-2 mb-lg-0">
     <li className="item">
       <a className="link" aria-current="page" href="/">Opportunities</a>
     </li>
     <li className="item">
       <a className="link" href="/">Application</a>
     </li>
     <li className="item">
       <a className="link" href="/">Offers</a>
     </li>
    
     
     
   </ul>
  
 </div>
</div>

</nav>
   </div>
    )
  }
}

export default Jobnav
